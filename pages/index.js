import Head from 'next/head'
import {WiMoonAltThirdQuarter} from 'react-icons/wi';
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jan Arvik Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white'> 
        <section className="bg-white">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className='font-courier text-xl'>&gt; Jan Arvik</h1>
            <ul className='flex items-center'>
              <li>
                <WiMoonAltThirdQuarter className='cursor-pointer text-2xl'/>
              </li>
              <li><a className='font-courier bg-gradient-to-r from-slate-500 to-gray-500
               text-white px-4
              py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='font-courier text-center p-1'>
            <h2 className='text-2xl'>Jan Arvik</h2>
            <h3>Student and Developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <AiOutlineLinkedin/>
          <AiOutlineGithub/>
          <AiOutlineMail/>
          <div>

          </div>
        </section>
      </main>
    </div>
  )
}