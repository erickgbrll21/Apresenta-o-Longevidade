import { GRADIENTS } from "../theme";

export const HERO = {
  eyebrow: "Hub estratégico de soluções corporativas",
  titleLine1: "Um só parceiro.",
  titleLine2: "Todas as condições.",
  description:
    "Centralize Benefícios, Saúde, RH, TI, Finanças, Educação e ESG em um único interlocutor. Negociamos com o poder de quem move R$ 1,5 bilhão em contratos — e o melhor: sem custo para a sua empresa.",
  diamond: "hero-diamond.png",
  logo: "logo-dark.png",
};

export const HERO_KPIS = [
  {
    count: { to: 1.5, prefix: "R$ ", suffix: " bi", decimals: 1, decimalSeparator: "," },
    label: "em contratos ativos",
    footer: "Volume administrado pelo grupo",
    gradient: GRADIENTS.volume,
  },
  {
    count: { to: 6000, suffix: "+", decimals: 0 },
    label: "atendimentos consultivos",
    footer: "Base histórica de relacionamento",
    gradient: GRADIENTS.atendimentos,
  },
  {
    count: { to: 400, suffix: "+", decimals: 0 },
    label: "clientes ativos",
    footer: "Empresas atendidas pelo hub",
    gradient: GRADIENTS.clientes,
  },
  {
    count: { to: 40, suffix: "+", decimals: 0 },
    label: "fornecedores no hub",
    footer: "Operadoras e plataformas homologadas",
    gradient: GRADIENTS.fornecedores,
  },
  {
    count: { to: 200, suffix: "+", decimals: 0 },
    label: "advogados no grupo",
    footer: "Ecossistema jurídico multidisciplinar",
    gradient: GRADIENTS.advogados,
  },
];

export const FRENTES = [
  {
    slug: "beneficios",
    title: "Benefícios corporativos",
    description:
      "VR, VA, multibenefícios, mobilidade, cartões corporativos e compliance PAT — com poder de canal das maiores operadoras.",
    chips: ["VR · VA", "Multibenefícios", "Mobilidade", "Compliance PAT"],
    color: "#1560BD",
    icon: "icon-beneficios.png",
  },
  {
    slug: "saude",
    title: "Saúde e bem-estar",
    description:
      "Saúde mental, NR-1, telemedicina, programas especializados e assistências complementares — alinhado a ESG.",
    chips: ["Saúde Mental", "NR-1", "Telemedicina", "TotalPass · Wellhub"],
    color: "#EC4899",
    icon: "icon-saude.png",
  },
  {
    slug: "rh",
    title: "RH e gestão de pessoas",
    description:
      "Folha, ponto, admissão digital, recrutamento, desempenho, people analytics e hub de sistemas com login único.",
    chips: ["Folha", "eSocial", "Admissão digital", "People Analytics"],
    color: "#10B981",
    icon: "icon-rh.png",
  },
  {
    slug: "ti",
    title: "Tecnologia e inovação",
    description:
      "Licenciamento, curadoria, desenvolvimento sob demanda, integrações via API, automação, IA e Business as a Service.",
    chips: ["Software · SaaS", "Integrações API", "Automação", "IA · BaaS"],
    color: "#A855F7",
    icon: "icon-ti.png",
  },
  {
    slug: "financas",
    title: "Proteção ao Negócio",
    description:
      "Soluções completas para proteger pessoas, patrimônio, operações e riscos financeiros da empresa.",
    chips: ["Pessoas", "Patrimônio", "Operações", "Riscos financeiros"],
    color: "#F59E0B",
    icon: "icon-financas.png",
  },
  {
    slug: "educacao",
    title: "Educação corporativa",
    description:
      "Universidades corporativas, LMS, trilhas de aprendizagem, IA aplicada à educação e analytics de capacitação.",
    chips: ["Universidade", "LMS", "Trilhas", "IA · Assessment"],
    color: "#22D3EE",
    icon: "icon-educacao.png",
  },
  {
    slug: "esg",
    title: "ESG e governança",
    description:
      "Diagnóstico e indicadores ESG, compliance, gestão de riscos, Escala S e programas de sustentabilidade.",
    chips: ["Diagnóstico ESG", "Compliance", "Escala S", "Sustentabilidade"],
    color: "#EF4444",
    icon: "icon-esg.png",
  },
];

