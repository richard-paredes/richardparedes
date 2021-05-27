import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react'
import { Sidebar } from '../components/Layout/Sidebar';
import { Navbar } from '../components/Layout/Navbar';
import { TabContent } from '../components/Tabs/TabContent';
import { Tabs } from '../components/Tabs/Tabs';
import { RightChevron } from '../components/Icons/RightChevron';
import { GitHub } from '../components/Icons/Logos/GitHub';
import { BoxArrowUpRight } from '../components/Icons/BoxArrowUpRight';

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
              <p className="text-xl md:text-2xl special-text-colored mb-5 md:mb-10">
                hello, world!
              </p>
              <h1 className="text-3xl md:text-5xl text-grayscaled my-2 md:my-5">
                I'm <span className="font-bold">Richard Paredes</span>.
              </h1>
              <p className="text-2xl md:text-4xl">
                ^~^
              </p>
              <p className="text-body my-4 md:my-10">
                I'm a software engineer situated in Houston, Texas who loves to build applications for people. At the moment, I'm a full-stack web developer at <a href="https://www.hcss.com/" target="_blank" className="hyperlink">HCSS</a>, creating robust and scalable software for the construction industry.
              </p>
              <p className="text-body my-4">
                Looking for some help, or just want to chat? Feel free to reach out, I'm always happy to make new friends.
              </p>
              <div className="text-body w-full align-self-end my-2 md:my-5">
                <a href="mailto:richard.o.paredes@gmail.com" className="btn-colored">Contact me</a>
              </div>
            </div>
          </section>
          <section id="about" className="flex py-20 min-h-screen w-full md:w-5/6 my-auto mx-auto">
            <div className="rounded-lg w-full flex flex-col md:flex-row my-auto overflow-auto sm:mx-auto md:mx-0 md:w-full">
              <div className="z-0 relative w-full md:w-3/4 h-64 md:h-96 mt-auto mb-auto">
                <Image alt="Richard Paredes" src="/images/me.jpg" layout="fill" objectFit="contain" className="rounded-lg" />
              </div>
              <div className="my-5 flex flex-col container px-4 text-grayscaled">
                <h2 className="text-xl md:text-2xl mb-5 md:mb-10 special-text-colored">
                  about me
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
            <div className="my-auto text-grayscaled">
              <h2 className="text-xl md:text-2xl mb-5 md:mb-10 special-text-colored">
                places i've worked
              </h2>
              <Tabs>
                <TabContent label="HCSS">
                  <h2 className="text-base md:text-lg font-semibold text-grayscaled">Software Developer at <a href="https://www.hcss.com/" target="_blank" className="hyperlink">Heavy Construction System Specialists, Inc.</a></h2>
                  <h3 className="text-body text-grayscaled">Sept. 2019 - Present</h3>
                  <ul className="text-body text-grayscaled my-5">
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Designed and developed web-based reporting tools, allowing customers track historical changes related to billing and better manage their users.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Collaborated with UI and UX teams to redesign the previous login page, and introduced React to replace the legacy Angular codebase.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Elevated existing web APIs by incorporating versioning, standardized responses, unit test coverage, and RESTful standards.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Contributed in code reviews with team members and managed release and deployments using Microsoft Azure.</li>
                  </ul>
                </TabContent>
                <TabContent label="UH">
                  <h2 className="text-base md:text-lg font-semibold text-grayscaled">Game Developer at <a target="_blank" href="https://www.linkedin.com/company/uhredlabs" className="hyperlink">Univeristy of Houston</a></h2>
                  <h3 className="text-body text-grayscaled">Summer 2019</h3>
                  <ul className="text-body text-grayscaled my-5">
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Participated in a entrepreneurship program, Pre-RED Labs, to kickstart a start-up focused on helping people with self-discovery through interactive games.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Worked with a partner to flesh out interactive scenarios for use in analyzing players based on behaviors.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Developed a primitive 3D game prototype in Unity with dialogue system and character animations.</li>
                  </ul>
                </TabContent>
                <TabContent label="UT">
                  <h2 className="text-base md:text-lg font-semibold text-grayscaled">Undergraduate Research Mentor at <a href="https://cns.utexas.edu/fri/students/next-steps/peer-mentoring-program" className="hyperlink">University of Texas at Austin</a></h2>
                  <h3 className="text-body text-grayscaled">Jan. 2017 - Dec. 2018</h3>
                  <ul className="text-body text-grayscaled my-5">
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Conducted research focused on exploring methods to induce novel antibiotic production by <span className="italic">Streptomyces</span>.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Performed thin-layer chromatography, organic extractions, Kirby-Bauer disk diffusions and many other techniques to analyze bacteria metabolites.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Supervised seminars to help onboard incoming freshman by teaching common biochemical lab techniques.</li>
                    <li className="my-2"><RightChevron className="inline w-2 stroke-grayscaled" /> Engaged with students in exploring and conducting independent research.</li>
                  </ul>
                </TabContent>
              </Tabs>
            </div>
          </section>
          <section id="projects" className="flex flex-col py-20 min-h-screen w-full my-auto mx-auto">
            <div className="my-auto text-grayscaled">
              <h2 className="text-xl md:text-2xl text-center mb-5 md:mb-10 special-text-colored">
                things i've built
              </h2>
              <div className="flex flex-col">
                <div className="relative flex flex-col-reverse my-12 w-full md:h-96">
                  <div className="block md:w-1/2 xl:w-2/5 z-10 my-auto mx-auto">
                    <div className="flex flex-col rounded-md shadow-lg bg-grayscaled-soft border-b-4 md:border-b-0 md:border-l-4 border-colored">
                      <div className="mx-6 my-4">
                        <div className="font-medium text-base text-contrast mb-4">Lyrical Listener</div>
                        <p className="font-normal text-gray-dark text-sm mb-2">
                        The days of manually searching for song lyrics are over. With this minimalistic web app, sing along to the lyrics of those awesome tunes on Spotify. 
                      </p>
                      </div>
                      <div className="mx-6 mb-2 flex flex-col">
                        <div className="flex-grow text-xs text-grayscaled">
                          <p>Built with:</p>
                          <span className="mr-1">React</span>
                          <span className="m-1">NextJS</span>
                          <span className="m-1">Chakra-UI</span>
                          <span className="m-1">ASP.NET</span>
                          <span className="ml-1">Spotify API</span>
                        </div>
                        <div className="self-end text-right flex">
                          <GitHub className="w-5 m-2  stroke-colored cursor-pointer" />
                          <BoxArrowUpRight className="w-5 m-2 text-colored cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full hidden md:block opacity-80 dark:opacity-50 rounded-md bg-colored">
                    <Image src="/images/lyrical_listener.png" layout="fill" objectFit="contain" />
                  </div>
                  <div className="relative h-full md:hidden">
                    <Image src="/images/lyrical_listener.png" layout="responsive" width="960" height="461" />
                  </div>
                </div>
              </div>
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
        </main>
      </div>
    </div>
  )
}

export default Home;