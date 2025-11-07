
export type Job = {
  id: string;
  titulo: string;
  empresa: string;
  pais: "Portugal" | "Espanha";
  cidade: string;
  modalidade: "Presencial" | "Híbrido" | "Remoto";
  contrato: "Efetivo" | "Temporário" | "Estágio" | "Freelance";
  salario: string | null;
  beneficios?: string[];
  descricao: string;
  pre_requisitos: string[];
  idiomas?: string[];
  data_publicacao: string; // YYYY-MM-DD
  data_coleta: string; // ISO
  status_vaga: "ativa" | "ativa_requer_login" | "expirada" | "encerrada";
  fonte: string;
  link_candidatura: string; // FINAL canônico (ex.: itjobs.pt/oferta/...)
  link_canonico?: string;
  link_tipo?: "ats" | "portal_final" | "carreiras_empresa";
  link_status: "OK" | "Quebrado" | "Requer login" | "Redirecionado";
  compartilhar_whatsapp: string;
  atendimento_site: string;
  instagram: string;
  whatsapp_atendimento: string;
};
