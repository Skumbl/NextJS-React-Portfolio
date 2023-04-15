import Head from "next/head";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { useContext, useState } from "react";
import Link from "next/link";
import { DarkModeContext } from "../components/context";

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

      <main className="w-screen h-screen bg-white dark:bg-gray-800">
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
              Personal Projects
            </h1>
          </div>
        </section>

        <section className="max-w-md px-2 m-auto text-center bg-white dark:bg-gray-800 font-courierBold">
          <div className="p-5 m-2 text-xl text-black rounded-lg shadow-lg dark:text-white dark:bg-slate-700">
            Next-JS Portfolio
          </div>
          <div className="p-5 m-2 text-xl text-black rounded-lg shadow-lg dark:text-white dark:bg-slate-700">
            Assembler
          </div>
          <div className="p-5 m-2 text-xl text-black rounded-lg shadow-lg dark:text-white dark:bg-slate-700">
            Best Fit Memory Manager
          </div>
          <div className="p-5 m-2 text-xl text-black rounded-lg shadow-lg dark:text-white dark:bg-slate-700">
            LRU Buffer Pool
          </div>
          <div className="p-5 m-2 text-xl text-black rounded-lg shadow-lg dark:text-white dark:bg-slate-700">
            Discord DnD Manager
          </div>
        </section>
      </main>
    </div>
  );
}
