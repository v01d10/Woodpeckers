import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-4/6 gap-16">
        <Navbar />
        <div className="flex flex-col content-center justify-center gap-16 w-full">
          <div className="flex flex-col w-full">
            <h1 className="font-body font-bold text-6xl pointer-events-none select-none">Výroba nábytku</h1>
            <h1 className="font-body font-bold text-6xl pointer-events-none select-none">Na zakázku a kvalitně</h1>
            <p className="font-body text-2xl pointer-events-none select-none">Woodpeckers</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Link className="relative flex overflow-hidden" href={'/'}>
              <Image className="object-cover hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/desk_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Stoly</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              <Image className="object-cover hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/knife_holder_home.jpeg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Držáky</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              < Image className="object-cover hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/cutting_board_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Prkénka</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              < Image className="object-cover hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/chandelier_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Svícny</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              < Image className="object-cover hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/clock_home.jpeg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Hodiny</h2>
            </Link>
            <Link className="relative flex overflow-hidden" href={'/'}>
              < Image className="object-cover hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                src={'/candle_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Svíčky</h2>
            </Link>
          </div>
          


          {/* <div className="flex flex-col gap-8 h-1/4">
            <div className="flex flex-row justify-between gap-4 ">
              <Link className="relative flex overflow-hidden w-4/6 h-fit" href={'/products'}>
                <Image className="object-cover w-full h-fit hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                  src={'/desk_home.jpg'}
                  width={560}
                  height={560}
                  alt="Logo"
                />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">STOLY</h2>
              </Link>

              <div className="flex flex-col gap-4 w-2/6">
                <Link className="relative w-full h-1/2 overflow-hidden" href={'/products'}>
                  <Image className="object-cover w-full h-full hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                      src={'/knife_holder_home.jpeg'}
                      width={312}
                      height={312}
                      alt="Logo"
                  />
                  <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Drzaky</h2>
                </Link>
                <Link className="relative overflow-hidden h-1/2" href={'/products'}>
                  <Image className="object-cover w-full h-full hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                    src={'/cutting_board_home.jpg'}
                    width={312}
                    height={312}
                    alt="Logo"
                  />
                  <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">Prkenka</h2>
                </Link>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <Link className="relative overflow-hidden" href={'/products'}>
                <Image className="object-cover max-w-64 min-h-full hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                  src={'/chandelier_home.jpg'}
                  width={312}
                  height={312}
                  alt="Logo"
                />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">SVICNY</h2>
              </Link>
              <Link className="relative overflow-hidden" href={'/products'}>
                <Image className="object-cover max-w-64 min-h-full hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                  src={'/clock_home.jpeg'}
                  width={312}
                  height={312}
                  alt="Logo"
                />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">HODINY</h2>
              </Link>
              <Link className="relative overflow-hidden" href={'/products'}>
                <Image className="object-cover max-w-64 min-h-full hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                  src={'/candle_home.jpg'}
                  width={312}
                  height={312}
                  alt="Logo"
                />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">SVICKY</h2>
              </Link>
              <Link className="relative overflow-hidden" href={'/products'}>
                <Image className="object-cover max-w-64 min-h-full hover:scale-125 hover:brightness-75 transition ease-in-out delay-0 duration-1000"
                  src={'/candle_home.jpg'}
                  width={312}
                  height={312}
                  alt="Logo"
                />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-body font-bold text-white text-6xl pointer-events-none">SVICKY</h2>
              </Link>
            </div>
          </div> */}

          <div className="flex flex-row overflow-hidden">
            <Image className="object-cover w-3/5 max-h-96"
                src={'/desk_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
            <div className="flex flex-col gap-8 w-2/5 justify-center items-center">
              <div className="w-2/3">
                <h3 className="font-body font-bold text-4xl">České klacky,</h3>
                <h3 className="font-body font-bold text-4xl">Zbite na koleni</h3>
              </div>
              <div className="text-wrap w-2/3">
                <p className="text-lg leading-tight">Vyrábíme epoxidové stoly, lampy, hodiny, rámy zrcadel, barové desky, desky kuchyňských linek, postele, desky pod umyvadla, prkýnka na vaření, police aj. </p>
              </div>
              <Link className="group font-body font-bold text-2xl transition-all ease-in-out w-2/3" href={'/'}>
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Naše technologie
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-row overflow-hidden">
            <div className="flex flex-col gap-8 w-2/5 justify-center items-center">
              <div className="w-2/3">
                <h3 className="font-body font-bold text-4xl">Přímo z lesa,</h3>
                <h3 className="font-body font-bold text-4xl">Od becírku</h3>
              </div>
              <div className="text-wrap w-2/3">
                <p className="text-lg leading-tight">Zaměřujeme se především na zakázkovou výrobu nábytku a zabýváme se také interiérovými doplňky pro vaše bydlení. Každý kus našich produktů je tedy originál. </p>
              </div>
              <Link className="group font-body font-bold text-2xl transition-all ease-in-out w-2/3" href={'/'}>
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Výroba na míru
                </span>
              </Link>
            </div>
              <Image className="object-cover w-3/5 max-h-96"
                src={'/candle_home.jpg'}
                width={512}
                height={512}
                alt="Logo"
              />
          </div>
          
          <div className="m-16">

          </div>
        </div>
      </div>
    </div>
  );
}