export const MODELO = {
  badge: "O cliente não paga nada",
  titleLine1: "Nosso trabalho é",
  titleHighlight: "gratuito",
  titleLine2: "para você.",
  paragraphs: [
    "Diagnóstico, mapeamento, comparação de fornecedores, apresentação de soluções, implementação e suporte ao longo do contrato — tudo sem custo para a sua empresa.",
    "Quem nos remunera são os fornecedores, quando contratados. Como somos o maior canal de venda de muitos deles, você ainda obtém condições melhores do que negociando direto.",
  ],
  points: [
    {
      title: "Apoio e facilitação sem custo",
      text: "Você não paga pela consultoria, pela curadoria nem pela implementação.",
    },
    {
      title: "Condição de canal",
      text: "Nosso volume garante preços que a empresa não conseguiria sozinha.",
    },
    {
      title: "Canal de suporte permanente",
      text: "Um interlocutor a mais durante todo o contrato, diante de qualquer problema operacional ou falha de atendimento.",
    },
  ],
};

export const DEMANDA = {
  eyebrow: "Soluções sob demanda",
  titleLine1: "Tem uma dor sem solução?",
  titleHighlight: "A gente constrói.",
  description:
    "Quando o cliente tem uma necessidade que ainda não tem formato, nós pesquisamos, mapeamos o mercado, validamos fornecedores e apresentamos as melhores opções — prontas para decidir.",
  icon: "icon-demanda.svg",
  steps: [
    { title: "Escuta da dor", text: "Entendemos a necessidade real, mesmo quando ela ainda não tem formato." },
    { title: "Pesquisa e mapeamento", text: "Varremos o mercado em busca das soluções e fornecedores possíveis." },
    { title: "Validação de fornecedores", text: "Homologamos e testamos quem realmente entrega o que promete." },
    { title: "Apresentação de soluções", text: "Você recebe as melhores opções comparadas, prontas para decisão." },
    { title: "Implementação e suporte", text: "Conduzimos a entrada e acompanhamos a operação ao longo do contrato." },
  ],
  note: {
    title: "Desenvolvemos departamentos e segmentos inteiros",
    text: "Mais do que produtos avulsos: estruturamos áreas, segmentos e soluções completas diante de pedidos específicos dos clientes. Se a demanda existe, encontramos ou construímos o caminho — sem custo para você.",
  },
};

export const DIFERENCIAIS = {
  eyebrow: "Por que a Longevidade",
  title: "O diferencial que ninguém isolado tem.",
  items: [
    {
      num: "01",
      title: "Condição de canal",
      text: "Nosso volume de contratos nos fornecedores garante negociações que o cliente jamais obteria de forma direta. Você compra como se fosse muito maior.",
    },
    {
      num: "02",
      title: "Centralização inteligente",
      text: "Um único interlocutor para múltiplas frentes. Menos tempo gerindo fornecedores, menos fricção, mais foco no que move o seu negócio.",
    },
    {
      num: "03",
      title: "Suporte de ponta a ponta",
      text: "Do diagnóstico à implementação e além: somos um canal de apoio permanente durante todo o contrato, com segurança jurídica em cada etapa.",
    },
  ],
};

export const ECOSSISTEMA = {
  eyebrow: "O ecossistema do grupo",
  titleLine1: "Não somos uma consultoria.",
  titleHighlight: "Somos um ecossistema.",
  description:
    "Três estruturas que se conectam: a estratégia comercial da Longevidade, a tecnologia do ConcorreAI e uma força jurídica de 200+ advogados. Juntas, entregam o que nenhuma sozinha entregaria.",
  cards: [
    {
      badge: "Hub estratégico",
      title: "Longevidade Business",
      text: "O canal com poder de barganha superior. Interlocutor único para Benefícios, Saúde, RH, TI, Finanças, Educação e ESG — com 40+ fornecedores e R$ 1,5 bi em contratos ativos.",
      tags: ["Benefícios", "Saúde", "RH", "TI", "Finanças", "Educação", "ESG"],
      lead: true,
      logo: "logo-dark.png",
    },
    {
      badge: "Tecnologia + Direito",
      title: "ConcorreAI",
      text: "Plataforma de IA para licitações públicas. Atende fornecedores privados que querem vender ao governo e órgãos públicos que precisam gerir seus processos com eficiência.",
      tags: ["Editais", "IA", "Score de aderência", "Órgãos públicos"],
      logo: "logo-concorreai.png",
    },
    {
      badge: "Ecossistema jurídico",
      title: "200+ advogados",
      text: "Escritório multidisciplinar capacitado por ênfase e demanda. Cobre contratos públicos, compliance, regulatório, tributário e contratual — em cada frente do grupo.",
      tags: ["Contratos públicos", "Compliance", "Regulatório"],
    },
  ],
};

