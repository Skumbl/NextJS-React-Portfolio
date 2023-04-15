import Head from "next/head";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { useContext, useState } from "react";
import Link from "next/link";
import { DarkModeContext } from "../components/context";
import Image from "next/image";
import phaseOne from "../public/Phase1.jpg";
import phaseTwo from "../public/Phase2.jpg";

export default function project() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jan Arvik Projects</title>
        <meta name="description" content="very cool and swag" />

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

      <main className="bg-white dark:bg-gray-800">
        <section className="bg-white dark:bg-gray-800">
          <nav className="flex justify-between p-10 mb-12">
            <h1 className="text-xl text-black font-courierBold dark:text-white">
              <Link className="hover:text-gray-500" href="/">
                Jan_Arvik: ~$ cd ..{" "}
              </Link>
            </h1>
            <ul className="flex items-center">
              <li>
                <WiMoonAltThirdQuarter
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-2xl cursor-pointer dark:text-white"
                />
              </li>
            </ul>
          </nav>
          <div className="max-w-md px-2 m-auto text-black text-md dark:text-white">
            <h1 className="mb-4 text-3xl text-left text-green-700 font-courier dark:text-green-300">
              Right-to-Repair Project
            </h1>
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
                    <div className='text-sm text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>
                        <h1 className='text-xl'>
                            Phase 2
                        </h1>
                        <h3>Prototype</h3>
                        <p>
                        For the prototyping stage of development, our team started by brainstorming and generating a ton of ideas. We encouraged open and creative discussions, using each team member's unique viewpoints and expertise. Once we narrowed down our ideas, we spent time storyboarding our use case to visualize the user experience to show both physical and emotional use. We also created persona models to better understand the needs and issues of our users. 
                        </p>
                        <p>
                        ====================
                        </p>
                        <p>
                        With a solid understanding of our user, we started to conceptualize the design of our web app, concentrating on usability and functionality. We crafted wireframes that outlined the layout and flow of the app, ensuring a seamless and reflexive user interface. Our iterative approach and combined efforts allowed us to develop a solid design for our web app.
                        </p>
                        <p>
                        ====================
                        </p>
                        <Image src={phaseTwo} className='w-100 h-120 rounded-md mb-8' />
                        <p>
                        <Link className='hover:bg-slate-700 font-courier bg-slate-500 text-white px-4
                        py-2 rounded-md dark:bg-slate-900 dark:hover:bg-slate-600' href="https://docs.google.com/document/d/1tblySbtHv7z-44hKC8TPy0cdL8bQv0OJ2kTQiFMwyR0/edit?usp=sharing">View Full Report </Link>
                        </p>
                    </div>
                    <div className='text-xl text-black dark:text-white p-5 m-2 dark:bg-slate-700 shadow-lg rounded-lg'>Phase 3</div>
                </section>
                <section className='pb-9'>

                </section>

            </main>
        </div>
    )
}