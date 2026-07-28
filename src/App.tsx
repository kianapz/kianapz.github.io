import { useEffect, useRef, useState, useCallback } from "react";
import WebFont from "webfontloader";
import Nav from "./components/Nav";
import SocialFloat from "./components/SocialFloat";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

WebFont.load({
  custom: {
    families: ["Roboto", "Roboto-light"],
    urls: ["./fonts/Roboto-Regular.ttf", "./fonts/Roboto-Light.ttf"],
  },
});

const sectionIds = ["home", "about", "skills", "experience", "projects", "contact"];

function App() {
  const mainRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { root, threshold: [0.3, 0.5, 0.7] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      setScrolled(root.scrollTop > 8);
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? (root.scrollTop / max) * 100 : 0);
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      root.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div id="App" className="h-screen flex flex-col bg-slate-50 overflow-hidden">
      <Nav active={active} onNavigate={scrollTo} scrolled={scrolled} progress={progress} />
      <main
        ref={mainRef}
        className="flex-1 overflow-y-scroll snap-y snap-proximity scroll-smooth"
      >
        <Hero onNavigate={scrollTo} />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
        {/* <Footer onNavigate={scrollTo} /> */}
      </main>
      <SocialFloat />
    </div>
  );
}

export default App;
