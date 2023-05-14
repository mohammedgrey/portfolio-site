import Home from "components/Home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammed Saad",
  description: "",
};

export default function HomePage() {
  return (
    <main>
      <Home />
    </main>
  );
}
