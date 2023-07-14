import Fireflies from "@/components/Fireflies/Fireflies";
import "@/styles/globals.scss";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Mohammed Saad",
  description:
    "I am a software engineer who is passionate about creating aesthetically pleasing and fully functioning websites from the inside out.",
  keywords:
    "software, developer, frontend, engineering, backend, fullstack, websites, development, coding, agile, javascript, typescript, react, native, node, express, mongodb, firebase, sql, git, vue, web, mohammed, saad, muhammad, mohamed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
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
