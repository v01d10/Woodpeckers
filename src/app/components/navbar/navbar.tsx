'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

export default function Navbar() {

    const logoStyle = {
        borderRadius: '20%'
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="flex flex-col content-center items-center w-full border-b-4 border-black">
            <div className="w-full">
                <nav className="flex flex-row justify-evenly content-center items-center gap-16">
                    <Link className="group w-1/5 font-body text-2xl font-bold text-center transition-all ease-in-out border-black hover:scale-105" href={'/'}>
                        <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                            E-shop
                        </span>
                    </Link>
                    <Link className="group w-1/5 font-body text-2xl font-bold text-center transition-all ease-in-out border-black hover:scale-105" href={'/'}>
                        <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                            Naše tvorba
                        </span>
                    </Link>
                    <Link className="w-1/5 " href={'/'}>
                        <Image className="h-full invert transition ease-in"
                            src="/logo.png"
                            width={144}
                            height={144}
                            alt="Logo"
                        />
                    </Link>
                    <Link className="group w-1/5 font-body text-2xl font-bold text-center transition-all ease-in-out border-black hover:scale-105" href={'/'}>
                        <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                            Výroba na míru
                        </span>
                    </Link>
                    <Link className="group w-1/5 font-body text-2xl font-bold text-center transition-all ease-in-out border-black hover:scale-105" href={'/contact'}>
                        <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                            Kontakt
                        </span>
                    </Link>
                </nav>
            </div>

            <div className="sm:hidden relative flex flex-row my-4">
                <nav className="flex flex-col content-center">
                    <Link className="font-bold" href={'/about'}>ESHOP</Link>
                    <Link className="font-bold" href={'/about'}>OUR WORK</Link>
                    <Link href={'/'}>
                        <Image
                            src="/logo.png"
                            width={128}
                            height={128}
                            alt="Logo"
                        />
                    </Link>
                    <Link className="font-bold" href={'/about'}>CUSTOM</Link>
                    <Link className="font-bold" href={'/about'}>CONTACT</Link>
                </nav>
            </div>
        </div>
    )
}