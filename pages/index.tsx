import Head from 'next/head'
import Image from 'next/image';
import React from 'react'
import { Sidebar } from '../components/Layout/Sidebar';
import { Navbar } from '../components/Layout/Navbar';

import 'tailwindcss/tailwind.css'

export const Home = (): JSX.Element => {
  return (
    <div className="container relative min-h-screen min-w-full w-screen h-screen max-w-auto bg-white dark:bg-gray-900">  
      <Navbar />
      <Sidebar />
      <main className="flex-1 overflow-y-auto  py-3 px-5 h-full">
        <section>
          <div className="container flex flex-col md:flex-row w-full md:w-1/2 align-center mx-auto rounded-l p-2 justify-evenly">
            <div className="">
              <h2 className="text-xl font-bold text-black dark:text-white">
                Hello, world!
              </h2>
              <p className="text-5xl text-black dark:text-gray-100">
                I'm Richard Paredes.
              </p>
            </div>
          </div>
        </section>
        <section>
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
        </section>
      </main>
    </div>
  )
}

export default Home;