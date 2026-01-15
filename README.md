# 🎯 Quiz Administração

Sistema educativo interativo com registro automático em Google Sheets.

**Desenvolvido por:** Prof. Borges

---

## 📦 Arquivos para Subir no GitHub

### ✅ SUBIR (Arquivos Públicos)

```
📁 Raiz do Repositório
│
├── index.html                              ⭐ PRINCIPAL
├── sistema-pontuacao.js                    ⭐ NECESSÁRIO
│
├── 📚 NÍVEL BÁSICO
│   ├── quiz-basico.html
│   ├── jogo-memoria.html
│   ├── jogo-arrastar.html
│   ├── jogo-lacunas-basico.html
│   ├── jogo-forca.html
│   ├── jogo-caca-palavras.html
│   ├── jogo-ligar-pontos.html
│   └── jogo-completar-frases.html
│
├── 🎓 NÍVEL INTERMEDIÁRIO
│   ├── quiz-intermediario.html
│   ├── jogo-memoria-intermediario.html
│   ├── jogo-arrastar-intermediario.html
│   ├── jogo-arrastar-intermediario-novo.html
│   ├── jogo-completar-intermediario.html
│   └── jogo-lacunas.html
│
├── 💼 NÍVEL AVANÇADO
│   ├── quiz-avancado.html
│   ├── jogo-memoria-avancado.html
│   ├── jogo-caca-palavras-avancado.html
│   └── jogo-arrastar-avancado.html
│
├── 📄 DOCUMENTAÇÃO
│   ├── README.md                           ⭐ ESTE ARQUIVO
│   ├── DOCUMENTACAO-COMPLETA.md
│   ├── DOCUMENTACAO-COMPLETA.html
│   ├── README-COMPLETO.md
│   └── configuracao-jogo.txt
│
└── 📝 EXTRAS (se existirem)
    ├── perguntas-extras.js
    └── jogo-administracao.html
```

### ❌ NÃO SUBIR (Manter Apenas Local)

```
❌ admin.html                    # Painel administrativo (uso local)
```

**Por quê?** O `admin.html` acessa dados do LocalStorage do navegador, que só funciona localmente. Não faz sentido no GitHub Pages.

---

## 🚀 Como Subir no GitHub

### Opção 1: Via Interface Web

1. Acesse seu repositório no GitHub
2. Clique em **Add file** → **Upload files**
3. Arraste TODOS os arquivos da lista ✅ acima
4. Clique em **Commit changes**

### Opção 2: Via Git (Linha de Comando)

```bash
# Na pasta do projeto
git init
git add index.html
git add sistema-pontuacao.js
git add *.html
git add *.js
git add *.md
git add *.txt

# NÃO adicione admin.html
git reset admin.html

git commit -m "Sistema Quiz Administração v2.0"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

---

## 🌐 Ativar GitHub Pages

1. No repositório, vá em **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** main → **/ (root)**
4. Clique em **Save**
5. Aguarde 2-5 minutos
6. Acesse: `https://seu-usuario.github.io/seu-repositorio/`

---

## ⚙️ Configuração Necessária

### Antes de Subir

1. **Configure Google Sheets** (veja DOCUMENTACAO-COMPLETA.md)
2. **Atualize a URL** no `index.html`:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'SUA_URL_AQUI';
   ```
3. **Altere as senhas** se desejar (opcional)

### Após Subir

1. Teste o link do GitHub Pages
2. Faça um login de teste
3. Verifique se os dados chegam na planilha Google
4. Compartilhe o link com os alunos

---

## 📊 Estrutura de Dados (Google Sheets)

Os dados são enviados automaticamente para sua planilha:

| Nome | Semestre | Turma | Período | Email | Data | Hora | Pontuação | Progresso | Jogos |
|------|----------|-------|---------|-------|------|------|-----------|-----------|-------|
| João Silva | 1º Semestre | Turma A | Noite | joao@email.com | 20/01/2024 | 14:30 | 850 | 75% | 9 |

---

## 🔐 Senhas Padrão

- **Básico:** Sem senha (acesso livre)
- **Intermediário:** `ADM2024`
- **Avançado:** `GESTAO2024`

Para alterar, edite o `index.html` (linha ~430).

---

## 📱 Acesso

Após configurar GitHub Pages, os alunos acessam via:

```
https://seu-usuario.github.io/seu-repositorio/
```

**Funciona em:**
- 💻 Desktop
- 📱 Celular
- 📱 Tablet
- Qualquer navegador moderno

---

## 📞 Suporte

**Problemas comuns:**

1. **Dados não chegam na planilha**
   - Verifique a URL no `index.html`
   - Faça nova implantação no Apps Script
   - Confirme permissões

2. **Página não carrega**
   - Aguarde alguns minutos após ativar Pages
   - Limpe cache do navegador (Ctrl+Shift+Del)

3. **Senhas não funcionam**
   - Senhas são case-sensitive
   - Verifique o código no `index.html`

---

## 📄 Documentação Completa

Para instruções detalhadas, consulte:
- `DOCUMENTACAO-COMPLETA.md` (texto)
- `DOCUMENTACAO-COMPLETA.html` (navegável)

---

## 🎓 Conteúdo

- **Básico:** Fundamentos de Administração
- **Intermediário:** Gestão e Liderança
- **Avançado:** Estratégia e Inovação

**Total:** 12 jogos educativos

---

## 📝 Licença

Uso educacional livre para instituições de ensino.

---

**Versão:** 2.0  
**Última Atualização:** Janeiro 2024  
**Desenvolvido por:** Prof. Borges
