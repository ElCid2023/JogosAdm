// Sistema de Pontuação Global
class SistemaPontuacao {
    constructor() {
        this.pontuacaoTotal = this.carregarPontuacao();
        this.jogosCompletados = this.carregarJogosCompletados();
    }

    carregarPontuacao() {
        return parseInt(localStorage.getItem('pontuacao_administracao') || '0');
    }

    carregarJogosCompletados() {
        return JSON.parse(localStorage.getItem('jogos_completados_adm') || '{}');
    }

    salvarPontuacao() {
        localStorage.setItem('pontuacao_administracao', this.pontuacaoTotal.toString());
    }

    salvarJogosCompletados() {
        localStorage.setItem('jogos_completados_adm', JSON.stringify(this.jogosCompletados));
    }

    adicionarPontos(jogo, pontos, maxPontos) {
        // Só adiciona se for melhor que a pontuação anterior
        const pontuacaoAnterior = this.jogosCompletados[jogo] || 0;
        if (pontos > pontuacaoAnterior) {
            this.pontuacaoTotal += (pontos - pontuacaoAnterior);
            this.jogosCompletados[jogo] = pontos;
            this.salvarPontuacao();
            this.salvarJogosCompletados();
        }
        
        return {
            pontuacaoTotal: this.pontuacaoTotal,
            melhorPontuacao: pontos > pontuacaoAnterior,
            progresso: this.calcularProgresso()
        };
    }

    calcularProgresso() {
        const totalJogos = 12; // quiz-basico, quiz-intermediario, quiz-avancado, memoria, memoria-intermediario, memoria-avancado, arrastar, arrastar-intermediario, arrastar-avancado, lacunas, completar-intermediario, caca-palavras-avancado, forca
        const jogosCompletos = Object.keys(this.jogosCompletados).length;
        return Math.round((jogosCompletos / totalJogos) * 100);
    }

    obterEstatisticas() {
        return {
            pontuacaoTotal: this.pontuacaoTotal,
            jogosCompletados: Object.keys(this.jogosCompletados).length,
            progresso: this.calcularProgresso(),
            detalhes: this.jogosCompletados
        };
    }

    resetar() {
        this.pontuacaoTotal = 0;
        this.jogosCompletados = {};
        localStorage.removeItem('pontuacao_administracao');
        localStorage.removeItem('jogos_completados_adm');
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