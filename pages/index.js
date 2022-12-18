import Head from 'next/head'
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import Image from "next/image";
import profile from "../public/profile.jpg"
import { useState } from 'react';

import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head className='bg-white dark:bg-gray-800 h-screen w-screen'>
        <title>Jan Arvik Portfolio</title>
        <meta name="description" content="very cool and swag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white dark:bg-gray-800 h-screen w-screen'>
        <section className='bg-white dark:bg-gray-800'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='font-courierBold text-xl text-black dark:text-white'>
              <Link className='hover:text-gray-500 sm: text-sm' href="/">JanArvik: ~$ ls homepage</Link>
            </h1>
            <ul className='flex items-center'>
              <li>
                <WiMoonAltThirdQuarter onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl dark:text-white' />
              </li>
              <li><Link className='hover:bg-slate-700 font-courier bg-slate-500 text-white px-4
              py-2 rounded-md ml-8 dark:bg-slate-900 dark:hover:bg-slate-600' href="resume">Resume</Link></li>
            </ul>
          </nav>
          <div className='font-courier text-start max-w-md m-auto'>
            <div className='flex justify-center'>
              <div className='py-12'>
                <h2 className='text-3xl text-green-900 font-medium dark:text-green-300'>Jan Arvik</h2>
                <h3 className='text-xl text-black dark:text-white'>Student and Developer</h3>
              </div>
              <Image src={profile} className='w-28 h-28 rounded-full overflow-hidden border-4 my-4' />
            </div>
            <p className='text-start text-sm text-gray-800 dark:text-slate-300 px-2'>
              Hi, my name is Jan Arvik. I'm a computer science student at Virginia Tech and a developer
              in my spare time. This is the website I built in a weekend from the ground up. I enjoy programming
              in C and Java, with skills in Python, JavaScript, JavaScript Frameworks, Assembly, and others. I love
              software development, it is my passion and one that I am looking to make into a career.
            </p>
          </div>
          <div className='text-3xl flex justify-center text-gray-600 gap-16 py-3 dark:text-white'>
            <a href="https://www.linkedin.com/in/jantarvik">
              <AiOutlineLinkedin className='hover:scale-110' />
            </a>
            <a href="https://github.com/Skumbl">
              <AiOutlineGithub className='hover:scale-110' />
            </a>
            <a href="mailto: janarvik01@vt.edu">
              <AiOutlineMail className='hover:scale-110' />
            </a>
          </div>
        </section>

        {/*basic work experiance, make this better at some point*/}
        <section className="bg-white dark:bg-gray-800 font-courierBold">
          <div className=' text-md max-w-md m-auto px-2 text-black dark:text-white'>
            <h3 className='text-lg'>work experience</h3>

            <div className='grid grid-cols-4 text-sm font-courier text-start'>
              <div className='col-span-1 py-1'>2022</div>
              <div className='col-span-3 py-1'> <span className='text-gray-500'>ID Tech</span>
                <p>instructed highschoolers in JavaScript, C#, and taught object-oriented programming</p>
              </div>
              <div className='col-span-1 py-1'>2020</div>
              <div className='col-span-3 py-1'> <span className='text-gray-500'>AWS</span>
                <p>maintained and repaired AWS server infrastructure, performed hardware troubleshooting and diagnostics</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 font-courier pt-4">
          <div className='flex justify-center'>
            <Link className='hover:bg-slate-700 font-courier bg-slate-500 text-white px-4
              py-2 rounded-md dark:bg-slate-900 dark:hover:bg-slate-600' href="projects">Personal Projects</Link>
          </div>
        </section>

        {/* this fixes the weird part at the bottom of the page 🤷‍♂️ */}
        <section>
          <div className='py-10 bg-white dark:bg-gray-800'>
          </div>
        </section>
      </main>
    </div>
  )
}