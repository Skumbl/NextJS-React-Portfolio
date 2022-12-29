import Head from 'next/head';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import { useState } from 'react';
import Link from 'next/link';

export default function project() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Jan Arvik Projects</title>
                <meta name="description" content="very cool and swag" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <main className='bg-white dark:bg-gray-800 h-screen w-screen'>
                <section className='bg-white dark:bg-gray-800'>
                    <nav className='p-10 mb-12 flex justify-between'>
                        <h1 className='font-courierBold text-xl text-black dark:text-white'>
                            <Link className='hover:text-gray-500' href="/">Jan_Arvik: ~$ cd .. </Link>
                        </h1>
                        <ul className='flex items-center'>
                            <li>
                                <WiMoonAltThirdQuarter onClick={() => setDarkMode(!darkMode)}
                                    className='cursor-pointer text-2xl dark:text-white' />
                            </li>
                        </ul>
                    </nav>
                    <div className='text-md max-w-md m-auto px-2 text-black dark:text-white'>
                        <h1 className='font-courier text-3xl text-left mb-4 text-green-700 dark:text-green-300'>Personal Projects</h1>
                    </div>
                </section>

                <section className='max-w-md m-auto px-2 bg-white dark:bg-gray-800 font-courierBold text-center'>
                    <div className='text-xl text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>Next-JS Portfolio</div>
                    <div className='text-xl text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>Assembler</div>
                    <div className='text-xl text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>Best Fit Memory Manager</div>
                    <div className='text-xl text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>LRU Buffer Pool</div>
                    <div className='text-xl text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>Discord DnD Manager</div>
                </section>

            </main>
        </div>
    )
}