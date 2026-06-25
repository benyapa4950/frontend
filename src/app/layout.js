import { Prompt } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navigation"

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300"],
  variable: "--font-prompt",
});

export const metadata = {
  title: "mimimo",
  description: "ร้านขายเครื่องประดับแฮนเมสเชียงใหม่",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navber/>
        { children }
      </body>
    </html>
  );
}
