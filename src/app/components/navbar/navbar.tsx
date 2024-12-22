'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); 

    const handleClick = () => {
        setIsOpen(!isOpen);
        console.log('Is open: ', isOpen)
        !isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    };

    const nothing = () => {
        return
    }

    return (
        <div className="w-full h-full">
            <div className="flex-col content-center items-center w-full border-b-4 border-black">
                <div className="hidden lg:flex justify-center w-full">
                    <nav className="flex flex-row w-full justify-evenly content-center items-center gap-16">
                        <Link className="group w-1/5 font-body text-2xl font-bold text-center transition-all ease-in-out border-black hover:scale-105 select-none" href={'/'}>
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                                E-shop
                            </span>
                        </Link>
                        <Link className="group w-1/5 font-body text-2xl font-bold text-center transition-all ease-in-out border-black hover:scale-105 select-none" href={'/'}>
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                                Naše tvorba
                            </span>
                        </Link>
                        <Link className="flex justify-center items-center w-1/5 min-h-full bg-black" href={'/'}>
                            <Image className="h-full invert transition ease-in hover:scale-90"
                                src="/logo.png"
                                width={144}
                                height={144}
                                alt="Logo"
                            />
                        </Link>
                        <Link className="group w-1/5 font-body text-2xl font-bold text-center transition-all ease-in-out border-black hover:scale-105 select-none" href={'/'}>
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                                Výroba na míru
                            </span>
                        </Link>
                        <Link className="group w-1/5 font-body text-2xl font-bold text-center transition-all ease-in-out border-black hover:scale-105 select-none" href={'/contact'}>
                            <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                                Kontakty
                            </span>
                        </Link>
                    </nav>
                </div>

                <div className="flex lg:hidden flex-row justify-between items-center my-4 ">
                    <Link className="h-full" href={'/'}>
                        <button onClick={isOpen ? handleClick : nothing }>
                            <h1 className="relative font-body font-bold text-3xl select-none left-0 transition-all duration-300 ease-out hover:left-4">Woodpeckers</h1>
                        </button>
                    </Link>
                    <nav className="flex flex-col content-end items-center h-full">
                        <button onClick={handleClick} className="flex flex-col items-end">
                            <span className={`bg-black transition-all duration-300 ease-out h-1 w-8 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                            <span className={`bg-black transition-all duration-300 ease-out h-1 w-8 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
                            <span className={`bg-black transition-all duration-300 ease-out h-1 w-8 rounded-sm ${isOpen ? '-rotate-45 - translate-y-1' : 'translate-y-0.5'}`}></span>
                        </button>
                    </nav>
                </div>
            </div>
            
            <div className={`lg:hidden fixed z-10 w-full h-full bottom-0 top-20 transition-all duration-300 ease-out ${isOpen ? 'left-0 bg-white flex flex-col items-center' : 'w-0 h-0 top-full'}`}>
                <div className="flex flex-col items-center h-full w-full gap-8 mt-16">
                    <div className="flex flex-col h-full w-2/3">
                        <Link href={'/'}>
                            <button onClick={handleClick}>
                                <div className="flex flex-row gap-4">
                                    {/* <p className="relative z-11 text-black font-body font-bold text-5xl md:text-6xl text-nowrap">-</p> */}
                                    <p className="relative z-11 text-black font-body font-bold text-5xl md:text-6xl text-nowrap w-full left-0 transition-all duration-300 ease-out hover:left-4"> E-shop</p>
                                </div>
                            </button>
                        </Link>
                        <Link href={'/'}>
                            <button onClick={handleClick}>
                                <div className="flex flex-row gap-4">
                                    {/* <p className="relative z-11 text-black font-body font-bold text-5xl md:text-6xl text-nowrap">-</p> */}
                                    <p className="relative z-11 text-black font-body font-bold text-5xl md:text-6xl text-nowrap w-full left-0 transition-all duration-300 ease-out hover:left-4"> Naše tvorba</p>
                                </div>                            
                            </button>
                        </Link>
                        <Link href={'/'}>
                            <button onClick={handleClick}>
                                <div className="flex flex-row gap-4">
                                    {/* <p className="relative z-11 text-black font-body font-bold text-5xl md:text-6xl text-nowrap">-</p> */}
                                    <p className="relative z-11 text-black font-body font-bold text-5xl md:text-6xl text-nowrap w-full left-0 transition-all duration-300 ease-out hover:left-4"> Výroba na míru</p>
                                </div>
                            </button>
                        </Link>
                        <Link href={'/contact'}>
                            <button onClick={handleClick}>
                                <div className="flex flex-row gap-4">
                                    {/* <p className="relative z-11 text-black font-body font-bold text-5xl md:text-6xl text-nowrap">-</p> */}
                                    <p className="relative z-11 text-black font-body font-bold text-5xl md:text-6xl text-nowrap w-full left-0 transition-all duration-300 ease-out hover:left-4"> Kontakty</p>
                                </div>
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}