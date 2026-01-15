# 📚 Documentação Completa - Quiz Administração

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Funcionalidades](#funcionalidades)
4. [Sistema de Login](#sistema-de-login)
5. [Sistema de Senhas](#sistema-de-senhas)
6. [Sistema de Relatórios Google Sheets](#sistema-de-relatórios-google-sheets)
7. [Configuração Google Sheets](#configuração-google-sheets)
8. [Arquivos do Projeto](#arquivos-do-projeto)
9. [Tecnologias Utilizadas](#tecnologias-utilizadas)
10. [Como Usar](#como-usar)
11. [Personalização](#personalização)
12. [Códigos Completos](#códigos-completos)

---

## 🎯 Visão Geral

**Quiz Administração** é uma plataforma educativa interativa desenvolvida para o ensino de conceitos de Administração através de jogos educativos. O sistema possui três níveis de dificuldade (Básico, Intermediário e Avançado) com controle de acesso por senha e registro automático de dados em Google Sheets.

**Desenvolvido por:** Prof. Borges

**Características Principais:**
- 3 níveis de dificuldade progressivos
- 12 jogos educativos diferentes
- Sistema de pontuação global
- Controle de acesso por senha
- Registro automático em Google Sheets
- Formulário completo de identificação do aluno
- Rastreamento de desempenho em tempo real

---

## 📁 Estrutura do Projeto

```
Aulas de Adm/
│
├── index.html                              # Página principal ⭐
├── admin.html                              # Painel administrativo (LOCAL)
├── sistema-pontuacao.js                    # Sistema de pontuação
├── perguntas-extras.js                     # Banco de perguntas
│
├── NÍVEL BÁSICO (5 jogos)
│   ├── quiz-basico.html
│   ├── jogo-memoria.html
│   ├── jogo-arrastar.html
│   ├── jogo-lacunas-basico.html
│   └── jogo-forca.html
│
├── NÍVEL INTERMEDIÁRIO (4 jogos)
│   ├── quiz-intermediario.html
│   ├── jogo-memoria-intermediario.html
│   ├── jogo-arrastar-intermediario-novo.html
│   └── jogo-completar-intermediario.html
│
├── NÍVEL AVANÇADO (3 jogos)
│   ├── quiz-avancado.html
│   ├── jogo-memoria-avancado.html
│   └── jogo-caca-palavras-avancado.html
│
└── DOCUMENTAÇÃO
    ├── DOCUMENTACAO-COMPLETA.md
    ├── DOCUMENTACAO-COMPLETA.html
    └── README.md
```

---

## ⚙️ Funcionalidades

### 1. Sistema de Login Completo
- **Nome Completo** (obrigatório)
- **Semestre** (1º ou 2º) (obrigatório)
- **Turma** (A ou B) (obrigatório)
- **Período** (Tarde ou Noite) (obrigatório)
- **Email** (opcional)

### 2. Níveis de Acesso

| Nível | Senha | Jogos | Conteúdo |
|-------|-------|-------|----------|
| 📚 Básico | Sem senha | 5 jogos | Conceitos fundamentais |
| 🎓 Intermediário | `ADM2024` | 4 jogos | Gestão e Liderança |
| 💼 Avançado | `GESTAO2024` | 3 jogos | Estratégia e Inovação |

### 3. Sistema de Pontuação
- Pontuação global acumulativa
- Salva melhor pontuação de cada jogo
- Barra de progresso geral
- Estatísticas detalhadas

### 4. Navegação
- **Voltar aos Níveis:** Retorna à seleção de módulos
- **Sair:** Encerra e volta ao login
- **Voltar ao Menu:** Nos quizzes individuais

### 5. Registro Automático
- Cada login é registrado automaticamente
- Dados enviados para Google Sheets em tempo real
- Backup local no navegador (LocalStorage)

---

## 🔐 Sistema de Login

### Campos do Formulário

```
┌─────────────────────────────────┐
│  Nome Completo: [____________]  │
│  Semestre: [▼ 1º ou 2º]        │
│  Turma: [▼ A ou B]             │
│  Período: [▼ Tarde ou Noite]   │
│  Email: [____________]          │
│  [Confirmar e Entrar]           │
└─────────────────────────────────┘
```

### Validação
- Todos os campos são obrigatórios (exceto email)
- Sistema foca automaticamente no campo vazio
- Mensagens de erro claras

---

## 🔒 Sistema de Senhas

### Localização no Código
**Arquivo:** `index.html` (aproximadamente linha 430)

```javascript
const senhas = {
    'intermediario': 'ADM2024',
    'avancado': 'GESTAO2024'
};
```

### Como Alterar Senhas
1. Abra `index.html` em um editor de texto
2. Localize `const senhas = {`
3. Altere os valores entre aspas
4. Salve o arquivo

**Exemplo:**
```javascript
const senhas = {
    'intermediario': 'MINHASENHA123',
    'avancado': 'OUTRASENHA456'
};
```

---

## 📊 Sistema de Relatórios Google Sheets

### Como Funciona

```
Aluno faz login
      ↓
Preenche: Nome, Semestre, Turma, Período, Email
      ↓
Sistema registra automaticamente
      ↓
Dados enviados para Google Sheets
      ↓
Professor vê tudo em tempo real na planilha
```

### Dados Registrados

| Coluna | Dado | Exemplo |
|--------|------|---------|
| A | Nome | João Silva |
| B | Semestre | 1º Semestre |
| C | Turma | Turma A |
| D | Período | Noite |
| E | Email | joao@email.com |
| F | Data | 20/01/2024 |
| G | Hora | 14:30:25 |
| H | Pontuação | 850 |
| I | Progresso | 75% |
| J | Jogos Completados | 9 |

### Vantagens
- ✅ Centralizado (todos os alunos em uma planilha)
- ✅ Tempo real (atualiza automaticamente)
- ✅ Acessível de qualquer lugar
- ✅ Gratuito
- ✅ Fácil de exportar (Excel, PDF, etc)

---

## 🛠️ Configuração Google Sheets

### Passo 1: Criar Planilha

1. Acesse: https://sheets.google.com
2. Clique em **"+ Criar planilha em branco"**
3. Renomeie: **"Quiz Administração - Acessos"**

### Passo 2: Configurar Cabeçalhos

Na primeira linha, coloque:

| A1 | B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 |
|----|----|----|----|----|----|----|----|----|-----|
| Nome | Semestre | Turma | Período | Email | Data | Hora | Pontuação | Progresso | Jogos Completados |

### Passo 3: Criar Apps Script

1. Na planilha, clique em **Extensões** → **Apps Script**
2. Apague tudo que estiver lá
3. Cole o código abaixo:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.nome,
    data.semestre,
    data.turma,
    data.periodo,
    data.email,
    data.data,
    data.hora,
    data.pontuacao || 0,
    data.progresso || '0%',
    data.jogosCompletados || 0
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Clique em **Salvar** (ícone 💾)
5. Nomeie o projeto: "Quiz Administração API"

### Passo 4: Implantar

1. Clique em **Implantar** → **Nova implantação**
2. Clique na engrenagem ⚙️ → **Aplicativo da Web**
3. Configure:
   - **Descrição:** Sistema de registro de acessos
   - **Executar como:** Eu (sua conta)
   - **Quem tem acesso:** Qualquer pessoa
4. Clique em **Implantar**
5. **Autorize** o acesso quando solicitado
6. **COPIE A URL** gerada

### Passo 5: Atualizar o Código

No arquivo `index.html`, localize (linha ~350):

```javascript
const GOOGLE_SCRIPT_URL = 'COLE_SUA_URL_AQUI';
```

Substitua por sua URL copiada.

### Passo 6: Testar

1. Abra `index.html` no navegador
2. Preencha o formulário
3. Clique em "Confirmar e Entrar"
4. Vá na planilha e atualize (F5)
5. Deve aparecer o registro! 🎉

---

## 📄 Arquivos do Projeto

### 1. index.html (Página Principal)
- **Função:** Menu principal, login, seleção de níveis
- **Tamanho:** ~20KB
- **Recursos:**
  - Formulário completo de login
  - Sistema de senhas
  - Integração Google Sheets
  - Navegação entre níveis
  - Painel de estatísticas

### 2. admin.html (Painel Administrativo)
- **Função:** Visualizar relatórios localmente
- **Uso:** APENAS LOCAL (não subir no GitHub)
- **Senha:** `PROF2024`
- **Recursos:**
  - Estatísticas em tempo real
  - Filtros por nome e data
  - Exportar CSV/JSON
  - Limpar relatório

### 3. sistema-pontuacao.js
- **Função:** Gerenciar pontuação global
- **Classe:** `SistemaPontuacao`
- **Métodos:**
  - `adicionarPontos()`
  - `obterEstatisticas()`
  - `resetar()`

### 4. Quizzes (3 arquivos)
- 10 perguntas cada
- Sistema de embaralhamento
- Feedback visual
- Gabarito completo
- Botão "Voltar ao Menu"

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização, gradientes, animações |
| JavaScript (ES6+) | Lógica, interatividade |
| LocalStorage API | Backup local de dados |
| Google Sheets API | Armazenamento centralizado |
| Apps Script | Backend do Google Sheets |
| Fetch API | Comunicação com Google Sheets |

---

## 🚀 Como Usar

### Para Alunos

1. **Acessar o Sistema**
   - Abra o link fornecido pelo professor
   - Preencha todos os dados do formulário
   - Clique em "Confirmar e Entrar"

2. **Escolher Nível**
   - **Básico:** Acesso livre
   - **Intermediário/Avançado:** Digite a senha fornecida

3. **Jogar**
   - Selecione um jogo
   - Complete as atividades
   - Veja sua pontuação

4. **Navegar**
   - **Voltar aos Níveis:** Escolher outro módulo
   - **Sair:** Encerrar sessão

### Para Professores

1. **Configurar Sistema**
   - Configure Google Sheets (passos acima)
   - Altere senhas se necessário
   - Suba no GitHub Pages

2. **Distribuir**
   - Compartilhe o link com os alunos
   - Forneça senhas progressivamente

3. **Monitorar**
   - Abra a planilha Google Sheets
   - Veja acessos em tempo real
   - Acompanhe desempenho dos alunos

4. **Analisar**
   - Filtre por turma, período, semestre
   - Exporte para Excel se necessário
   - Identifique alunos com dificuldades

---

## 🎨 Personalização

### Alterar Cores

**Gradiente Principal:**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Botões:**
```css
.level-btn {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}
```

### Adicionar Mais Opções no Login

**Exemplo: Adicionar mais turmas**

No `index.html`, localize:
```html
<select id="student-turma">
    <option value="">Selecione a Turma</option>
    <option value="Turma A">Turma A</option>
    <option value="Turma B">Turma B</option>
</select>
```

Adicione:
```html
    <option value="Turma C">Turma C</option>
    <option value="Turma D">Turma D</option>
```

### Adicionar Perguntas nos Quizzes

Localize o array `questions` em qualquer quiz:

```javascript
const questions = [
    {
        question: "Sua nova pergunta?",
        options: [
            "Opção 1",
            "Opção 2",
            "Opção 3",
            "Opção 4"
        ],
        correct: 0  // Índice da resposta correta (0-3)
    }
];
```

---

## 📝 Códigos Completos

### Código do Apps Script (Google Sheets)

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.nome,
    data.semestre,
    data.turma,
    data.periodo,
    data.email,
    data.data,
    data.hora,
    data.pontuacao || 0,
    data.progresso || '0%',
    data.jogosCompletados || 0
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Função de Registro (index.html)

```javascript
const GOOGLE_SCRIPT_URL = 'SUA_URL_AQUI';

function registrarAcesso(nome, semestre, turma, periodo, email) {
    const agora = new Date();
    const stats = sistemaPontuacao.obterEstatisticas();
    
    const dados = {
        nome: nome,
        semestre: semestre,
        turma: turma,
        periodo: periodo,
        email: email || 'Não informado',
        data: agora.toLocaleDateString('pt-BR'),
        hora: agora.toLocaleTimeString('pt-BR'),
        pontuacao: stats.pontuacaoTotal,
        progresso: stats.progresso + '%',
        jogosCompletados: stats.jogosCompletados,
        timestamp: agora.getTime()
    };
    
    // Salvar no LocalStorage (backup local)
    const acessos = JSON.parse(localStorage.getItem('relatorio_acessos') || '[]');
    acessos.push(dados);
    localStorage.setItem('relatorio_acessos', JSON.stringify(acessos));
    
    // Enviar para Google Sheets
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    }).catch(error => {
        console.log('Dados salvos localmente.');
    });
}
```

### Validação do Formulário

```javascript
function confirmName() {
    const nameInput = document.getElementById('student-name');
    const semestreInput = document.getElementById('student-semestre');
    const turmaInput = document.getElementById('student-turma');
    const periodoInput = document.getElementById('student-periodo');
    const emailInput = document.getElementById('student-email');
    
    const name = nameInput.value.trim();
    const semestre = semestreInput.value;
    const turma = turmaInput.value;
    const periodo = periodoInput.value;
    const email = emailInput.value.trim();
    
    if (name === '') {
        alert('Por favor, digite seu nome completo!');
        nameInput.focus();
        return;
    }
    
    if (semestre === '') {
        alert('Por favor, selecione seu semestre!');
        semestreInput.focus();
        return;
    }
    
    if (turma === '') {
        alert('Por favor, selecione sua turma!');
        turmaInput.focus();
        return;
    }
    
    if (periodo === '') {
        alert('Por favor, selecione seu período!');
        periodoInput.focus();
        return;
    }
    
    playerName = name;
    registrarAcesso(name, semestre, turma, periodo, email);
    
    document.getElementById('name-input').classList.add('hidden');
    document.getElementById('level-selection').classList.remove('hidden');
    document.getElementById('player-name').textContent = playerName;
}
```

---

## 🎓 Conteúdo Pedagógico

### Nível Básico
- Habilidades do profissional (4 grupos)
- Funções administrativas (PODC)
- Departamentos empresariais
- Conceitos fundamentais
- Eficiência vs Eficácia

### Nível Intermediário
- Missão, Visão e Valores
- Objetivos SMART
- Análise SWOT
- 5W2H
- Gestão de pessoas
- Satisfação do cliente

### Nível Avançado
- 5 Forças de Porter
- Departamentalização
- 4 Ps do Marketing
- Matemática financeira
- Gestão estratégica
- Benchmarking
- Governança corporativa

---

## 📞 Suporte

### Problemas Comuns

**1. Dados não aparecem na planilha**
- Verifique se fez nova implantação no Apps Script
- Confirme que a URL está correta no `index.html`
- Verifique permissões do Apps Script

**2. Senha não funciona**
- Senhas são case-sensitive (maiúsculas/minúsculas)
- Verifique o código no `index.html`

**3. Formulário não valida**
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Teste em modo anônimo

**4. Planilha recebe dados duplicados**
- Normal se o aluno fizer login múltiplas vezes
- Use filtros no Google Sheets para análise

---

## 📦 Deploy no GitHub

### Arquivos para Subir

✅ **Subir:**
- `index.html`
- `sistema-pontuacao.js`
- `perguntas-extras.js`
- Todos os jogos (`.html`)
- Documentação (`.md`)

❌ **NÃO Subir:**
- `admin.html` (manter apenas local)

### GitHub Pages

1. Crie repositório no GitHub
2. Suba os arquivos
3. Vá em **Settings** → **Pages**
4. Source: **Deploy from a branch**
5. Branch: **main** → **/ (root)**
6. Clique em **Save**
7. Aguarde alguns minutos
8. Acesse: `https://seu-usuario.github.io/seu-repositorio/`

---

## 🔒 Segurança

### Boas Práticas

1. **Senhas:**
   - Troque as senhas padrão
   - Não compartilhe publicamente
   - Use senhas diferentes para cada nível

2. **Google Sheets:**
   - Não compartilhe a URL do Apps Script
   - Mantenha a planilha privada
   - Faça backups regulares

3. **Dados dos Alunos:**
   - Email é opcional (LGPD)
   - Não solicite dados sensíveis
   - Informe os alunos sobre coleta de dados

---

## 📊 Análise de Dados

### Exemplos de Análises na Planilha

**1. Filtrar por Turma:**
- Dados → Criar filtro
- Clique na coluna "Turma"
- Selecione "Turma A" ou "Turma B"

**2. Ordenar por Pontuação:**
- Selecione coluna "Pontuação"
- Dados → Classificar intervalo → Z → A

**3. Média de Pontuação:**
```
=AVERAGE(H2:H100)
```

**4. Alunos com Progresso < 50%:**
- Use filtros personalizados
- Progresso → Menor que → 50%

**5. Gráficos:**
- Inserir → Gráfico
- Escolha tipo de gráfico
- Configure dados

---

## 🎯 Roadmap Futuro

### Possíveis Melhorias

- [ ] Sistema de ranking entre alunos
- [ ] Certificados automáticos
- [ ] Mais jogos educativos
- [ ] Modo multiplayer
- [ ] Integração com LMS (Moodle, Canvas)
- [ ] App mobile
- [ ] Relatórios em PDF automáticos
- [ ] Dashboard interativo para professor

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

**Uso Permitido:**
- Instituições de ensino
- Professores e educadores
- Estudantes

**Uso Restrito:**
- Comercialização sem autorização
- Redistribuição sem créditos

---

## 👨‍🏫 Créditos

**Desenvolvido por:** Prof. Borges

**Tecnologias:** HTML5, CSS3, JavaScript, Google Sheets API

**Versão:** 2.0

**Data:** Janeiro 2024

---

**Última Atualização:** Janeiro 2024
**Versão da Documentação:** 2.0
