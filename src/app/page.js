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
    <div className="flex flex-col font-mono theme-bg transition overflow-auto">
      <Navbar />
      <Sidebar />
      <div className="w-3/4 m-auto align-center ">
        <main className="w-full">
          <section
            id="hello-world"
            className="w-full flex py-20 xl:py-32 min-h-screen md:w-3/5 xl:w-3/4"
          >
            <Introduction />
          </section>
          <section
            id="about"
            className="flex flex-col py-20 min-h-screen w-full md:w-5/6 mx-auto my-auto"
          >
            <About />
          </section>
          <section
            id="experience"
            className="flex flex-col py-20 min-h-screen w-full md:w-5/6 my-auto mx-auto"
          >
            <Experience />
          </section>
          <section
            id="projects"
            className="flex flex-col py-20 min-h-screen w-full md:w-5/6 my-auto mx-auto"
          >
            <Projects />
          </section>
          <section
            id="contact"
            className="flex flex-col py-20 w-full screen-80 md:w-5/6 mx-auto my-20"
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
