import Head from "next/head";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { useContext, useState } from "react";
import Link from "next/link";
import { DarkModeContext } from "../components/context";

export default function Home() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head className="w-screen h-screen bg-white dark:bg-gray-800">
        <title>Jan Arvik Portfolio</title>
        <meta name="description" content="Professional Code Enjoyer" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="w-screen h-screen bg-white dark:bg-gray-800">
        <section className="bg-white dark:bg-gray-800">
          <nav className="justify-between p-2 mb-4 sm:max-2xl:p-10 sm:max-2xl:mb-10 sm:max-2xl:flex">
            <h1 className="text-xl text-black font-courierBold dark:text-white">
              <Link
                className="flex justify-center mb-5 hover:text-gray-500 sm:max-2xl:m-auto"
                href="/"
              >
                Jan_Arvik: ~$ ls homepage
              </Link>
            </h1>

            <ul className="flex items-center justify-center">
              <li>
                <WiMoonAltThirdQuarter
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-2xl cursor-pointer dark:text-white"
                />
              </li>
              <li>
                <Link
                  className="px-4 py-2 ml-8 text-white rounded-md hover:bg-slate-700 font-courier bg-slate-500 dark:bg-slate-900 dark:hover:bg-slate-600"
                  href="resume"
                >
                  cd ./Resume
                </Link>
              </li>
            </ul>
          </nav>

          <div className="max-w-md m-auto font-courier text-start">
            <div className="flex justify-center">
              <div className="py-12">
                <h2 className="text-3xl font-medium text-green-700 dark:text-green-300">
                  Jan Arvik
                </h2>
                <h3 className="text-xl text-black dark:text-white">
                  Student and Developer
                </h3>
              </div>
              <Image
                src={profile}
                className="my-4 overflow-hidden border-4 rounded-full w-28 h-28"
              />
            </div>
            <p className="px-2 text-sm text-gray-800 text-start dark:text-slate-300">
              Hi, my name is Jan Arvik. I'm a computer science student at
              Virginia Tech and a developer in my spare time. This is the
              website I built in a weekend from the ground up. I enjoy
              programming in C and Java, with skills in Python, JavaScript,
              JavaScript Frameworks, Assembly, and others. I love software
              development, it is my passion and one that I am looking to make
              into a career.
            </p>
          </div>
          <div className="flex justify-center gap-16 py-3 text-3xl text-gray-600 dark:text-white">
            <a href="https://www.linkedin.com/in/jantarvik">
              <AiOutlineLinkedin className="hover:scale-110" />
            </a>
            <a href="https://github.com/Skumbl">
              <AiOutlineGithub className="hover:scale-110" />
            </a>
            <a href="mailto: janarvik01@vt.edu">
              <AiOutlineMail className="hover:scale-110" />
            </a>
          </div>
        </section>

                <section className="bg-white dark:bg-gray-800 font-courier pt-4">
                    <div className='flex justify-center'>
                        <Link className='hover:bg-slate-700 font-courier bg-slate-500 text-white px-4
              py-2 rounded-md dark:bg-slate-900 dark:hover:bg-slate-600' href="projects">cd ./Personal_Projects</Link>
                    </div>
                </section>

                {/* <section className="bg-white dark:bg-gray-800 font-courier pt-4">
                    <div className='flex justify-center'>
                        <Link className='hover:bg-slate-700 font-courier bg-slate-500 text-white px-4
              py-2 rounded-md dark:bg-slate-900 dark:hover:bg-slate-600' href="hci">cd ./HCI_Project</Link>
                    </div>
                </section> */}

        {/* this fixes the weird part at the bottom of the page 🤷‍♂️ */}
        <section>
          <div className="py-10 bg-white dark:bg-gray-800"></div>
        </section>
      </main>
    </div>
  );
}
