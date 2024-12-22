import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-row w-full justify-between h-32 bg-black p-8">
            <div className="flex flex-col">
                <p className="text-white text-xl font-body">Woodpeckers</p>
                <p className="text-white">info@woodpeckers.becirek</p>
                <p className="text-white">+420420420420</p>

            </div>
        </div>
    )
}