export const MERCADO_PUBLICO = {
  eyebrow: "Mercado público — via ConcorreAI",
  titleLine1: "Seu negócio ainda não vende",
  titleLine2: "para o governo.",
  titleHighlight: "Mas poderia.",
  description:
    "A maioria das empresas desconhece o tamanho do próprio potencial no setor público. Nós fazemos o diagnóstico real — e plugamos a tecnologia para você competir e vencer.",
  logo: "logo-concorreai.png",
  steps: [
    { title: "Diagnóstico de potencial", text: "Mapeamos volume de contratos, órgãos compradores, histórico de preços e aderência do seu produto ao mercado público." },
    { title: "Análise de viabilidade", text: "Avaliamos capacidade técnica, regularidade fiscal e habilitação. Identificamos gaps e o caminho para corrigi-los." },
    { title: "Plug no ConcorreAI", text: "Você é conectado à plataforma de IA para monitorar editais, analisar oportunidades e medir aderência por CNPJ." },
    { title: "Estruturação do BID", text: "Apoiamos proposta técnica e comercial: precificação, documentação e estratégia de posicionamento." },
    { title: "Acompanhamento contratual", text: "Pós-vitória: execução, fiscalização, aditivos e indicadores. Você nunca fica sozinho depois do contrato." },
  ],
  card: {
    badge: "Empresa do grupo",
    title: "ConcorreAI",
    text: "Inteligência artificial para licitações públicas. Enquanto a Longevidade conduz a estratégia e o relacionamento, o ConcorreAI entrega a inteligência operacional que sustenta cada decisão.",
    features: [
      "Monitoramento automático de editais",
      "Análise de oportunidades por IA",
      "Score de aderência por CNPJ",
      "Mapa de concorrência e preferências",
      "Para fornecedores privados e órgãos públicos",
    ],
  },
};

export const JURIDICO = {
  eyebrow: "Escritório jurídico do grupo",
  titleLine1: "Cada contrato,",
  titleHighlight: "juridicamente blindado.",
  description:
    "Um escritório multidisciplinar com mais de 200 advogados sustenta todas as frentes do grupo — dando segurança a clientes, fornecedores e contratos públicos.",
  kpi: { value: "200+", label: "advogados especializados" },
  features: [
    { title: "Contratos públicos", text: "Estruturação e segurança jurídica em licitações e contratos administrativos." },
    { title: "Compliance e governança", text: "Adequação à LGPD, PAT, NR-1 e às normativas de cada setor." },
    { title: "Tributário e contratual", text: "Revisão, negociação e blindagem de contratos corporativos." },
    { title: "Suporte contínuo", text: "Acompanhamento jurídico durante toda a vigência dos contratos." },
  ],
};

