import { Alata } from "next/font/google";
import "./globals.css";
//importo los componentes que desee que permanezcan en la pagina
import Nav from "@/Components/Nav/Nav";
import Footer from "@/Components/Folder/Footer";
// importo los estilos y fuentes que deseo que esten en toda mi pagina
const alata = Alata({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Perfil de Usuario",
  description: "perfil de usuario max lopez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${alata.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
