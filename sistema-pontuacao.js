// Sistema de Pontuação Global
class SistemaPontuacao {
    constructor() {
        this.chaveAluno = this.obterChaveAluno();
        this.pontuacaoTotal = this.carregarPontuacao();
        this.jogosCompletados = this.carregarJogosCompletados();
    }

    obterChaveAluno() {
        const dados = JSON.parse(localStorage.getItem('dados_aluno_atual') || '{}');
        return dados.nome
            ? `adm_${dados.nome}_${dados.turma || ''}`.replace(/\s+/g, '_').toLowerCase()
            : 'adm_anonimo';
    }

    recarregarAluno() {
        this.chaveAluno = this.obterChaveAluno();
        this.pontuacaoTotal = this.carregarPontuacao();
        this.jogosCompletados = this.carregarJogosCompletados();
    }

    carregarPontuacao() {
        return parseInt(localStorage.getItem(this.chaveAluno + '_pontuacao') || '0');
    }

    carregarJogosCompletados() {
        return JSON.parse(localStorage.getItem(this.chaveAluno + '_jogos') || '{}');
    }

    salvarPontuacao() {
        localStorage.setItem(this.chaveAluno + '_pontuacao', this.pontuacaoTotal.toString());
    }

    salvarJogosCompletados() {
        localStorage.setItem(this.chaveAluno + '_jogos', JSON.stringify(this.jogosCompletados));
    }

    // Carrega pontuação do servidor (Google Sheets) e mescla com local
    async carregarDoServidor(googleScriptUrl) {
        const dados = JSON.parse(localStorage.getItem('dados_aluno_atual') || '{}');
        if (!dados.nome || !googleScriptUrl) return;

        try {
            // Google Apps Script requer jsonp para GET cross-origin
            // Usamos um iframe oculto + postMessage como workaround
            const url = googleScriptUrl
                + '?acao=carregar'
                + '&nome='     + encodeURIComponent(dados.nome)
                + '&turma='    + encodeURIComponent(dados.turma    || '')
                + '&semestre=' + encodeURIComponent(dados.semestre || '')
                + '&callback=_admCallback';

            await new Promise((resolve) => {
                // Timeout de 5s — se não responder, usa dados locais
                const timeout = setTimeout(resolve, 5000);

                window._admCallback = (json) => {
                    clearTimeout(timeout);
                    try {
                        if (json.status === 'ok' && json.dados) {
                            const pontuacaoServidor = parseInt(json.dados.pontuacao) || 0;
                            const jogosServidor = json.dados.jogos ? JSON.parse(json.dados.jogos) : {};

                            let atualizado = false;
                            for (const [jogo, pts] of Object.entries(jogosServidor)) {
                                const ptsLocal = this.jogosCompletados[jogo] || 0;
                                if (pts > ptsLocal) {
                                    this.jogosCompletados[jogo] = pts;
                                    atualizado = true;
                                }
                            }

                            if (atualizado) {
                                this.pontuacaoTotal = Object.values(this.jogosCompletados).reduce((a, b) => a + b, 0);
                                this.salvarPontuacao();
                                this.salvarJogosCompletados();
                            } else if (pontuacaoServidor > this.pontuacaoTotal) {
                                this.pontuacaoTotal = pontuacaoServidor;
                                this.salvarPontuacao();
                            }
                        }
                    } catch(err) {}
                    resolve();
                };

                const script = document.createElement('script');
                script.src = url;
                script.onerror = () => { clearTimeout(timeout); resolve(); };
                document.head.appendChild(script);
                setTimeout(() => script.remove(), 6000);
            });
        } catch (e) {
            console.log('Sem conexão com servidor, usando dados locais.');
        }
    }

    adicionarPontos(jogo, pontos, maxPontos) {
        const pontuacaoAnterior = this.jogosCompletados[jogo] || 0;
        if (pontos > pontuacaoAnterior) {
            this.pontuacaoTotal += (pontos - pontuacaoAnterior);
            this.jogosCompletados[jogo] = pontos;
            this.salvarPontuacao();
            this.salvarJogosCompletados();
        }

        return {
            pontuacaoTotal:  this.pontuacaoTotal,
            melhorPontuacao: pontos > pontuacaoAnterior,
            progresso:       this.calcularProgresso()
        };
    }

    calcularProgresso() {
        const totalJogos = 15;
        const jogosCompletos = Object.keys(this.jogosCompletados).length;
        return Math.round((jogosCompletos / totalJogos) * 100);
    }

    obterEstatisticas() {
        return {
            pontuacaoTotal:   this.pontuacaoTotal,
            jogosCompletados: Object.keys(this.jogosCompletados).length,
            progresso:        this.calcularProgresso(),
            detalhes:         this.jogosCompletados
        };
    }

    resetar() {
        this.pontuacaoTotal = 0;
        this.jogosCompletados = {};
        localStorage.removeItem(this.chaveAluno + '_pontuacao');
        localStorage.removeItem(this.chaveAluno + '_jogos');
    }
}

// Função para criar barra de progresso
function criarBarraProgresso(containerId, progresso, label = '') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div style="margin-bottom: 10px; font-weight: bold;">${label}</div>
        <div style="background: #e0e0e0; height: 20px; border-radius: 10px; overflow: hidden;">
            <div style="background: linear-gradient(90deg, #4CAF50, #45a049); height: 100%; width: ${progresso}%; transition: width 0.5s ease; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.9em; font-weight: bold;">
                ${progresso}%
            </div>
        </div>
    `;
}

// Função para mostrar pontuação
function mostrarPontuacao(containerId, pontos, label = 'Pontuação Total') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; border-radius: 15px; text-align: center; margin: 10px 0;">
            <div style="font-size: 1.1em; margin-bottom: 5px;">${label}</div>
            <div style="font-size: 2em; font-weight: bold;">${pontos}</div>
        </div>
    `;
}

// Instância global do sistema
const sistemaPontuacao = new SistemaPontuacao();

// Função global reutilizável por todos os jogos para enviar pontuação ao servidor
function sincronizarComServidor() {
    const dadosAluno = JSON.parse(localStorage.getItem('dados_aluno_atual') || '{}');
    if (!dadosAluno.nome) return;

    const GOOGLE_SCRIPT_URL = localStorage.getItem('google_script_url');
    if (!GOOGLE_SCRIPT_URL) return;

    const stats = sistemaPontuacao.obterEstatisticas();
    const agora = new Date();

    const dados = {
        nome:             dadosAluno.nome,
        semestre:         dadosAluno.semestre,
        turma:            dadosAluno.turma,
        periodo:          dadosAluno.periodo,
        email:            dadosAluno.email,
        data:             agora.toLocaleDateString('pt-BR'),
        hora:             agora.toLocaleTimeString('pt-BR'),
        pontuacao:        stats.pontuacaoTotal,
        progresso:        stats.progresso + '%',
        jogosCompletados: stats.jogosCompletados,
        jogos:            JSON.stringify(stats.detalhes)
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    }).catch(() => console.log('Offline: pontuação salva localmente.'));
}
