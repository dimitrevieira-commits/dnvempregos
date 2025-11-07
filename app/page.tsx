
import Filters from "@/components/Filters";
import JobCard from "@/components/JobCard";
import { buildWhatsAppShare } from "@/lib/share";
import type { Job } from "@/lib/types";

async function fetchJobs(searchParams: Record<string, string | string[] | undefined>): Promise<Job[]> {
  const params = new URLSearchParams();
  for (const [k,v] of Object.entries(searchParams)) {
    if (!v) continue;
    params.set(k, Array.isArray(v) ? v[0]! : v);
  }
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const res = await fetch(`${base}/api/vagas?${params.toString()}`, { cache: "no-store" });
  return res.json();
}

export default async function Page({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const jobs = await fetchJobs(searchParams);
  return (
    <>
      <Filters />
      <div className="grid">
        {jobs.map(j => {
          if (!j.compartilhar_whatsapp) {
            j.compartilhar_whatsapp = buildWhatsAppShare(j.titulo, j.empresa, j.cidade, j.pais, j.link_candidatura);
          }
          return <JobCard key={j.id} job={j} />;
        })}
      </div>
    </>
  );
}
