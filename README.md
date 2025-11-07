
# DNV Empregos (MVP)
- Next.js 14, estilo inspirado no site de referência.
- Endpoint /api/vagas com dados mock (3 vagas) incluindo link final canônico (ex.: itjobs.pt/oferta/...).
- Pronto para plugar coletores reais.

## Rodar local
npm i
npm run dev
Abrir http://localhost:3000

## Deploy (Vercel)
- Crie um novo projeto e importe o repositório.
- Adicione a env `NEXT_PUBLIC_BASE_URL` com a URL do próprio deploy (ex.: https://dnv-empregos.vercel.app).
- Deploy.
