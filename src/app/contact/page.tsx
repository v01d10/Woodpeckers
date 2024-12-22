import Image from "next/image"

import Navbar from "../components/navbar/navbar"

export default function Contact() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col max-w-8xl w-4/6 gap-16">
                <Navbar/>
                <h1 className="font-body font-bold text-6xl">Kontakt</h1>
                <div className="flex flex-row w-full gap-16">
                    <Image className="object-cover aspect-video w-full"
                        src={'/candle_home.jpg'}
                        width={512}
                        height={512}
                        alt="Logo"
                    />
                    <div className="flex flex-col justify-center w-2/5 gap-6">
                        <div className="flex flex-col w-full">
                            <p className="font-body font-bold text-2xl ">Prodej a objednávky</p>
                            <p>Tomas Becirek</p>
                            <p>prodej@woodpeckers.becirek</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="font-body font-bold text-2xl">Výroba, technologie</p>
                            <p>Denis Trasta</p>
                            <p>info@woodpeckers.becirek</p>
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="mb-2">Woodpeckers s.r.o</p>
                            <p>Špinavá Voda 14/32</p>
                            <p className="mb-2">Becirek, Senov</p>
                            <p>Č: 12345678</p>
                            <p>DIČ: CZ87654321</p>
                            <p>Spisová značka: C 420420 vedená</p>
                            <p>u Krajského soudu Becirek</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}