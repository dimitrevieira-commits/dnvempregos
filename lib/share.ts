
export function buildWhatsAppShare(titulo: string, empresa: string, cidade: string, pais: string, url: string) {
  const txt = `${titulo} - ${empresa} em ${cidade}, ${pais} | Candidatura: ${url}`;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(txt)}`;
}
