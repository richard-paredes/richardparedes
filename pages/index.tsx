import Head from 'next/head'
import Image from 'next/image';
import React from 'react'
import { Sidebar } from '../components/Layout/Sidebar';
import { Navbar } from '../components/Layout/Navbar';

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col font-mono theme-bg transition overflow-auto">
      <Navbar />
      <Sidebar />
      <div className="w-3/4 m-auto flex align-center ">
        <main className="w-full">
          <section id="hello-world" className="w-full flex py-20 xl:py-32 min-h-screen md:w-3/4">
            <div className="rounded-lg flex flex-col my-auto text-grayscaled">
              <p className="header text-colored mb-10">
                Hello, world!
              </p>
              <h1 className="text-5xl text-black dark:text-white my-5">
                I'm <span className="font-bold">Richard Paredes</span>.
              </h1>
              <p className="text-4xl">
                ^~^
              </p>
              <p className="text-md my-10">
                I'm a software engineer situated in Houston, Texas who loves to build applications for people. At the moment, I'm a full-stack web developer at <a href="https://www.hcss.com/" target="_blank" className="hyperlink">HCSS</a>, creating robust and scalable software for the construction industry.
              </p>
              <div className="text-lg w-full align-self-end my-5">
                <a href="mailto:richard.o.paredes@gmail.com" className="btn-colored">Contact me</a>
              </div>
            </div>
          </section>
          <section id="about" className="flex py-20 min-h-screen w-full md:w-5/6 my-auto mx-auto">
            <div className="rounded-lg w-full flex flex-col md:flex-row my-auto overflow-auto sm:mx-auto md:mx-0 md:w-full">
              <div className="z-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 my-auto bg-gray-200 dark:bg-gray-800">
                <Image alt="Richard Paredes" src="/images/me.jpg" width="225px" height="225px" layout="responsive" className="rounded-lg" />
              </div>
              <div className="my-5 md:my-0 md:ml-10 flex flex-col container px-4 text-grayscaled">
                <h2 className="header special-text-colored">
                  About me
                </h2>
                <p className="text-md mb-10">
                  Hi-ya!
                  My name is Richard and I'm passionate about developing web and XR applications. My journey into software development began back when I was a wee lad trying to install mods for my favorite game, <a href="https://thewitcher.com/en/witcher3" target="_blank" className="hyperlink">The Witcher 3: Wild Hunt</a>. After many manual script merge attempts and corrupted game saves, I realized I really enjoy digging deep and working with computers to make magical things happen.
                </p>
                <p className="text-md mb-10">
                  Since then, I've expanded my knowledge through various avenues: a <a href="https://redlabs.uh.edu" target="_blank" className="hyperlink">start-up accelerator program for students</a>, <a href="https://cougarcs.com/" target="_blank" className="hyperlink">student organizations</a>, and, of course, <a href="https://github.com/richard-paredes/" target="_blank" className="hyperlink">personal projects</a>. Right now, I'm honing my skills by developing RESTful APIs and friendly interfaces for complex user management over at <a href="https://www.hcss.com/" target="_blank" className="hyperlink">HCSS</a>.
                </p>
                <p className="text-md mb-5">
                  Here are some technologies I've picked up along the way:
                </p>
                <div className="flex text-black dark:text-white flex-wrap rounded-md">
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">Git</span>
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">C#</span>
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">TypeScript</span>
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">Python</span>
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">ASP.NET</span>
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">Node.JS</span>
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">React</span>
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">Unity</span>
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">Microsoft Azure</span>
                  <span className="p-0 px-2 rounded-md text-sm uppercase border-l-2 border-r-2 border-gray-700 dark:border-gray-400 font-semibold m-2">Next.JS</span>
                </div>
              </div>
            </div>
          </section>
          <section id="experience" className="flex flex-col py-20 min-h-screen w-full my-auto mx-auto">
            <div className="mt-auto text-grayscaled">
              <h2 className="header special-text-colored">
                My experience
                </h2>
            </div>
            <div className="container">
              <div
                className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
              >
                {/* <!-- left --> */}
                <div className="flex flex-row-reverse md:contents">
                  <div
                    className="border-l-4 border-colored col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                  >
                    <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p className="leading-tight text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                      quaerat?
                </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 special-bg-colored pointer-events-none"></div>
                    </div>
                    {/* <div
                      className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full border-l-4 border-colored shadow"
                    ></div> */}
                  </div>
                </div>
                {/* <!-- right --> */}
                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 special-bg-colored pointer-events-none"></div>
                    </div>
                    {/* <div
                      className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full border-l-4 border-colored shadow"
                    ></div> */}
                  </div>
                  <div
                    className="border-l-4 border-colored col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                  >
                    <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p className="leading-tight text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, facilis.
                </p>
                  </div>
                </div>
                {/* <!-- left --> */}
                <div className="flex flex-row-reverse md:contents">
                  <div
                    className="border-l-4 border-colored col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                  >
                    <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p className="leading-tight text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                      quaerat?
                </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 special-bg-colored pointer-events-none"></div>
                    </div>
                    {/* <div
                      className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full border-l-4 border-colored shadow"
                    ></div> */}
                  </div>
                </div>
                {/* <!-- left --> */}
                <div className="flex flex-row-reverse md:contents">
                  <div
                    className="border-l-4 border-colored col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                  >
                    <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p className="leading-tight text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                      quaerat?
                </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 special-bg-colored pointer-events-none"></div>
                    </div>
                    {/* <div
                      className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full border-l-4 border-colored shadow"
                    ></div> */}
                  </div>
                </div>
                {/* <!-- right --> */}
                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 special-bg-colored pointer-events-none"></div>
                    </div>
                    {/* <div
                      className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full border-l-4 border-colored shadow"
                    ></div> */}
                  </div>
                  <div
                    className="border-l-4 border-colored col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                  >
                    <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p className="leading-tight text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, facilis.
                </p>
                  </div>
                </div>
              </div>
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