
import { NextRequest, NextResponse } from "next/server";
import { MOCK_JOBS } from "@/lib/data";
import { buildWhatsAppShare } from "@/lib/share";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q")?.toLowerCase() ?? "";
  const pais = url.searchParams.get("pais") ?? "";
  const cidade = url.searchParams.get("cidade")?.toLowerCase() ?? "";
  const modalidade = url.searchParams.get("modalidade") ?? "";
  const periodo = parseInt(url.searchParams.get("periodo") ?? "3", 10);

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - periodo);

  const data = MOCK_JOBS
    .filter(j => (pais ? j.pais === pais : true))
    .filter(j => (modalidade ? j.modalidade === modalidade : true))
    .filter(j => (cidade ? j.cidade.toLowerCase().includes(cidade) : true))
    .filter(j => (q ? `${j.titulo} ${j.empresa}`.toLowerCase().includes(q) : true))
    .filter(j => new Date(j.data_publicacao) >= cutoff)
    .map(j => ({ ...j, compartilhar_whatsapp: buildWhatsAppShare(j.titulo, j.empresa, j.cidade, j.pais, j.link_candidatura) }));

  return NextResponse.json(data);
}
