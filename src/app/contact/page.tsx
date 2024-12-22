import Image from "next/image"

import Navbar from "../components/navbar/navbar"

export default function Contact() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col max-w-8xl w-4/6 gap-16">
                <Navbar/>
                <h1 className="font-body font-bold text-6xl">Kontakty</h1>
                <div className="flex flex-col lg:flex-row w-full gap-16">
                    <Image className="object-cover aspect-video w-full flex"
                        src={'/contact.jpg'}
                        width={512}
                        height={512}
                        alt="Logo"
                    />
                    <div className="flex flex-row lg:flex-col justify-center w-full lg:w-2/5 gap-16 lg:gap-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col w-full">
                                <p className="font-body font-bold text-4xl ">Prodej a objednávky</p>
                                <p className="text-lg">Tomas Becirek</p>
                                <p className="text-lg">prodej@woodpeckers.becirek</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="font-body font-bold text-4xl">Výroba, technologie</p>
                                <p className="text-lg">Denis Trasta</p>
                                <p className="text-lg">info@woodpeckers.becirek</p>
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <p className="text-lg mb-4">Woodpeckers s.r.o</p>
                            <p className="text-lg">Špinavá Voda 14/32</p>
                            <p className="text-lg mb-4">Becirek, Senov</p>
                            <p className="text-lg">Č: 12345678</p>
                            <p className="text-lg">DIČ: CZ87654321</p>
                            <p className="text-lg">Spisová značka: C 420420 vedená</p>
                            <p className="text-lg">u Krajského soudu Becirek</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}