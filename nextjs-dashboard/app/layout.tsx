import "./ui/global.css";
import Script from "next/script";

export const metadata = {
  title: "DOG API",
  description: "Exemplo Dog API no Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        {children}

        {/* Carregar o script dogapi.js */}
        <Script src="/dogapi.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}