export const SOLUTIONS = [
  {
    slug: "beneficios",
    title: "Benefícios corporativos",
    heroTitle: "Tudo em benefícios, em um só lugar.",
    heroDescription:
      "Reunimos as principais operadoras e soluções do mercado em um único interlocutor. Você compara, escolhe e implementa com apoio especializado — e ainda ganha a condição comercial de quem move um grande volume de contratos.",
    icon: "icon-beneficios.png",
    stats: [
      { value: "30+", label: "produtos e serviços em benefícios" },
      { value: "100%", label: "customizável ao seu cenário" },
      { value: "R$ 0", label: "de custo para o cliente" },
    ],
    groups: [
      { title: "Alimentação e Refeição", items: ["VR e VA em cartão único", "Multibenefícios bandeirados", "Premiação e incentivo"] },
      { title: "Mobilidade", items: ["Vale-Transporte", "Roteirização inteligente", "Poupador de VT"] },
      { title: "Soluções financeiras", items: ["Antecipação salarial", "Crédito consignado", "Educação financeira"] },
      { title: "Despesas corporativas", items: ["Cartões corporativos", "Prestação de contas", "Gestão de reembolsos"] },
      { title: "Gestão e Compliance", items: ["PAT · Lei 14.442", "Decreto 12.712/2025", "Auditoria de benefícios"] },
    ],
    color: "#1560BD",
  },
  {
    slug: "saude",
    title: "Saúde e bem-estar",
    heroTitle: "Bem-estar integral para o colaborador.",
    heroDescription:
      "Reunimos operadoras, plataformas digitais e programas especializados em um único interlocutor. Você compara, escolhe e implementa com apoio especializado — pagando R$ 0 por isso.",
    icon: "icon-saude.png",
    stats: [
      { value: "20+", label: "produtos e serviços em saúde" },
      { value: "100%", label: "customizável ao seu cenário" },
      { value: "R$ 0", label: "de custo para o cliente" },
    ],
    groups: [
      { title: "Saúde Mental", items: ["Programas de saúde mental", "Apoio psicossocial", "Adequação à NR-1"] },
      { title: "Programas especializados", items: ["TotalPass", "Wellhub", "Qualidade de vida"] },
      { title: "Saúde digital", items: ["Telemedicina", "Telepsicologia", "Telenutrição"] },
      { title: "Assistências", items: ["Orientação jurídica", "Pets", "EAP"] },
    ],
    color: "#EC4899",
  },
  {
    slug: "rh",
    title: "RH e gestão de pessoas",
    heroTitle: "Toda a jornada do colaborador, integrada.",
    heroDescription:
      "Reunimos plataformas e fornecedores de RH em um único hub, com login único e integração entre sistemas. Você compara, escolhe e implementa com apoio especializado — pagando R$ 0 por isso.",
    icon: "icon-rh.png",
    stats: [
      { value: "30+", label: "produtos e serviços em RH" },
      { value: "100%", label: "customizável ao seu cenário" },
      { value: "R$ 0", label: "de custo para o cliente" },
    ],
    groups: [
      { title: "Folha e DP", items: ["Integração nativa ao ERP", "eSocial, FGTS e INSS", "Gestão de encargos"] },
      { title: "Recrutamento e talentos", items: ["Triagem com IA", "Fit cultural", "Gestão de desempenho"] },
      { title: "Controle de jornada", items: ["Ponto eletrônico", "Banco de horas", "Atestados digitais"] },
      { title: "Admissão e SST", items: ["Admissão sem papel", "Assinatura eletrônica", "Saúde ocupacional"] },
      { title: "Aprendizagem", items: ["Trilhas de aprendizagem", "Certificações", "Capacitação contínua"] },
      { title: "People Analytics", items: ["Dashboards executivos", "Insights de performance", "Integração total ao ERP"] },
    ],
    color: "#10B981",
  },
  {
    slug: "ti",
    title: "Tecnologia e inovação",
    heroTitle: "Tecnologia certa, custo otimizado.",
    heroDescription:
      "Em vez de negociar licenças e sistemas isoladamente, você centraliza com quem tem volume e curadoria técnica. Desenvolvemos sob demanda, integramos seus sistemas e operamos como serviço — pagando R$ 0 pela nossa atuação.",
    icon: "icon-ti.png",
    stats: [
      { value: "20+", label: "soluções de tecnologia" },
      { value: "100%", label: "customizável ao seu cenário" },
      { value: "R$ 0", label: "de custo para o cliente" },
    ],
    groups: [
      { title: "Software corporativo", items: ["Microsoft e Adobe", "Curadoria tecnológica", "SaaS sob demanda"] },
      { title: "Desenvolvimento", items: ["Sistemas web", "Aplicações mobile", "Portais corporativos"] },
      { title: "Integrações", items: ["API REST e webhooks", "Integração ERP", "RH e financeiro"] },
      { title: "Automação e IA", items: ["RPA e workflows", "Chatbots corporativos", "IA para atendimento"] },
      { title: "Business as a Service", items: ["Operação gerenciada", "Terceirização", "Suporte com SLA"] },
    ],
    color: "#A855F7",
  },
  {
    slug: "financas",
    title: "Proteção ao Negócio",
    heroTitle: "Proteção completa para o seu negócio.",
    heroDescription:
      "Reunimos seguros corporativos, garantias e soluções de proteção patrimonial em um único interlocutor. Você acessa as melhores condições com apoio na estruturação — pagando R$ 0 pela nossa consultoria.",
    icon: "icon-financas.png",
    stats: [
      { value: "19+", label: "soluções de proteção" },
      { value: "100%", label: "customizável ao seu cenário" },
      { value: "R$ 0", label: "de custo para o cliente" },
    ],
    groups: [
      { title: "Proteção das pessoas", items: ["Vida em grupo", "Saúde e odonto", "Pessoa-chave"] },
      { title: "Proteção do negócio", items: ["RC e D&O", "Seguro cyber", "Frotas e cargas"] },
      { title: "Proteção financeira", items: ["Seguro garantia", "Performance Bond", "Seguro de crédito"] },
    ],
    color: "#F59E0B",
  },
  {
    slug: "educacao",
    title: "Educação corporativa",
    heroTitle: "Times que aprendem, empresas que crescem.",
    heroDescription:
      "Construímos universidades corporativas e implementamos plataformas de aprendizagem sob medida. Da estruturação de trilhas ao ROI da capacitação, com apoio completo — pagando R$ 0 pela nossa atuação.",
    icon: "icon-educacao.png",
    stats: [
      { value: "20+", label: "soluções de educação" },
      { value: "100%", label: "customizável ao seu cenário" },
      { value: "R$ 0", label: "de custo para o cliente" },
    ],
    groups: [
      { title: "Universidade corporativa", items: ["Estruturação do zero", "Trilhas por cargo", "Educação continuada"] },
      { title: "Plataformas LMS", items: ["Implantação e migração", "Gestão de conteúdo", "Certificações"] },
      { title: "Desenvolvimento de pessoas", items: ["Hard e soft skills", "Formação de líderes", "Planos de carreira"] },
      { title: "IA aplicada à educação", items: ["Assessment automatizado", "Diagnóstico de gaps", "Trilhas personalizadas"] },
      { title: "Analytics educacional", items: ["Dashboards executivos", "Indicadores de treino", "ROI da capacitação"] },
    ],
    color: "#22D3EE",
  },
  {
    slug: "esg",
    title: "ESG e governança",
    heroTitle: "Sustentabilidade que vira vantagem competitiva.",
    heroDescription:
      "ESG deixou de ser tendência e virou exigência de mercado e de contratos. Estruturamos diagnóstico, indicadores e governança com método e apoio do nosso ecossistema jurídico — pagando R$ 0 pela nossa atuação.",
    icon: "icon-esg.png",
    stats: [
      { value: "15+", label: "soluções em ESG e governança" },
      { value: "100%", label: "customizável ao seu cenário" },
      { value: "R$ 0", label: "de custo para o cliente" },
    ],
    groups: [
      { title: "ESG corporativo", items: ["Diagnóstico e baseline", "KPIs e monitoramento", "Relatórios ESG"] },
      { title: "Governança", items: ["Compliance", "Políticas corporativas", "Gestão de riscos"] },
      { title: "Sustentabilidade", items: ["Impacto social", "Diversidade e inclusão", "Responsabilidade corporativa"] },
      { title: "Escala S ESG", items: ["Diagnóstico de maturidade", "Certificação", "Roadmap de evolução"] },
    ],
    color: "#EF4444",
  },
];

