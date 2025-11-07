
import "./../styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "DNV Empregos — Vagas recentes em Portugal e Espanha",
  description: "Buscador de vagas com links finais verificados",
  openGraph: { siteName: "DNV Empregos", title: "DNV Empregos" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
