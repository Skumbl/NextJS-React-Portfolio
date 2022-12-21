import Head from 'next/head'
import { WiMoonAltThirdQuarter } from 'react-icons/wi';

import { AiOutlineTeam } from 'react-icons/ai';
import { GoFileBinary } from 'react-icons/go';
import { FaMugHot, FaPython } from 'react-icons/fa';
import { TbBrandPython } from 'react-icons/tb';
import { BiBug } from 'react-icons/bi';
import { SiJavascript, SiTypescript, SiRust, SiAutodesk, SiUnity } from 'react-icons/si'

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

                {/*reused code from front page as place holder*/}
                <section className="bg-white dark:bg-gray-800 font-courierBold pb-4">
                    <div className=' text-md max-w-md m-auto px-2 text-black dark:text-white'>
                        <h3 className='text-lg'>professional work experience: </h3>

                        {/* grid system used for work experiance */}
                        <div className='grid grid-cols-4 text-sm font-courier text-start'>

                            <div className='col-span-1 py-1'>current</div>
                            <div className='col-span-3 py-1'> <span className='text-green-900 dark:text-green-300'>Private CS Tutor</span>
                                <p>tutored computer science students at Virginia Tech in advanced data structures and algorithms
                                    as well as in low-level computer organization
                                </p>
                            </div>

                            <div className='col-span-1 py-1'>2022</div>
                            <div className='col-span-3 py-1'> <span className='text-green-900 dark:text-green-300'>ID Tech</span>
                                <p>instructed highschoolers in JavaScript, C#, and taught object-oriented programming</p>
                            </div>

                            <div className='col-span-1 py-1'>2020</div>
                            <div className='col-span-3 py-1'> <span className='text-green-900 dark:text-green-300'>AWS</span>
                                <p>maintained and repaired AWS server infrastructure, performed hardware troubleshooting and diagnostics</p>
                            </div>

                            <div className='col-span-1 py-1'>2019</div>
                            <div className='col-span-3 py-1'> <span className='text-green-900 dark:text-green-300'>Code Ninjas</span>
                                <p>tutored kids in basic JavaScript and the Unity engine to make games</p>
                            </div>

                        </div>
                    </div>
                </section >

                {/* skills section */}
                <section className="bg-white dark:bg-gray-800 font-courierBold pb-4">
                    <div className='text-md max-w-md m-auto px-2 text-black dark:text-white'>
                        <h3 className='text-lg'>skills: </h3>

                        <div className='grid grid-cols-2 text-md font-courier'>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105' >
                                <p>C</p>
                                <GoFileBinary className='text-green-900 dark:text-green-300' />
                            </div>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105'>
                                <p>Java</p>
                                <FaMugHot className='text-green-900 dark:text-green-300' />
                            </div>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105'>
                                <p>JavaScript</p>
                                <SiJavascript className='text-green-900 dark:text-green-300' />
                            </div>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105'>
                                <p>TypeScript</p>
                                <SiTypescript className='text-green-900 dark:text-green-300' />
                            </div>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105'>
                                <p>Rust</p>
                                <SiRust className='text-green-900 dark:text-green-300' />
                            </div>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105'>
                                <p>Python</p>
                                <TbBrandPython className='text-green-900 dark:text-green-300' />
                            </div>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105'>
                                <p>App Debugging</p>
                                <BiBug className='text-green-900 dark:text-green-300' />
                            </div>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105'>
                                <p>Team Leadership</p>
                                <AiOutlineTeam className='text-green-900 dark:text-green-300' />
                            </div>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105'>
                                <p>CAD</p>
                                <SiAutodesk className='text-green-900 dark:text-green-300' />
                            </div>

                            <div className='p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg text-center hover:scale-105'>
                                <p>Unity</p>
                                <SiUnity className='text-green-900 dark:text-green-300' />

                            </div>
                        </div>
                    </div>

                </section>

                <section className="bg-white dark:bg-gray-800 font-courier">
                    <div className=' text-md max-w-md m-auto px-2 text-black dark:text-white'>
                        <h3 className='text-lg font-courierBold'>education:</h3>
                        <div className='py-1'><span className='text-green-900 dark:text-green-300'>Virginia Tech</span> - Fall 2023</div>
                        <div className='py-1' >Bachelor's in Computer Science</div>
                        <div className='py-1'><span className='text-green-900 dark:text-green-300'>NOVA</span> - Spring 2020</div>
                        <div className='py-1'>Associates in Computer Science</div>
                    </div>
                </section>


                <section>
                    <div className='py-10 bg-white dark:bg-gray-800'>
                    </div>
                </section>

                {/* this is my personal bio for my resume 
                <section className="bg-white dark:bg-gray-800 font-courierBold">
                    <div className=' text-md max-w-md m-auto px-2 text-black dark:text-white'>
                        <h3 className='text-lg'>about me:</h3>
                    </div>
                    <div className='font-courier text-sm max-w-md m-auto px-2 text-black dark:text-white'>
                        <p>
                            Hello, my name is Jan Arvik. I am currently a 22-year-old senior at Virginia Tech earning a degree in computer science.
                            I love working with computers, as I started learning how to program and build computers at the age of 14 and which has become a
                            lifelong passion. I directed a team in cyber patriot in high school and was hired at AWS as a service technician at 19. <br />
                            I enjoy learning new programming languages and frameworks in my free time. <br />
                            My favorite languages to write in are C, TypeScript, and Rust. <br />
                            I am multi-faceted and can be placed in any development team regardless of task and adapt to their needs.
                            I am a hard worker that is focused on results and am willing to bring that energy to any company that I am lucky enough to
                            grow with.
                        </p>
                    </div>
                </section>
                */}
            </main>
        </div>
    )
}