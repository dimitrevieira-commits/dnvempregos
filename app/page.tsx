
import Filters from "@/components/Filters";
import JobCard from "@/components/JobCard";
import { buildWhatsAppShare } from "@/lib/share";
import { MOCK_JOBS } from "@/lib/data";
import type { Job } from "@/lib/types";

function filterJobs(
  jobs: Job[],
  q: string,
  pais: string,
  cidade: string,
  modalidade: string,
  periodo: number
): Job[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - periodo);

  return jobs
    .filter(j => (pais ? j.pais === pais : true))
    .filter(j => (modalidade ? j.modalidade === modalidade : true))
    .filter(j => (cidade ? j.cidade.toLowerCase().includes(cidade.toLowerCase()) : true))
    .filter(j => (q ? `${j.titulo} ${j.empresa}`.toLowerCase().includes(q.toLowerCase()) : true))
    .filter(j => new Date(j.data_publicacao) >= cutoff)
    .map(j => ({
      ...j,
      compartilhar_whatsapp: buildWhatsAppShare(j.titulo, j.empresa, j.cidade, j.pais, j.link_candidatura)
    }));
}

export default async function Page({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const q = (searchParams.q as string) ?? "";
  const pais = (searchParams.pais as string) ?? "";
  const cidade = (searchParams.cidade as string) ?? "";
  const modalidade = (searchParams.modalidade as string) ?? "";
  const periodo = parseInt((searchParams.periodo as string) ?? "3", 10);

  const jobs = filterJobs(MOCK_JOBS, q, pais, cidade, modalidade, periodo);

  return (
    <>
      <Filters />
      <div className="grid">
        {jobs.length > 0 ? (
          jobs.map(j => <JobCard key={j.id} job={j} />)
        ) : (
          <div className="meta">Nenhuma vaga encontrada com os filtros selecionados.</div>
        )}
      </div>
    </>
  );
}
