/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import React from 'react'
import Header from '../components/Header'

const About: NextPage = () => {
    const projs = [
        {
            projName: 'Bukalapak-Scraper',
            projLang: 'Python',
            link: 'https://github.com/azka1415/Bukalapak-Scraper',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
        },
        {
            projName: 'fastapi-mongo',
            projLang: 'Python',
            link: 'https://github.com/azka1415/fastapi-mongo',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
        },
        {
            projName: 'quiz-app-react',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/quiz-app-react',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
        },
        {
            projName: 'netflix-clone',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/netflix-clone',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
        },
        {
            projName: 'rest-ts',
            projLang: 'TypeScript',
            link: 'https://github.com/azka1415/rest-ts',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
        },
        {
            projName: 'fast-api',
            projLang: 'Python',
            link: 'https://github.com/azka1415/fast-api',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
        }
    ]
    return (
        <>
            <Header titleName='About' />

            <div className="h-screen flex p-2 mx-auto">

                <div className="block absolute flex-shrink-0 right-[4em] left-[4em] top-[8em] text-center m-auto shadow-xl p-4 bg-slate-200 rounded-lg transition-all ease-in-out md:p-10 md:text-xl lg:relative lg:block lg:p-16 lg:mx-20 lg:text-2xl lg:right-[70em] lg:top-10">
                    <div className='lg:text-start text-center'>

                        <p>I'm <b> Azka Rafif Zaydan </b></p>
                        <p><code>Software Engineer</code> from Jakarta, Indonesia</p>
                    </div>
                    <div className='flex flex-wrap justify-center md:justify-start'>
                        <p className='text-center'>I mainly use</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="python logo" className='hidden md:flex px-1 w-6 md:w-8 lg:w-10' />
                        <p className='md:hidden ml-1'>Python</p>
                        <p> for Back-End</p>
                    </div>
                    <div className='flex flex-wrap justify-center md:justify-start'>
                        <p className='text-center mr-1'>and</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react logo" className='hidden md:flex w-6 px-1 md:w-8 lg:w-10' />
                        <p>React</p>
                        <p className='ml-1'> for Front-End</p>
                    </div>
                </div>
                <div className='absolute block lg:ml-10 flex-shrink-0 right-[4em] left-[4em] top-[20em] my-auto lg:mb-4 lg:absolute lg:right-[5em] lg:left-[40em] lg:top-[8em] lg:block lg:self-end lg:text-left text-center lg:my-auto mx-auto shadow-xl p-4 bg-slate-200 rounded-lg transition-all ease-in-out md:p-10 md:text-xl lg:p-16 lg:mx-20 lg:text-2xl justify-center items-center align-middle w-max lg:justify-start'>
                    <p>My Projects</p>
                    {projs.map(v => (
                        <a key={v.projName} href={v.link} className='flex text-center justify-center align-middle place-items-center lg:justify-start lg:text-left'>
                            <div className='flex flex-shrink-0 w-full justify-center align-middle place-items-center relative bg-gray-900 rounded-lg p-[0.5em] my-2 text-white transition-all hover:shadow-2xl hover:bottom-4 hover:mb-2 hover:bg-white active:border active:border-black hover:text-black lg:hover:shadow-2xl lg:hover:mb-2 lg:hover:bottom-2 lg:hover:left-2 lg:hover:bg-white lg:hover:text-black lg:text-left'>
                                {v.projName}
                                <img src={v.logo} alt={v.projLang} className='w-8 mx-2' />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default About