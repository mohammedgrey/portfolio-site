import Frameworks from "./components/frameworks/component";
import Greetings from "./components/greetings/component";

export default function HomePage() {
  return (
    <main>
      <section>
        <Greetings />
      </section>
      <section>{/* <Frameworks /> */}</section>
    </main>
  );
}
