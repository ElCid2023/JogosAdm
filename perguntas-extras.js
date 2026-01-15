// 📚 BANCO DE PERGUNTAS EXTRAS - ADMINISTRAÇÃO
// Para adicionar ao jogo, copie as perguntas desejadas para o array principal

const perguntasExtras = [
    // GESTÃO DE PESSOAS
    {
        question: "Qual é o principal objetivo da gestão de pessoas?",
        options: [
            "Controlar os funcionários",
            "Desenvolver e motivar o capital humano",
            "Reduzir custos com pessoal",
            "Aumentar a carga de trabalho"
        ],
        correct: 1
    },
    {
        question: "O que é feedback no contexto organizacional?",
        options: [
            "Crítica negativa ao funcionário",
            "Informação sobre desempenho para melhoria",
            "Aumento salarial",
            "Punição por erros"
        ],
        correct: 1
    },

    // MARKETING E VENDAS
    {
        question: "Qual é o conceito dos 4 Ps do marketing?",
        options: [
            "Produto, Preço, Praça, Promoção",
            "Pessoa, Processo, Prática, Produção",
            "Planejamento, Produção, Preço, Propaganda",
            "Produto, Pessoa, Preço, Processo"
        ],
        correct: 0
    },
    {
        question: "O que é segmentação de mercado?",
        options: [
            "Dividir a empresa em setores",
            "Separar produtos por categoria",
            "Dividir o mercado em grupos homogêneos",
            "Criar filiais em diferentes regiões"
        ],
        correct: 2
    },

    // FINANÇAS
    {
        question: "O que é fluxo de caixa?",
        options: [
            "Dinheiro guardado no cofre",
            "Movimentação de entradas e saídas de dinheiro",
            "Lucro líquido da empresa",
            "Valor das ações da empresa"
        ],
        correct: 1
    },
    {
        question: "Qual a diferença entre receita e lucro?",
        options: [
            "São a mesma coisa",
            "Receita é o total arrecadado, lucro é receita menos custos",
            "Lucro é sempre maior que receita",
            "Receita é apenas dinheiro em espécie"
        ],
        correct: 1
    },

    // QUALIDADE
    {
        question: "O que significa ISO 9001?",
        options: [
            "Sistema de gestão ambiental",
            "Norma de segurança do trabalho",
            "Sistema de gestão da qualidade",
            "Certificação de produtos orgânicos"
        ],
        correct: 2
    },
    {
        question: "Qual é o objetivo do controle de qualidade?",
        options: [
            "Aumentar os preços dos produtos",
            "Garantir que produtos atendam aos padrões estabelecidos",
            "Reduzir o número de funcionários",
            "Acelerar a produção"
        ],
        correct: 1
    },

    // EMPREENDEDORISMO
    {
        question: "Qual característica é essencial em um empreendedor?",
        options: [
            "Aversão ao risco",
            "Conformismo com o status quo",
            "Visão de oportunidades e inovação",
            "Dependência de terceiros para decisões"
        ],
        correct: 2
    },
    {
        question: "O que é um plano de negócios?",
        options: [
            "Lista de funcionários da empresa",
            "Documento que descreve objetivos e estratégias do negócio",
            "Relatório financeiro mensal",
            "Cronograma de férias dos funcionários"
        ],
        correct: 1
    },

    // LOGÍSTICA
    {
        question: "Qual é o objetivo principal da logística?",
        options: [
            "Aumentar os custos de transporte",
            "Entregar o produto certo, no lugar certo, na hora certa",
            "Contratar mais motoristas",
            "Reduzir a qualidade dos produtos"
        ],
        correct: 1
    },
    {
        question: "O que é cadeia de suprimentos?",
        options: [
            "Lista de fornecedores",
            "Rede integrada de fornecedores, produtores e distribuidores",
            "Departamento de compras",
            "Sistema de vendas online"
        ],
        correct: 1
    },

    // ÉTICA EMPRESARIAL
    {
        question: "O que é responsabilidade social empresarial?",
        options: [
            "Pagar impostos em dia",
            "Compromisso com impactos sociais e ambientais",
            "Contratar apenas parentes",
            "Maximizar lucros a qualquer custo"
        ],
        correct: 1
    },
    {
        question: "Por que a ética é importante nos negócios?",
        options: [
            "Para evitar multas apenas",
            "Constrói confiança e sustentabilidade",
            "É uma exigência legal apenas",
            "Não tem importância real"
        ],
        correct: 1
    },

    // INOVAÇÃO E TECNOLOGIA
    {
        question: "O que é transformação digital nas empresas?",
        options: [
            "Comprar computadores novos",
            "Integração de tecnologia digital em todas as áreas",
            "Criar um site para a empresa",
            "Usar apenas sistemas online"
        ],
        correct: 1
    },
    {
        question: "Qual é a importância da inovação para as empresas?",
        options: [
            "Apenas para empresas de tecnologia",
            "Manter competitividade e crescimento",
            "Aumentar custos desnecessariamente",
            "Complicar processos simples"
        ],
        correct: 1
    },

    // GESTÃO DE PROJETOS
    {
        question: "O que caracteriza um projeto?",
        options: [
            "Atividade rotineira e repetitiva",
            "Esforço temporário para criar resultado único",
            "Trabalho sem prazo definido",
            "Atividade sem objetivo específico"
        ],
        correct: 1
    },
    {
        question: "Quais são as principais fases de um projeto?",
        options: [
            "Início, Meio, Fim",
            "Iniciação, Planejamento, Execução, Monitoramento, Encerramento",
            "Compra, Venda, Entrega",
            "Contratação, Produção, Pagamento"
        ],
        correct: 1
    },

    // NEGOCIAÇÃO
    {
        question: "Qual é o objetivo de uma negociação eficaz?",
        options: [
            "Uma parte sempre deve perder",
            "Buscar soluções que beneficiem ambas as partes",
            "Impor sua vontade ao outro",
            "Evitar qualquer tipo de acordo"
        ],
        correct: 1
    },
    {
        question: "O que é importante na preparação para uma negociação?",
        options: [
            "Conhecer apenas seus próprios interesses",
            "Pesquisar e entender a outra parte",
            "Definir uma posição inflexível",
            "Evitar qualquer planejamento"
        ],
        correct: 1
    }
];

// INSTRUÇÕES PARA USO:
// 1. Copie as perguntas desejadas
// 2. Cole no array 'questions' do arquivo principal
// 3. Ajuste a numeração se necessário
// 4. Teste o jogo para verificar funcionamento

// EXEMPLO DE COMO ADICIONAR:
/*
Para adicionar uma pergunta ao jogo principal:
1. Abra o arquivo jogo-administracao.html
2. Localize o array 'questions'
3. Adicione a nova pergunta seguindo o formato:
{
    question: "Sua pergunta aqui?",
    options: [
        "Opção A",
        "Opção B", 
        "Opção C",
        "Opção D"
    ],
    correct: 0  // índice da resposta correta (0, 1, 2 ou 3)
}
*/