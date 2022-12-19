import Head from 'next/head'
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
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

                {/*header for top of the page*/}
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
                        <h1 className='font-courier text-3xl text-left mb-4 text-green-900 dark:text-green-300'>Resume</h1>
                    </div>
                </section>

                {/* this is my personal bio for my resume */}
                <section className="bg-white dark:bg-gray-800 font-courierBold">
                    <div className=' text-md max-w-md m-auto px-2 text-black dark:text-white'>
                        <h3 className='text-lg'>about me:</h3>
                    </div>
                    <div className='font-courier text-sm max-w-md m-auto px-2 text-black dark:text-white'>
                        <p>you're probilly wondering why hire this shmuck</p>
                    </div>
                </section>

                {/*reused code from front page as place holder*/}
                <section className="bg-white dark:bg-gray-800 font-courierBold">
                    <div className=' text-md max-w-md m-auto px-2 text-black dark:text-white'>
                        <h3 className='text-lg'>professional work experience: </h3>

                        {/* grid system used for work experiance */}
                        <div className='grid grid-cols-4 text-sm font-courier text-start'>

                            <div className='col-span-1 py-1'>current</div>
                            <div className='col-span-3 py-1'> <span className='text-gray-500'>Private CS Tutor</span>
                                <p>tutored computer science students at Virginia Tech in advanced data structures and algorithms
                                    as well as in low-level computer organization
                                </p>
                            </div>

                            <div className='col-span-1 py-1'>2022</div>
                            <div className='col-span-3 py-1'> <span className='text-gray-500'>ID Tech</span>
                                <p>instructed highschoolers in JavaScript, C#, and taught object-oriented programming</p>
                            </div>

                            <div className='col-span-1 py-1'>2020</div>
                            <div className='col-span-3 py-1'> <span className='text-gray-500'>AWS</span>
                                <p>maintained and repaired AWS server infrastructure, performed hardware troubleshooting and diagnostics</p>
                            </div>

                            <div className='col-span-1 py-1'>2019</div>
                            <div className='col-span-3 py-1'> <span className='text-gray-500'>Code Ninjas</span>
                                <p>tutored kids in basic JavaScript and the Unity engine to make games</p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}