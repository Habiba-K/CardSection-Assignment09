import Image from "next/image";
import Projects1 from "./Components1/Projects1";
import Projects2 from "./Components2/Projects2";

export default function Home() {
  return (
      <div>
        <h1 className="text-2xl font-serif text-center sm:text-4xl md:text-6xl">CARD SECTION</h1>
      <hr/>
      <Projects1/>
      <Projects2/>
    </div>
  );
}
