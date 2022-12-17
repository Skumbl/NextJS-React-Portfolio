import Head from 'next/head'
import {WiMoonAltThirdQuarter} from 'react-icons/wi';
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';


export default function Home() {
    const [darkMode, setDarkMode] = useState(true);
    return (
    <div className={darkMode ? "dark" : ""}>
    <Head>
        <title>Jan Arvik Resume</title>
        <meta name="description" content="very cool and swag" />
        <link rel="icon" href="/favicon.ico" />
    </Head>


    <main className='bg-white dark:bg-gray-800 h-screen w-screen'> 
    <section className='bg-white dark:bg-gray-800'>
      <nav className='p-10 mb-12 flex justify-between'>
        <h1 className='font-courierBold text-xl text-black dark:text-white'>
          <Link className='hover:text-gray-500' href="/">JanArvik: ~$ cd .. </Link>
        </h1>
        <ul className='flex items-center'>
          <li>
            <WiMoonAltThirdQuarter onClick={() => setDarkMode(!darkMode)} 
            className='cursor-pointer text-2xl dark:text-white'/>
          </li>
        </ul>
      </nav>
      <div className='text-md max-w-md m-auto px-2 text-black dark:text-white'>
        <h1 className='font-courier text-center justify-center'>Site Under Construction</h1>
      </div>
    </section>
    </main>
    </div>
    )
}