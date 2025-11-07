
import type { Job } from "@/lib/types";

export default function JobCard({ job }: { job: Job }) {
  const showApply = job.link_status === "OK" && job.status_vaga.startsWith("ativa");
  return (
    <div className="card" role="article" aria-label={`Vaga ${job.titulo}`}>
      <div>
        <h3>{job.titulo}</h3>
        <div className="meta">{job.empresa}</div>
        <div className="meta">{job.cidade}, {job.pais} • {job.modalidade} • {job.contrato}</div>
        {job.salario && <div className="salary">{job.salario}</div>}
      </div>
      <div className="meta">{job.descricao}</div>
      {job.pre_requisitos?.length ? (
        <ul className="meta" aria-label="Pré-requisitos">
          {job.pre_requisitos.map((r, i) => (<li key={i}>{r}</li>))}
        </ul>
      ) : null}
      <div className="actions">
        {showApply ? (
          <a className="btn primary" href={job.link_candidatura} target="_blank" rel="noopener">Candidatar-se à vaga</a>
        ) : (
          <span className="badge">Link em validação</span>
        )}
        <a className="btn" href={job.compartilhar_whatsapp} target="_blank" rel="noopener">Compartilhar no WhatsApp</a>
      </div>
      <div className="footer">
        <div className="meta">Publicado: {job.data_publicacao} • Coletado: {new Date(job.data_coleta).toLocaleString()}</div>
        <div className="meta">
          <a href="https://www.dnvturismo.com.br" target="_blank" rel="noopener">www.dnvturismo.com.br</a> •
          <a href="https://www.instagram.com/dnvturismo?igsh=MXMyOTUwbGozZHA4Zw==" target="_blank" rel="noopener">Instagram</a> •
          <a href="https://wa.me/message/VWCYVUQICMY3B1" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
