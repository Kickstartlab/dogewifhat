import React, { useEffect } from 'react'
import star from '../assets/star.gif';
import logo from '../assets/logo.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import dextool from '../assets/dextool.png';
import img_1 from '../assets/img_1.png';
import img_2 from '../assets/img_2.png';
import img_3 from '../assets/img_3.png';
import img_4 from '../assets/img_4.png';
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import team_1 from '../assets/team_1.png';
import team_2 from '../assets/team_2.png';
import roadmap_1 from '../assets/roadmap_1.png';
import roadmap_2 from '../assets/roadmap_2.png';
import roadmap_3 from '../assets/roadmap_3.png';
import roadmap_4 from '../assets/roadmap_4.png';

import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 500,
            once: false,
            easing: 'ease',
        });
        Aos.refresh();
    }, [])

    return (
        <div className="overflow-hidden font-nanum text-white-100">

            {/* top section */}

            <div className='py-3 text-center bg-yellow-100 md:text-3xl text-base'>
                CA: BLF27NgaNYRJzqG58u539BiN7KFkKVoTdqmoT3DKg8w1
            </div>

            <div className="lg:px-20 px-5 lg:py-20 py-6 bg-top lg:h-screen">
                <div className='container mx-auto'>
                    <div className="text-center font-slackey space-y-8 text-yellow-100 flex flex-col mx-auto lg:w-9/12">
                        <h1 data-aos='fade-up' className='font-extrabold text-outline md:text-8xl text-4xl'>DOGEWIFHAT</h1>

                        <p data-aos='fade-down' className='font-bold text-outline md:text-4xl text-2xl leading-loosed tracking-wide mb-6'>
                            Are you tired of plain old DOGEs? Well, say hello to the most dapper DOGE in town - DOGE WIF HAT! 🎩🐕
                        </p>

                        <div className='flex flex-wrap items-center justify-center gap-6'>
                            <a href='https://docs.dogewifhat.tech/' className=''>
                                <button className='bg-yellow-100 border-2 border-black-100
                             text-black-100 px-8 py-2 text-xl tracking-wider font-semibold rounded-lg duration-150 hover:scale-110'>
                                    Whitepaper
                                </button>
                            </a>

                            <a href='https://dexscreener.com/solana/9j15uy8eyp1vcvp9jkxqj1osr9oqt91nhhk3uz2jb4hp' className=''>
                                <button className='bg-yellow-100 border-2 border-black-100
                             text-black-100 px-8 py-2 text-xl tracking-wider font-semibold rounded-lg duration-150 hover:scale-110'>
                                   Chart
                                </button>
                            </a>
                        </div>

                    </div>

                    <div className='lg:absolute right-0 lg:-mt-24 flex mx-auto'>
                        <iframe src="https://giphy.com/embed/1GAErYo91X5tejHofL" width="350" height="426" frameBorder="0" className="giphy-embed"></iframe>
                    </div>
                </div>
            </div>

            {/* about us section */}

            <div id='about' className="px-5 bg-about bg-black-100">
                <div className='container mx-auto'>

                    <a href='https://ibb.co/mhvNhWK'>
                        <div className='flex mx-auto items-center justify-center'>
                            <img src={logo} alt='logo' className='lg:w-5/12 lg:absolute lg:ml-2 lg:mt-20'></img>
                        </div>
                    </a>


                    <div className="lg:flex block justify-between gap-x-8 items-center lg:mt-72 mt-6 lg:space-y-0 space-y-8">
                        <div className=' lg:w-4/12'>
                            <div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}>
                                <iframe
                                    src="https://giphy.com/embed/uPJ8nakB0D0B2mJ8mD"
                                    width="100%"
                                    height="100%"
                                    style={{ position: 'absolute' }}
                                    frameBorder="0"
                                    className="giphy-embed"
                                    allowFullScreen
                                />
                            </div>
                            );
                        </div>

                        <div className='text-center lg:w-4/12 space-y-6'>
                            <h2 className='font-extrabold font-slackey text-yellow-100 md:text-7xl text-4xl'>
                                About us
                            </h2>

                            <p className='lg:text-4xl text-3xl text-white-50'>
                                Meet DOGE WIF HAT<br></br>
                                Name: DOGE WIF HAT<br></br>
                                Occupation: Professional Good Boy<br></br>
                                Signature Style: Always sporting the fanciest hat in the dogeverse
                            </p>
                        </div>

                        <div className=' lg:w-4/12'>

                            <div style={{ width: '100%', height: 0, paddingBottom: '56%', position: 'relative' }}>
                                <iframe
                                    src="https://giphy.com/embed/XjXtEuBHulPcQ"
                                    width="100%"
                                    height="100%"
                                    style={{ position: 'absolute' }}
                                    frameBorder="0"
                                    className="giphy-embed lg:rotate-90"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <iframe src="https://giphy.com/embed/HWADtqQ0DuPrXWth7s" width="780" height="550" frameBorder="0" className="giphy-embed flex mx-auto gif-custom"></iframe>
                    </div>

                    <div className="lg:flex block justify-between items-center py-8 lg:space-y-0 space-y-8">
                        <div className=''>
                            <img src={star} alt='star' className='flex mx-auto'></img>
                        </div>

                        <div className='text-center lg:w-4/12 space-y-6'>
                            <h2 className='font-extrabold font-slackey text-yellow-100 md:text-7xl text-4xl uppercase'>
                                tax
                            </h2>

                            <p className='lg:text-8xl text-3xl text-white-50'>
                                TAX: 0/0
                            </p>
                        </div>

                        <div className=''>
                            <img src={star} alt='star' className='flex mx-auto'></img>
                        </div>
                    </div>
                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className="px-5 bg-tokenomics bg-black-100">
                <div className='container mx-auto'>

                    <div>
                        <iframe src="https://giphy.com/embed/RLk99H6PCzkEuxtcre" frameBorder="0" className="giphy-embed flex mx-auto gif-custom-1"></iframe>
                    </div>

                    <div className="text-center lg:space-y-8 space-y-6 flex flex-col mx-auto lg:w-9/12 pb-6">
                        <h3 className='font-extrabold text-outline md:text-8xl text-4xl pt-5 font-slackey text-yellow-100'>
                            TOKENOMICS
                        </h3>

                        <p className='font-bold text-outline md:text-5xl text-3xl'>
                            NAME:  $DOGEWIFHAT
                        </p>

                        <div className='lg:flex items-center justify-center gap-x-24 text-white-100 lg:space-y-0 space-y-6'>
                            <p className='font-bold md:text-5xl text-3xl text-outline'>
                                TICKER: DWIF
                            </p>
                            <p className='font-bold md:text-5xl text-3xl text-outline'>
                                SUPPLY: 100 MILLION
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 bg-about bg-black-100">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between gap-x-8 items-center lg:space-y-0 space-y-8">
                        <div className=' lg:w-4/12'>
                            <img src={img_1} alt='doge' className='flex mx-auto'></img>
                        </div>

                        <div className='text-center lg:w-4/12 space-y-6'>
                            <p className='font-extrabold text-outline font-slackey text-yellow-100 md:text-3xl text-2xl'>
                                "When Elon Musk gave me a hat, I suddenly became the coolest dog in the crypto world, making every other pup jealous!"
                            </p>

                            <div className='flex items-center justify-center gap-x-8'>
                                <img src={img_2} alt='doge' className='lg:w-60 w-40'></img>
                                <img src={img_3} alt='doge' className='lg:w-60 w-40'></img>
                            </div>
                        </div>

                        <div className=' lg:w-4/12'>
                            <img src={img_4} alt='doge' className='flex mx-auto'></img>
                        </div>
                    </div>

                </div>
            </div>

            {/* roadmap section */}

            <div className="px-5 bg-about">
                <div className='container mx-auto'>
                    <div className='lg:py-20 py-6'>
                        <h3 className='font-extrabold text-outline md:text-7xl text-4xl pt-5 font-slackey text-yellow-100 text-center lg:mb-16 mb-8'>
                            ROADMAP
                        </h3>

                        <img src={roadmap_1} alt='' className='absolute ml-32 mt-12 lg:block hidden'></img>

                        <div className='lg:flex items-center justify-center gap-8'>
                            <div className='space-y-6 lg:w-1/3'>
                                <div className='border-4 border-black-100 rounded-xl px-3 py-6 text-black-100 bg-yellow-100'>
                                    <p className='md:text-xl text-lg font-slackey'>
                                        <span className='text-2xl'>Q2 2024:</span> Launch official DOGEWIFHAT merchandise store; initiate first meme contest.
                                    </p>
                                </div>

                                <div className='border-4 border-black-100 rounded-xl px-3 py-6 text-black-100 bg-yellow-100'>
                                    <p className='md:text-xl text-lg font-slackey'>
                                        <span className='text-2xl'>Q3 2024:</span>  Release initial series of DOGEWIFHAT NFTs with various hat designs
                                    </p>
                                </div>
                            </div>

                            <img src={roadmap_3} alt='' className='absolute right-32 mt-44 rotate-12 translate-y-1 lg:block hidden'></img>

                            <div className='border-4 border-black-100 rounded-xl px-3 py-6 text-black-100 bg-yellow-100 lg:w-1/3 lg:mt-0 mt-8'>
                                <p className='md:text-xl text-lg font-slackey'>
                                    <span className='text-2xl'>Q4 2024:</span> Introduce DOGEWIFHAT into select decentralized applications.
                                </p>
                            </div>

                            <img src={roadmap_2} alt='' className='absolute -ml-44 mt-64 translate-y-3 lg:block hidden'></img>

                        </div>

                        <div className='lg:flex items-center justify-center gap-8 mt-6'>
                            <div className='lg:w-1/2'>
                            </div>

                            <div className='border-4 border-black-100 rounded-xl px-3 py-6 text-black-100 bg-yellow-100 lg:w-1/3'>
                                <p className='md:text-xl text-lg font-slackey'>
                                    <span className='text-2xl'>2025 and Beyond</span> Continue developing new features, community events, and partnerships.
                                </p>
                            </div>
                        </div>

                        <img src={roadmap_4} alt='' className='absolute right-1/4 translate-y-1 lg:block hidden'></img>

                        <div className='border-4 border-black-100 rounded-xl px-3 py-6 text-black-100 bg-yellow-100 lg:w-1/3 flex mx-auto mt-8'>
                            <p className='md:text-xl text-lg font-slackey'>
                                <span className='text-2xl'>Overall:</span> Cultivate a movement celebrating humor in finance and life; ensure DOGEWIFHAT remains a leading memecoin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* partner section */}

            <div className="px-5 bg-about bg-black-100">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between gap-x-8 items-center lg:space-y-0 space-y-8">
                        <div className=' lg:w-4/12'>
                            <img src={star} alt='star' className='flex mx-auto lg:w-56'></img>
                        </div>

                        <div className='text-center lg:w-4/12 space-y-6'>
                            <p className='font-extrabold text-outline font-slackey text-yellow-100 md:text-7xl text-4xl'>
                                Partners
                            </p>

                            <div className='flex flex-wrap items-center justify-center gap-8'>
                                <a href='https://www.pinksale.finance/solana/launchpad/4CW3HY27xNF18yaqEoZDyxuiFMT3KUQpPprFqxwdQFaL'> <img src={p_1} alt='' className=''></img>
                                </a>
                                <a href='https://www.dexview.com/solana/BLF27NgaNYRJzqG58u539BiN7KFkKVoTdqmoT3DKg8w1'>
                                    <img src={p_2} alt='' className=''></img>
                                </a>

                                <a href='https://raydium.io/swap/?inputCurrency=sol&outputCurrency=BLF27NgaNYRJzqG58u539BiN7KFkKVoTdqmoT3DKg8w1&inputAmount=1&outputAmount=212893.169863&fixed=in'>
                                    <img src={p_3} alt='' className=''></img>
                                </a>

                            </div>

                            <a href='https://solscan.io/token/BLF27NgaNYRJzqG58u539BiN7KFkKVoTdqmoT3DKg8w1#holders'>
                                <img src={p_4} alt='' className='flex mx-auto pt-5'></img>
                            </a>

                        </div>

                        <div className=' lg:w-4/12'>
                            <img src={star} alt='star' className='flex mx-auto lg:w-56'></img>
                        </div>
                    </div>
                </div>
            </div>

            {/* team */}

            <div className="lg:py-16 py-5 lg:px-20 px-5 container mx-auto bg-top text-yellow-100">

                <h3 className='md:text-6xl text-5xl font-semibold font-slackey tracking-widest text-center lg:mb-20 mb-12 uppercase text-outline'>
                    Team
                </h3>

                <div className='lg:flex items-center justify-center gap-28 lg:space-y-0 space-y-8'>
                    <div className='lg:flex items-center gap-8'>
                        <img src={team_1} alt='' className='mb-5 lg:block flex mx-auto'></img>

                        <div className='space-y-4 lg:text-left text-center'>
                            <h3 className='md:text-3xl text-xl font-semibold font-slackey tracking-widest uppercase text-outline'>
                                Owner
                            </h3>
                            <p className='lg:text-2xl text-xl text-black-100 text-outline pb-6'>@Apeking1337</p>
                            <a href='https://t.me/Apeking1337' className=''><img src={telegram} alt='' className='lg:block flex mx-auto w-20'></img></a>
                        </div>
                    </div>

                    <div className='lg:flex items-center gap-8'>
                        <img src={team_2} alt='' className='mb-5 lg:block flex mx-auto'></img>

                        <div className='space-y-4 lg:text-left text-center'>
                            <h3 className='md:text-3xl text-xl font-semibold font-slackey tracking-widest uppercase text-outline'>
                                Core
                            </h3>
                            <p className='lg:text-2xl text-xl text-black-100 text-outline pb-6'>@gogeta_Sol</p>
                            <a href='https://t.me/Gogeta_Sol' className=''><img src={telegram} alt='' className='lg:block flex mx-auto w-20'></img></a>
                        </div>
                    </div>
                </div>

            </div>

            {/* connect us section */}

            <div id='connect' className="px-5 bg-about bg-black-100">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between gap-x-8 items-center lg:space-y-0 space-y-8">
                        <div className=' lg:w-4/12'>
                            <div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}>
                                <iframe
                                    src="https://giphy.com/embed/t1ib5y50haRIcL0nQp"
                                    width="100%"
                                    height="100%"
                                    style={{ position: 'absolute' }}
                                    frameBorder="0"
                                    className="giphy-embed"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className='text-center lg:w-4/12 space-y-6'>
                            <h2 className='font-extrabold text-outline font-slackey text-yellow-100 md:text-7xl text-4xl'>
                                Connect
                                with us
                            </h2>

                            <div className='flex items-center justify-center gap-x-8'>
                                <a href='https://x.com/dogwif_hat'><img src={twitter} alt='twitter'></img></a>
                                <a href='https://t.me/doge_wifHat'><img src={telegram} alt='telegram'></img></a>
                                <a href='https://www.dextools.io/app/en/solana/pair-explorer/9j15uy8eYP1Vcvp9JKXqJ1oSr9oQT91NhhK3uz2jB4HP?t=1712436694223'><img src={dextool} alt='dextools'></img></a>
                            </div>
                        </div>

                        <div className=' lg:w-4/12'>
                            <div style={{ width: '100%', height: 0, paddingBottom: '100%', position: 'relative' }}>
                                <iframe
                                    src="https://giphy.com/embed/kEhbISTEd0zSXZOel7"
                                    width="100%"
                                    height="100%"
                                    style={{ position: 'absolute' }}
                                    frameBorder="0"
                                    className="giphy-embed"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>

                    <p className='text-center md:text-3xl text-xl py-3'>Copyright © 2024 DOGEWIFHAT. All rights reserved.</p>
                    <p className='text-center md:text-3xl text-xl py-3'>Email: <a href='mailto:support@dogewifhat.tech' className='hover:underline'>support@dogewifhat.tech</a></p>

                    <div className="lg:flex block justify-between items-center lg:space-y-0 space-y-8">

                        <div className=''>
                            <img src={star} alt='star' className='lg:w-64 w-44 flex mx-auto'></img>
                        </div>

                        <div>
                            <iframe src="https://giphy.com/embed/oNFP9kltPi7fp8TUAV" frameBorder="0" className="giphy-embed flex mx-auto gif-custom"></iframe>
                        </div>

                        <div className=''>
                            <img src={star} alt='star' className='lg:w-64 w-44 flex mx-auto'></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
