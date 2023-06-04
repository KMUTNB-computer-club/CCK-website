import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import LayoutPage from "@/components/LayoutPage";
import Sidebar from "@/components/Sidebar";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-prompt",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Computer Club KMUTNB",
  description: "CCK TEAM CPRE19",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <Navbar />
        {/* <Sidebar /> */}
        <div className="w-full ps-32 max-md:ps-0 flex justify-center">
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
