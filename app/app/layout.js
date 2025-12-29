import Content from "./Components/Content";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Premium Engineering Hub | Modern Industrial Design",
  description: "A precision-engineered digital experience for modern industrial excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased font-sans bg-background text-foreground transition-colors duration-300`}
      >
        <div className="industrial-grid min-h-screen">
          <Content>
            {children}
          </Content>
        </div>
      </body>
    </html>
  );
}

