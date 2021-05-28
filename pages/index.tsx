import Head from 'next/head'
import Image from 'next/image';
import React from 'react'
import { Sidebar } from '../components/Layout/Sidebar';
import { Navbar } from '../components/Layout/Navbar';
import { TabContent } from '../components/Tabs/TabContent';
import { Tabs } from '../components/Tabs/Tabs';
import { RightChevron } from '../components/Icons/RightChevron';
import { GitHub } from '../components/Icons/Logos/GitHub';
import { BoxArrowUpRight } from '../components/Icons/BoxArrowUpRight';
import { Card } from '../components/Cards/Card';
import { Heart } from '../components/Icons/Heart';
import { CatFact } from '../components/CatFact';

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col font-mono theme-bg transition overflow-auto">
      <Head>
        <title>Richard Paredes</title>
      </Head>
      <Navbar />
      <Sidebar />
      <div className="w-3/4 m-auto align-center ">
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
                (-:
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
          <section id="about" className="flex flex-col py-20 min-h-screen w-full md:w-5/6 mx-auto my-auto">
            <div className="my-auto">
              <h2 className="text-xl md:text-2xl w-full mb-5 special-text-colored">
                about me
            </h2>
              <div className="rounded-lg w-full flex flex-col md:flex-row overflow-auto sm:mx-auto md:mx-0 md:w-full">
                <div className="z-0 relative w-full md:w-3/4 h-64 md:h-96 my-auto">
                  <Image alt="Richard Paredes" src="/images/me.jpg" layout="fill" objectFit="contain" className="rounded-lg" />
                </div>
                <div className="flex flex-col container md:px-4 text-grayscaled my-5 md:my-0">
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
          <section id="projects" className="flex flex-col py-20 min-h-screen w-full md:w-5/6 my-auto mx-auto">
            <div className="my-auto text-grayscaled">
              <h2 className="text-xl md:text-2xl mb-5 md:mb-10 special-text-colored">
                things i've built
              </h2>
              <div className="flex flex-col flex-wrap">
                <Card
                  heading={"Lyrical Listener"}
                  description={"The days of manually searching for song lyrics are over. With this minimalistic web app, sing along to the lyrics of those awesome tunes on Spotify."}
                  technologies={['React', 'Chakra-UI', 'ASP.NET', 'Spotify API']}
                  links={[<a key={0} title="GitHub" target="_blank" href="https://github.com/richard-paredes/lyrical-listener" className="border-2 border-transparent p-1 cursor-pointer rounded-md stroke-grayscaled hover-stroke-colored my-1">
                    <GitHub className="w-5" />
                  </a>,
                  <a key={1} title="Lyrical Listener" target="_blank" href="https://lyrical-listener.azurewebsites.net/" className="border-2 border-transparent p-1 cursor-pointer rounded-md text-grayscaled hover-text-colored my-1">
                    <BoxArrowUpRight className="w-5" />
                  </a>]}
                  bgImageSrc={'/images/lyrical_listener.png'}
                />
                <Card
                  heading={"League of Legends Stats Tracker"}
                  description={"Review some of your recent League of Legends gameplay statistics. Displays your rank status, as well as data visualizations for your last played match."}
                  technologies={['React', 'TailwindCSS', 'Next.JS', 'Riot Games API']}
                  links={[<a key={0} title="GitHub" target="_blank" href="https://github.com/richard-paredes/league-stats-tracker-v2" className="border-2 border-transparent p-1 cursor-pointer rounded-md stroke-grayscaled hover-stroke-colored my-1">
                    <GitHub className="w-5" />
                  </a>,
                  <a key={1} title="League Stats Tracker" target="_blank" href="https://league-stats-tracker-v2.vercel.app/" className="border-2 border-transparent p-1 cursor-pointer rounded-md text-grayscaled hover-text-colored my-1">
                    <BoxArrowUpRight className="w-5" />
                  </a>]}
                  bgImageSrc={'/images/league_stats_tracker.png'}
                />
                <div className="text-body text-center w-full align-self-end my-2 md:my-5">
                  <a href="https://github.com/richard-paredes/" target="_blank" className="btn-colored">Check out my GitHub</a>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="flex flex-col py-20 w-full md:w-5/6 mx-auto my-20">
            <div className="rounded-lg flex flex-col my-auto text-grayscaled md:w-2/3">
              <p className="text-xl md:text-2xl special-text-colored mb-5 md:mb-10">
                let's talk
              </p>
              <div className="">
                <p className="text-body my-4 md:my-10">
                  So, you've got to know a bit about me. Let me get to know you! I enjoy talking about virtually anything, especially tech-related goodies. If you have a project you want me to help with, reach out to me and I'll get back to you as soon as possible.
              </p>
                <div className="text-body w-full align-self-end my-2 md:my-5">
                  <a href="mailto:richard.o.paredes@gmail.com" className="btn-colored">Contact me</a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full flex flex-col justify-center items-center text-center text-xs text-grayscaled">
          <a href="https://github.com/richard-paredes/richardparedes" target="_blank" className="p-4 hover-text-colored">Developed with lots of <Heart className="inline" /> by yours truly.</a>
          <CatFact />
        </footer>
      </div>
    </div>
  )
}

export default Home;