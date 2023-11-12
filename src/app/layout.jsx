import Navbar from "@/components/Navbar";
import { Young_Serif } from "next/font/google"
import "./globals.css";

export const metadata = {
  title: "Mi tienda con NextJS - Home Page",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, ecommerce",
  authors: [
    {
      name: "Rolando"
    }
  ]
};

const youngSerif = Young_Serif({
  weight: ["400"],
  subsets: ["latin"],
});


function RootLayout({children}) {
  return (
    <html>
      <body className={youngSerif.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;