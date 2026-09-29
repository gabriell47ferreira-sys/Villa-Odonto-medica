export interface Treatment {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  cro: string;
  specialty: string;
  bio: string;
  image?: string;
}

export interface ClinicInfo {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  slogan: string;
  instagram: {
    handle: string;
    username: string;
    url: string;
    reelsUrl: string;
    followersCount: string;
    postsCount: string;
  };
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    fullFormatted: string;
    reference: string;
  };
  location: {
    lat: number;
    lng: number;
    googleMapsPlaceUrl: string;
    googleMapsDirectionsUrl: string;
    embedMapSrc: string;
  };
  contact: {
    whatsappRawNumber: string;
    whatsappDisplay: string;
    isWhatsappConfirmed: boolean;
    defaultMessage: string;
    phoneDisplay: string;
  };
  businessHours: {
    weekday: string;
    saturday: string;
    sunday: string;
    isConfirmed: boolean;
  };
  showProfessionals: boolean;
  googleReviews: {
    placeUrl: string;
    showRealReviewsOnly: boolean;
    reviewsCountDisplay: string;
    ratingDisplay: string;
  };
}

export const clinicData: ClinicInfo = {
  name: "Clínica Villa Odonto Médica",
  legalName: "Clínica Villa Odonto Médica Ltda.",
  shortName: "Villa Odonto Médica",
  tagline: "Odontologia & Saúde Integrada",
  slogan: "Cuidamos do seu sorriso e bem-estar em Caruaru",
  instagram: {
    handle: "@villaodontomedica",
    username: "villaodontomedica",
    url: "https://www.instagram.com/villaodontomedica/",
    reelsUrl: "https://www.instagram.com/villaodontomedica/reels/",
    followersCount: "3.242",
    postsCount: "76",
  },
  address: {
    street: "Rua Marieta Líra de Azevedo",
    number: "50",
    neighborhood: "Kennedy",
    city: "Caruaru",
    state: "PE",
    cep: "55036-410",
    fullFormatted: "Rua Marieta Líra de Azevedo, 50 — Kennedy, Caruaru – PE, CEP 55036-410",
    reference: "Próximo aos principais acessos e comércio do bairro Kennedy",
  },
  location: {
    lat: -8.2818749,
    lng: -35.9985075,
    googleMapsPlaceUrl: "https://www.google.com/maps/place/Clinica+Villa+Odonto+Medica/@-8.2818696,-36.0033784,17z/data=!3m1!4b1!4m6!3m5!1s0x7a98ba313b350cf:0x53bb9438e442d0bf!8m2!3d-8.2818749!4d-35.9985075!16s%2Fg%2F11sqr2ycs0",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=-8.2818749,-35.9985075",
    embedMapSrc: "https://maps.google.com/maps?q=-8.2818749,-35.9985075&hl=pt-BR&z=17&output=embed",
  },
  contact: {
    // WhatsApp oficial verificado na bio do Instagram da clínica
    whatsappRawNumber: "558173263609",
    whatsappDisplay: "(81) 97326-3609",
    isWhatsappConfirmed: true,
    defaultMessage: "Olá! Conheci a Clínica Villa Odonto Médica pelo site e gostaria de informações sobre os atendimentos e horários disponíveis.",
    phoneDisplay: "(81) 97326-3609",
  },
  businessHours: {
    weekday: "Segunda a Sexta: 08h às 18h",
    saturday: "Sábado: 08h às 12h",
    sunday: "Domingo: Fechado",
    isConfirmed: true,
  },
  showProfessionals: false,
  googleReviews: {
    placeUrl: "https://www.google.com/maps/place/Clinica+Villa+Odonto+Medica/@-8.2818696,-36.0033784,17z/data=!3m1!4b1!4m6!3m5!1s0x7a98ba313b350cf:0x53bb9438e442d0bf!8m2!3d-8.2818749!4d-35.9985075!16s%2Fg%2F11sqr2ycs0",
    showRealReviewsOnly: true,
    reviewsCountDisplay: "Perfil Oficial no Google Maps",
    ratingDisplay: "Avaliações no Google",
  },
};

export const confirmedTreatments: Treatment[] = [
  {
    id: "avaliacao-clinica",
    title: "Avaliação e Diagnóstico Odontológico",
    category: "Cuidado Essencial",
    description: "Consulta inicial detalhada para avaliação completa da saúde bucal, análise clínica preventiva e planejamento individualizado de cuidados para cada paciente.",
    iconName: "Stethoscope",
    highlights: ["Exame clínico minucioso", "Orientação preventiva", "Plano de cuidado individualizado"]
  },
  {
    id: "prevencao-profilaxia",
    title: "Prevenção e Profilaxia (Limpeza)",
    category: "Higiene & Prevenção",
    description: "Remoção cuidadosa de placa bacteriana e tártaro, polimento coronário e aplicação de flúor para preservar a saúde das gengivas e a integridade dos dentes.",
    iconName: "Sparkles",
    highlights: ["Remoção de tártaro", "Polimento suave", "Prevenção de cáries e gengivite"]
  },
  {
    id: "odontologia-restauradora",
    title: "Odontologia Restauradora",
    category: "Reabilitação & Conforto",
    description: "Tratamento de cáries e restaurações estéticas com foco em devolver a função mastigatória, a anatomia natural e o conforto ao sorrir.",
    iconName: "ShieldCheck",
    highlights: ["Materiais estéticos e resistentes", "Alívio de sensibilidade", "Recuperação funcional"]
  },
  {
    id: "cuidados-periodontais",
    title: "Saúde Gengival e Periodontal",
    category: "Saúde Integrada",
    description: "Cuidados específicos para prevenção e controle de inflamações na gengiva, fundamentais para a estabilidade dentária e a saúde de todo o organismo.",
    iconName: "HeartPulse",
    highlights: ["Controle de sangramentos", "Proteção do periodonto", "Acompanhamento preventivo"]
  },
  {
    id: "saude-bucal-familia",
    title: "Atendimento Integrado da Família",
    category: "Acolhimento Familiar",
    description: "Ambiente acolhedor e atendimento humanizado para pacientes de diferentes idades, promovendo tranquilidade, confiança e bem-estar em cada consulta.",
    iconName: "Users",
    highlights: ["Ambiente humanizado", "Sem pressa no atendimento", "Cuidado para toda a família"]
  },
  {
    id: "orientacao-higiene",
    title: "Orientação e Educação Bucal",
    category: "Bem-Estar Contínuo",
    description: "Instruções práticas e personalizadas sobre técnicas de escovação, uso adequado do fio dental e hábitos diários para um sorriso sempre saudável.",
    iconName: "Smile",
    highlights: ["Técnicas personalizadas", "Prevenção a longo prazo", "Suporte pós-atendimento"]
  }
];

export const clinicProfessionals: Professional[] = [
  {
    id: "dr-responsavel",
    name: "Corpo Clínico Villa Odonto Médica",
    role: "Cirurgiões-Dentistas",
    cro: "CRO-PE (Em atualização)",
    specialty: "Odontologia Geral e Saúde Integrada",
    bio: "Profissionais dedicados ao cuidado individualizado, à biossegurança rigorosa e ao atendimento acolhedor para cada paciente em Caruaru.",
  }
];

export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || clinicData.contact.defaultMessage;
  const encoded = encodeURIComponent(message);
  if (clinicData.contact.whatsappRawNumber) {
    return `https://wa.me/${clinicData.contact.whatsappRawNumber}?text=${encoded}`;
  }
  return `https://api.whatsapp.com/send?text=${encoded}`;
}
