import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/store/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LiveWithCodeAnkit",
  description: "Ankit Yadav",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
