export const APP_NAME = "AssisZapp";

export const HERO_TITLE = {
  start: "Economize",
  highlight: "+ de 300 Reais",
  end: "Em 30 Dias"
};

export const HERO_SUBTITLE = {
  first: "Sem Cortar Os \"Luxos\"",
  second: "E Apenas Com O WhatsApp."
};

export const HOW_IT_WORKS = {
  title: "Como Funciona?",
  description: "Um assistente financeiro no seu WhatsApp, disponível 24h para ser seu controle financeiro interativo.",
  steps: [
    {
      number: "1",
      title: "Digite o que comprou e quanto custou, por exemplo: \"camisa 110\".",
      description: "Registre um gasto (real ou falso) para testar.",
      note: "Não se preocupe com vírgulas, nem com por \"R$\", escreva do seu jeito."
    },
    {
      number: "2",
      title: "Você pode perguntar TUDO SOBRE SUAS FINANÇAS.",
      description: "Exemplo: Digamos que você quer ver quanto gastou nos últimos dias:"
    }
  ]
};

export const PROBLEMS = [
  {
    id: "money-tracking",
    title: "Para onde vai seu dinheiro?",
    description: "Você trabalha o mês inteiro, mas no final nunca sabe onde foi parar tudo que ganhou.",
    image: "/images/money-tracking.jpg",
  },
  {
    id: "no-apps",
    title: "Sem planilhas ou apps",
    description: "São soluções complicadas que dão preguiça de usar. Aqui você resolve tudo no WhatsApp.",
    image: "/images/no-apps.jpg",
  },
  {
    id: "debt",
    title: "Perdido nas dívidas",
    description: "Não sabe quanto paga de parcela, quanto tempo falta, quem deve, e não tem um plano para pagar.",
    image: "/images/debt.jpg",
  },
  {
    id: "spending",
    title: "Pagando mais caro sempre",
    description: "Você compra por impulso ou não pesquisa antes, gastando mais e deixando de economizar.",
    image: "/images/spending.jpg",
  }
];

export const DEMO_CHAT = {
  input: "ifood 44",
  response: [
    {
      type: "expense",
      content: {
        icon: "🍔",
        title: "IFOOD (Delivery)",
        amount: "R$ 44,00",
        date: "05/05/2025"
      }
    },
    {
      type: "alert",
      content: {
        text: "Lembrete: Você está quase chegando no seu limite definido de R$ 66 por mês com Delivery."
      }
    }
  ]
};

export const FEATURES = [
  {
    title: "Controle financeiro simplificado",
    description: "Acompanhe seus gastos sem complicação, diretamente no WhatsApp"
  },
  {
    title: "Alertas personalizados",
    description: "Receba avisos quando estiver se aproximando dos seus limites de gastos"
  },
  {
    title: "Análises inteligentes",
    description: "Entenda seus padrões de gastos com insights baseados em IA"
  },
  {
    title: "Disponível 24/7",
    description: "Seu assistente financeiro está sempre pronto para ajudar"
  }
];