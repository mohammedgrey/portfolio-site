import "@/styles/globals.scss";
import Light from "components/Home/components/Light/Light";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer";
import Fireflies from "@/components/Fireflies/Fireflies";

export const metadata = {
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
            <Light />
          </div>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
