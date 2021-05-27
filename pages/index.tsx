import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react'
import { Sidebar } from '../components/Layout/Sidebar';
import { Navbar } from '../components/Layout/Navbar';
import { TabContent } from '../components/Tabs/TabContent';
import { Tabs } from '../components/Tabs/Tabs';
import { RightChevron } from '../components/Icons/RightChevron';

export const Home = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState('');
  return (
    <div className="flex flex-col font-mono theme-bg transition overflow-auto">
      <Head>
        <title>Richard Paredes</title>
      </Head>
      <Navbar />
      <Sidebar />
      <div className="w-3/4 m-auto flex align-center ">
        <main className="w-full">
          <section id="hello-world" className="w-full flex py-20 xl:py-32 min-h-screen md:w-3/5 xl:w-3/4">
            <div className="rounded-lg flex flex-col my-auto text-grayscaled">
              <p className="text-xl md:text-2xl text-colored mb-5 md:mb-10">
                Hello, world!
              </p>
              <h1 className="text-3xl md:text-5xl text-black dark:text-white my-2 md:my-5">
                I'm <span className="font-bold">Richard Paredes</span>.
              </h1>
              <p className="text-2xl md:text-4xl">
                ^~^
              </p>
              <p className="text-body my-4 md:my-10">
                I'm a software engineer situated in Houston, Texas who loves to build applications for people. At the moment, I'm a full-stack web developer at <a href="https://www.hcss.com/" target="_blank" className="hyperlink">HCSS</a>, creating robust and scalable software for the construction industry.
              </p>
              <div className="text-md md:text-md w-full align-self-end my-2 md:my-5">
                <a href="mailto:richard.o.paredes@gmail.com" className="btn-colored">Contact me</a>
              </div>
            </div>
          </section>
          <section id="about" className="flex py-20 min-h-screen w-full md:w-5/6 my-auto mx-auto">
            <div className="rounded-lg w-full flex flex-col md:flex-row my-auto overflow-auto sm:mx-auto md:mx-0 md:w-full">
              <div className="z-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 my-auto bg-grayscaled-soft">
                <Image alt="Richard Paredes" src="/images/me.jpg" width="225px" height="225px" layout="responsive" className="rounded-lg" />
              </div>
              <div className="my-5 md:ml-10 flex flex-col container px-4 text-grayscaled">
                <h2 className="text-xl md:text-2xl mb-5 md:mb-10 special-text-colored">
                  About me
                </h2>
                <p className="text-body mb-5 md:mb-10">
                  Hi-ya!
                  My name is Richard and I'm passionate about developing web and XR applications. My journey into software development began back when I was a wee lad trying to install mods for my favorite game, <a href="https://thewitcher.com/en/witcher3" target="_blank" className="hyperlink">The Witcher 3: Wild Hunt</a>. After many manual script merge attempts and corrupted game saves, I realized I really enjoy digging deep and working with computers to make magical things happen.
                </p>
                <p className="text-body mb-5 md:mb-10">
                  Since then, I've expanded my knowledge through various avenues: a <a href="https://redlabs.uh.edu" target="_blank" className="hyperlink">start-up accelerator program for students</a>, <a href="https://cougarcs.com/" target="_blank" className="hyperlink">student organizations</a>, and, of course, <a href="https://github.com/richard-paredes/" target="_blank" className="hyperlink">personal projects</a>. Right now, I'm honing my skills by developing RESTful APIs and friendly interfaces for complex user management over at <a href="https://www.hcss.com/" target="_blank" className="hyperlink">HCSS</a>.
                </p>
                <p className="text-body mb-2 md:mb-5">
                  Here are some technologies I've picked up along the way:
                </p>
                <div className="flex text-black text-xs md:text-sm dark:text-white flex-wrap rounded-md">
                  <span className="pill">Git</span>
                  <span className="pill">C#</span>
                  <span className="pill">TypeScript</span>
                  <span className="pill">Python</span>
                  <span className="pill">ASP.NET</span>
                  <span className="pill">Node.JS</span>
                  <span className="pill">React</span>
                  <span className="pill">Unity</span>
                  <span className="pill">Microsoft Azure</span>
                  <span className="pill">Next.JS</span>
                </div>
              </div>
            </div>
          </section>
          <section id="experience" className="flex flex-col py-20 min-h-screen w-full md:w-5/6 my-auto mx-auto">

            <div className="mt-5 text-grayscaled">
              <h2 className="text-xl md:text-2xl mb-5 md:mb-10 special-text-colored">
                My experience
              </h2>
              <Tabs>
                <TabContent label="HCSS">
                  <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">Software Developer at <a href="https://www.hcss.com/" target="_blank" className="hyperlink">Heavy Construction System Specialists, Inc.</a></h2>
                  <h3 className="text-body text-grayscaled">Sept. 2019 - Present</h3>
                  <ul className="text-body text-grayscaled my-5">
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Designed and developed web-based reporting tools, allowing customers track historical changes related to billing and better manage their users.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Collaborated with UI and UX teams to redesign the previous login page, and introduced React to replace the legacy Angular codebase.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Elevated existing web APIs by incorporating versioning, standardized responses, unit test coverage, and RESTful standards.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Engaged in code reviews with team members and managed release and deployments using Microsoft Azure.</li>
                  </ul>
                </TabContent>
                <TabContent label="UH">
                  <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">Game Developer at <a target="_blank" href="https://www.linkedin.com/company/uhredlabs" className="hyperlink">Univeristy of Houston</a></h2>
                  <h3 className="text-body text-grayscaled">Summer 2019</h3>
                  <ul className="text-body text-grayscaled my-5">
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Participated in a entrepreneurship program, Pre-RED Labs, to kickstart a start-up focused on helping people with self-discovery through interactive games.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Developed a primitive 3D game prototype in Unity with dialogue system and character animations.</li>
                  </ul>
                </TabContent>
                <TabContent label="UT">
                  <h2 className="text-base md:text-lg font-semibold text-black dark:text-white">Undergraduate Research Mentor at <a href="https://cns.utexas.edu/fri/students/next-steps/peer-mentoring-program" className="hyperlink">University of Texas at Austin</a></h2>
                  <h3 className="text-body text-grayscaled">Jan. 2017 - Dec. 2018</h3>
                  <ul className="text-body text-grayscaled my-5">
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /></li>
                  </ul>
                </TabContent>
              </Tabs>
            </div>
          </section>
          <section id="projects" className="flex flex-col py-20 min-h-screen w-full my-auto mx-auto">
            <div className="mt-auto text-grayscaled">
              <h2 className="header special-text-colored">
                My experience
              </h2>
            </div>
            <div className="w-full h-1 border-2 mb-auto">

            </div>
          </section>
          <section id="contact" className="md:px-32 py-32 min-h-screen">
            <div className=" rounded-lg md:p-20 my-auto">
              <h3 className="text-xl text-emerald-600 dark:text-emerald-200 mb-10">
                Hello, world!
              </h3>
              <h2 className="text-4xl font-bold text-emerald-600 mb-5 dark:text-emerald-400">
                I'm Richard Paredes.
              </h2>
              <h3 className="text-4xl text-gray-900 dark:text-gray-400">
                Let's get in touch!
              </h3>
            </div>
          </section>
          {/* <section>
          <div className="container flex justify-center my-2 p-16">
          <h1 className="text-4xl text-emerald-600 dark:text-emerald-500">Experience</h1>
          </div>
          </section>
          <section>
          <div className="container flex justify-center my-2 p-16">
          <h1 className="text-4xl text-emerald-600 dark:text-emerald-500">Projects</h1>
          </div>
          </section>
          <section>
          <div className="container flex justify-center my-2 p-16">
          <h1 className="text-4xl text-emerald-600 dark:text-emerald-500">Education</h1>
          </div>
          </section>
          <section>
          <div className="container flex justify-center my-2 p-16">
          <h1 className="text-4xl text-emerald-600 dark:text-emerald-500">Education</h1>
          </div>
        </section> */}
        </main>
      </div>
    </div>
  )
}

export default Home;