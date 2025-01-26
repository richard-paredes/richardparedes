import React from "react";

import { Sidebar, Navbar } from "@/components/Layout";
import { Experience } from "@/features/experience";
import { Introduction } from "@/features/introduction";
import { About } from "@/features/about";
import { Projects } from "@/features/projects";
import { ContactMe } from "@/features/contactMe";
import { CatFact } from "@/features/catFact/CatFact";

const Home = async () => {
  return (
    <div className="flex flex-col font-mono theme-bg transition">
      <Navbar />
      <Sidebar />
      <div className="w-full lg:w-3/4 text-md mx-auto">
        <main className="w-full mx-auto px-2 lg:px-10">
          <section
            id="hello-world"
            className="flex flex-col py-20 min-h-screen w-full lg:mx-auto"
          >
            <Introduction />
          </section>
          <section
            id="about"
            className="flex flex-col py-20 min-h-screen w-full lg:mx-auto my-auto"
          >
            <About />
          </section>
          <section
            id="experience"
            className="flex flex-col py-20 min-h-screen w-full lg:mx-auto my-auto"
          >
            <Experience />
          </section>
          <section
            id="projects"
            className="flex flex-col py-20 min-h-screen w-full lg:mx-auto my-auto"
          >
            <Projects />
          </section>
          <section
            id="contact"
            className="flex flex-col py-20 min-h-[90vh] w-full lg:mx-auto mt-auto"
          >
            <ContactMe />
          </section>
        </main>
        <footer className="w-full flex flex-col justify-center items-center text-center text-xs text-grayscaled">
          <CatFact />
        </footer>
      </div>
    </div>
  );
};

export default Home;
