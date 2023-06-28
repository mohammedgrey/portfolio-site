import Fireflies from "@/components/Fireflies/Fireflies";
import "@/styles/globals.scss";
import Footer from "components/Footer";
import Navbar from "components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammed Saad",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Fireflies />
        <div className="layout-container">
          <div className="top-nav-and-light">
            <Navbar />
          </div>
          <main>{children}</main>
          <Footer />
        </div>
        <script
          src="https://www.recaptcha.net/recaptcha/api.js"
          async
          defer
        ></script>
      </body>
    </html>
  );
}
