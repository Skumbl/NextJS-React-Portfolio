import Head from 'next/head';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import phaseOne from "../public/Phase1.jpg"

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

            <main className='bg-white dark:bg-gray-800'>
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
                        <h1 className='font-courier text-3xl text-left mb-4 text-green-700 dark:text-green-300'>Right-to-Repair Project</h1>
                    </div>
                </section>

                <section className='max-w-lg m-auto px-2 bg-white dark:bg-gray-800 font-courierBold text-center'>
                    <div className='text-sm text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>
                        <h1 className='text-xl'>
                            Phase 1
                        </h1>
                        <h3>Analyze</h3>
                        <p>
                        As a team, we spent a considerable amount of time conducting research before continuing forward with the project, and during the majority of the analyzing period engaging in conversations with people to gather their opinions on the topic of right-to-repair and its impact on their lives. We made sure to interview a wide range of people, including casual users of devices and repair technicians, to get a thorough viewpoint on the matter. The discussions provided valuable insights into how right-to-repair policies affected people's ability to repair their own devices, as well as their financial and environmental importance. In addition to interviews, we conducted extensive research by reading articles, papers, and reports to gain a comprehensive understanding of the nuances encircling the right-to-repair movement. Our efforts in interviewing and researching allowed us to approach this important issue from multiple angles, ensuring a well-rounded study.
From the Data collected, we performed contextual analysis. 
                        </p>
                        <p>
                        ====================
                        </p>
                        <p>
This analysis primarily consisted of the team finding Work Access Notes and Work Activity Affinity Diagram. This was to get the base needs of the users, and for the team to understand what kind of solution we wanted to create to inform more people about right-to-repair
                        </p>
                        <p>
                        ====================
                        </p>
                        <Image src={phaseOne} className='w-100 h-100 object-center rounded-md mb-4' />
                        <p>
                        <Link className='hover:bg-slate-700 font-courier bg-slate-500 text-white px-4
                        py-2 rounded-md dark:bg-slate-900 dark:hover:bg-slate-600' href="https://docs.google.com/document/d/1aeuYmnBBoDL2QBWYhTOjE4TmQuMAcjZ_jLfbQNiGXuE/edit?usp=sharing">View Full Report </Link>
                        </p>
                    </div>
                    <div className='text-xl text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>Phase 2</div>
                    <div className='text-xl text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>Phase 3</div>
                </section>
                <section className='pb-9'>

                </section>

            </main>
        </div>
    )
}