import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-zinc-800/60 py-8 px-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Hristijan Mijalkov · Built with Next.js &amp; Tailwind CSS
      </footer>
    </>
  );
}
