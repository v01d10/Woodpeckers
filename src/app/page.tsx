import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-4/6 gap-16">
        <Navbar />
        <div className="flex flex-col content-center justify-center gap-16 w-full">
          <div className="flex flex-col w-full">
            <h1 className="font-body font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl pointer-events-none select-none">Výroba nábytku</h1>
            <h1 className="font-body font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl pointer-events-none select-none">Na zakázku a kvalitně</h1>
            <p className="font-body text-2xl pointer-events-none select-none">Woodpeckers</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <Link className="relative flex overflow-hidden" href={'/'}>
              <Image className="object-cover aspect-video lg:aspect-square md:aspect-square sm:aspect-video hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/images/desk_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Stoly</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              <Image className="object-cover aspect-video lg:aspect-square md:aspect-square sm:aspect-video hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/images/knife_holder_home.jpeg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Držáky</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              < Image className="object-cover aspect-video lg:aspect-square md:aspect-square sm:aspect-video hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/images/cutting_board_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Prkénka</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              <Image className="object-cover aspect-video lg:aspect-square md:aspect-square sm:aspect-video hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/images/chandelier_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Svícny</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              <Image className="object-cover aspect-video lg:aspect-square md:aspect-square sm:aspect-video hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/images/clock_home.jpeg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Hodiny</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              < Image className="object-cover aspect-video lg:aspect-square md:aspect-square sm:aspect-video hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/images/candle_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Svíčky</h2>
            </Link>
          </div>

          <div className="flex flex-row overflow-hidden gap-8">
              <Image className="object-cover w-4/5 max-h-96 hidden lg:flex"
                src={'/images/desk_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
            <div className="flex flex-col gap-8 w-full lg:w-2/5 justify-center items-center">
              <div className="w-full">
                <h3 className="font-body font-bold text-4xl">Ručně řezane,</h3>
                <h3 className="font-body font-bold text-4xl">Zbite nakoleni</h3>
              </div>
              <div className="text-wrap w-full">
                <p className="text-lg leading-tight">Vyrábíme epoxidové stoly, lampy, hodiny, rámy zrcadel, barové desky, desky kuchyňských linek, postele, desky pod umyvadla, prkýnka na vaření, police aj. </p>
              </div>
              <Link className="group font-body font-bold text-2xl transition-all ease-in-out w-full" href={'/'}>
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Výroba na zakázku
                </span>
              </Link>
            </div>
            
          </div>

          <div className="flex flex-row overflow-hidden gap-8">
            <div className="flex flex-col gap-8 w-full lg:w-2/5 justify-center items-center">
              <div className="w-full">
                <h3 className="font-body font-bold text-4xl">Přímo z lesa,</h3>
                <h3 className="font-body font-bold text-4xl">Od Becírku</h3>
              </div>
              <div className="text-wrap w-full">
                <p className="text-lg leading-tight">Vyrábíme epoxidové stoly, lampy, hodiny, rámy zrcadel, barové desky, desky kuchyňských linek, postele, desky pod umyvadla, prkýnka na vaření, police aj. </p>
              </div>
              <Link className="group font-body font-bold text-2xl transition-all ease-in-out w-full" href={'/'}>
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Výroba na zakázku
                </span>
              </Link>
            </div>
            <Image className="object-cover w-4/5 max-h-96 hidden lg:flex"
                src={'/images/knife_holder_home.jpeg'}
                width={512}
                height={512}
                alt="Logo"
              />
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
