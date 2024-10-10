"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CaroucelPeronsajes from "./CaroucelPeronsajes";
import FondoAnimado from "./FondoAnimado";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";
import trs from "@/public/locales/translate.json";

interface Props {
  i_images: string[];
  d_images: string[];
}

export default function Page3({ i_images, d_images }: Props) {
  const [load, setLoad] = useState(false);
  const [loadAnimation, setLoadAnimaion] = useState(false);

  const { language } = useLanguage();

  const translations = trs as any;

  useEffect(() => {
    setLoad(true);

    setTimeout(() => {
      setLoadAnimaion(true);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full relative">
      <FondoAnimado />

      <div className="w-full h-screen absolute overflow-hidden top-0 left-0">
        <div className="h-full relative">
          <div className="w-full absolute top-0 left-0 h-[70px] md:h-[100px] xl:h-[124px] flex justify-center py-3 px-5 md:px-10">
            <Image
              unoptimized
              src="/assets/images/nav_logo.png"
              alt="Logo"
              width={0}
              height={0}
              className="w-auto h-full"
            />
          </div>

          <div className="flex flex-col gap-5 md:hidden w-full h-fit top-[80px] absolute">
            <h1
              className="tracking-tight uppercase font-extrabold text-3xl mx-auto w-[90%] text-center bg-gradient-to-t from-[#FC228A] to-[#FF9900] bg-clip-text text-transparent"
              style={{ lineHeight: "1.2" }}
            >
              62 años de historia
            </h1>

            <div className="grid grid-cols-2 gap-5 w-full relative">
              <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
                <div className="w-full h-[50px] md:h-[60px] lg:h-[80px] flex justify-center">
                  <Image
                    src={"/assets/images/logo_almuerzo_show.png"}
                    unoptimized
                    alt=""
                    width={0}
                    height={0}
                    className="w-auto h-full"
                  />
                </div>
                <Link
                  href={"/evento/almuerzo-show"}
                  className={`${
                    loadAnimation ? "z-[99999999]" : ""
                  } w-fit inline-flex items-center justify-center px-4 lg:px-8 py-1 lg:py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FF9900] hover:bg-[#FF9900] transition-all duration-300 rounded-full`}
                >
                  {translations[language].reservar}
                </Link>
              </div>

              <div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
                <div className="w-full h-[50px] md:h-[60px] lg:h-[80px] flex justify-center">
                  <Image
                    src={"/assets/images/logo_noches_de_folklore.png"}
                    unoptimized
                    alt=""
                    width={0}
                    height={0}
                    className="w-auto h-full"
                  />
                </div>
                <Link
                  href={"/evento/noche-de-folklore"}
                  className={`${
                    loadAnimation ? "z-[99999999]" : ""
                  } w-fit inline-flex items-center justify-center px-4 lg:px-8 py-1 lg:py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FC228A] hover:bg-[#FC228A] transition-all duration-300 rounded-full`}
                >
                  {translations[language].reservar}
                </Link>
              </div>
            </div>
            <div className="w-full h-full flex items-center justify-center z-10">
              <div className="flex flex-col gap-2">
                <p className="text-white text-sm md:text-base text-center">
                  ¡Lo mejor del Perú en una sola velada!
                </p>
                <div className="w-full flex item justify-center gap-3">
                  <Link
                    href={"/danzas"}
                    className="bg-white hover:text-white hover:bg-black transition-all duration-300 text-black w-fit px-3 md:px-5 py-2 rounded-lg text-xs md:text-sm"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full h-screen flex items-end justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 relative h-full w-full">
              <div className="flex justify-end items-end h-full">
                <CaroucelPeronsajes images={i_images} />
                {/* <Image
                  src={i_images[0]}
                  alt="Imagen 1"
                  width={0}
                  height={0}
                  unoptimized
                  className="h-[80%] w-auto object-cover"
                /> */}
              </div>
              <div className="hidden md:flex flex-col gap-5 justify-center items-center">
                <h1
                  className="tracking-tight uppercase font-extrabold text-4xl lg:text-5xl text-center bg-gradient-to-t from-[#FC228A] to-[#FF9900] bg-clip-text text-transparent"
                  style={{ lineHeight: "1.2" }}
                >
                  62 años de historia
                </h1>

                <div className="grid grid-cols-2 gap-5 w-full relative">
                  <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
                    <div className="w-full h-[50px] md:h-[60px] lg:h-[80px] flex justify-center">
                      <Image
                        src={"/assets/images/logo_almuerzo_show.png"}
                        unoptimized
                        alt=""
                        width={0}
                        height={0}
                        className="w-auto h-full"
                      />
                    </div>
                    <Link
                      href={"/evento/almuerzo-show"}
                      className={`${
                        loadAnimation ? "z-[99999999]" : ""
                      } w-fit inline-flex items-center justify-center px-4 lg:px-8 py-1 lg:py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FF9900] hover:bg-[#FF9900] transition-all duration-300 rounded-full`}
                    >
                      {translations[language].reservar}
                    </Link>
                  </div>

                  <div className="w-full h-auto flex flex-col gap-3 justify-center items-center">
                    <div className="w-full h-[50px] md:h-[60px] lg:h-[80px] flex justify-center">
                      <Image
                        src={"/assets/images/logo_noches_de_folklore.png"}
                        unoptimized
                        alt=""
                        width={0}
                        height={0}
                        className="w-auto h-full"
                      />
                    </div>
                    <Link
                      href={"/evento/noche-de-folklore"}
                      className={`${
                        loadAnimation ? "z-[99999999]" : ""
                      } w-fit inline-flex items-center justify-center px-4 lg:px-8 py-1 lg:py-2 font-sans font-semibold tracking-wide text-white bg-transparent border-2 border-[#FC228A] hover:bg-[#FC228A] transition-all duration-300 rounded-full`}
                    >
                      {translations[language].reservar}
                    </Link>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center">
                  <div className="flex flex-col gap-2">
                    <p className="text-white text-sm md:text-base text-center">
                      ¡Lo mejor del Perú en una sola velada!
                    </p>
                    <div className="w-full flex item justify-center gap-3">
                      <Link
                        href={"/danzas"}
                        className="bg-white hover:text-white hover:bg-black transition-all duration-300 text-black w-fit px-3 md:px-5 py-2 rounded-lg text-xs md:text-sm"
                      >
                        Ver más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end h-full">
                <CaroucelPeronsajes images={d_images} />
                {/* <Image
                  src={i_images[2]}
                  alt="Imagen 2"
                  width={0}
                  height={0}
                  unoptimized
                  className="h-[80%] w-auto object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
