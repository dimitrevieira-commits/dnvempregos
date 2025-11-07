
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Filters() {
  const router = useRouter();
  const params = useSearchParams();

  const [q, setQ] = useState(params.get("q") ?? "");
  const [pais, setPais] = useState(params.get("pais") ?? "");
  const [cidade, setCidade] = useState(params.get("cidade") ?? "");
  const [modalidade, setModalidade] = useState(params.get("modalidade") ?? "");
  const [periodo, setPeriodo] = useState(params.get("periodo") ?? "3");

  useEffect(() => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (pais) sp.set("pais", pais);
    if (cidade) sp.set("cidade", cidade);
    if (modalidade) sp.set("modalidade", modalidade);
    if (periodo) sp.set("periodo", periodo);
    router.replace(`/?${sp.toString()}`);
  }, [q, pais, cidade, modalidade, periodo, router]);

  return (
    <div className="filters">
      <input placeholder="Buscar por cargo ou palavra-chave" value={q} onChange={e=>setQ(e.target.value)} />
      <select value={pais} onChange={e=>setPais(e.target.value)}>
        <option value="">País (todos)</option>
        <option value="Portugal">Portugal</option>
        <option value="Espanha">Espanha</option>
      </select>
      <input placeholder="Cidade" value={cidade} onChange={e=>setCidade(e.target.value)} />
      <select value={modalidade} onChange={e=>setModalidade(e.target.value)}>
        <option value="">Modalidade</option>
        <option value="Presencial">Presencial</option>
        <option value="Híbrido">Híbrido</option>
        <option value="Remoto">Remoto</option>
      </select>
      <select value={periodo} onChange={e=>setPeriodo(e.target.value)}>
        <option value="1">Hoje</option>
        <option value="3">3 dias</option>
        <option value="7">7 dias</option>
        <option value="14">14 dias</option>
      </select>
    </div>
  );
}
