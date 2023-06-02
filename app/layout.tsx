import "@/styles/globals.scss";
import Light from "components/Home/components/Light/Light";
import Navbar from "components/Navbar/Navbar";

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
        <div className="top-nav-and-light">
          <Navbar />
          <Light />
        </div>
        <div className="layout-container">
          <main className="main-container">{children}</main>
        </div>
      </body>
    </html>
  );
}