export const DEPOIMENTOS_META = {
  eyebrow: "Quem confia na Longevidade",
  title: "O que dizem nossos clientes.",
  subtitle:
    "Empresas que centralizaram suas soluções e ganharam tempo, economia e segurança com um único parceiro.",
};

export const DEPOIMENTOS = [
  {
    quote:
      "A Longevidade assumiu toda a negociação dos nossos benefícios e ainda trouxe condições melhores do que tínhamos direto com a operadora. E o melhor: sem nos custar nada.",
    name: "Dr. Márcio Botelho",
    role: "CEO e Fundador · Botelho e Castro Advogados",
    initials: "MB",
  },
  {
    quote:
      "Tínhamos uma demanda específica que nenhum fornecedor resolvia. Eles pesquisaram, validaram e apresentaram a solução pronta. Viraram nosso braço estratégico.",
    name: "Ygor Alouan",
    role: "CEO e Co-Fundador · Grupo Alouan Business Solutions",
    initials: "YA",
  },
  {
    quote:
      "O suporte ao longo do contrato faz toda a diferença. Sempre que temos um problema operacional, temos um canal a mais resolvendo por nós. Recomendo sem ressalvas.",
    name: "Willam Sferra",
    role: "CEO e Fundador · KTG Group",
    initials: "WS",
  },
  {
    quote:
      "A Longevidade assumiu toda a negociação dos nossos benefícios e ainda trouxe condições melhores do que tínhamos direto com a operadora. E o melhor: sem nos custar nada.",
    name: "Priscila Infanger",
    role: "CHRO · Cinépolis",
    initials: "PI",
  },
];

export const OUTRO = {
  eyebrow: "Diagnóstico gratuito",
  title: "Descubra o que sua empresa está deixando na mesa.",
  subtitle:
    "Um diagnóstico gratuito do seu potencial de economia em benefícios e fornecedores — e das soluções que você ainda não tem. Sem custo, sem compromisso.",
  cta: "Sem custo · Sem compromisso · Resposta em até 48h",
  url: "longevidadebusiness.com.br",
  email: "contato@longevidadebusiness.com.br",
  phone: "+55 (19) 99804-5442",
  address: "Rua Paulo Abacherli, 200 · Swiss Park · Campinas/SP",
};
