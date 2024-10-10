"use client";

import Image from "next/image";
import NavTransparent from "../Home/NavTransparent";
import InfiniteImageGrid from "@/components/GridInfinito/GridInfinito";
import { useLanguage } from "@/context/LanguageProvider";
import trs from "@/public/locales/translate.json";

export default function Danzas() {
  const { language } = useLanguage();

  const translations = trs as any;

  return (
    <>
      {/* <div className="w-full absolute top-0 z-50">
        <NavTransparent />
      </div> */}
      <div className="h-[250px] sm:h-[350px] md:h-screen w-full absolute top-0 z-0">
        <div className="bg-black/70 w-full h-full absolute top-0"></div>
        {/* Imagen de fondo */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6THw0hxK_Z8?autoplay=1&controls=0&playlist=6THw0hxK_Z8&mute=1&loop=1" // Agrega autoplay y mute
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className=""
        ></iframe>
        {/* <Image
          unoptimized
          src="/assets/images/danzas/fondo.png"
          alt="alt"
          width={0}
          height={0}
          className="w-full h-full object-cover"
        /> */}
        {/* Imagen de fondo */}

        <div className="w-full h-full absolute top-0 flex flex-row justify-between">
          <Image
            unoptimized
            src="/assets/images/danzas/i_humo.png"
            alt="alt"
            width={0}
            height={0}
            className="h-full w-auto absolute top-0 left-0"
          />
          <Image
            unoptimized
            src="/assets/images/danzas/d_humo.png"
            alt="alt"
            width={0}
            height={0}
            className="h-full w-auto absolute top-0 right-0"
          />
        </div>

        {/* Imagenes del centro */}
        <div className="h-full w-full absolute top-0 flex justify-center items-center">
          <div className="max-w-[95%] w-[1080px] grid grid-cols-2 gap-5 !relative">
            <div className="w-full h-full flex justify-start">
              <Image
                unoptimized
                src="/assets/images/danzas/izquierda.png"
                alt="alt"
                width={0}
                height={0}
                className="h-[120px] sm:h-[220px] md:h-[250px] lg:h-[400px] w-auto"
              />
            </div>
            <div className="w-full h-full flex justify-end">
              <Image
                unoptimized
                src="/assets/images/danzas/derecha.png"
                alt="alt"
                width={0}
                height={0}
                className="h-[120px] sm:h-[220px] md:h-[250px] lg:h-[400px] w-auto"
              />
            </div>
          </div>
        </div>
        {/* Imagenes del centro */}
      </div>
      <div className="w-full h-[250px] sm:h-[350px] md:h-screen bg-black">
        <div className="mx-auto w-[300px] md:w-[600px] h-full !relative">
          <div className="h-full w-full flex flex-col gap-1 items-center justify-center text-white text-center">
            <span
              className="text-[10px] sm:text-sm md:text-base"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
            >
              {translations[language].danza_subtitulo}
            </span>
            <h1
              className="text-2xl md:text-5xl lg:text-7xl font-bold"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
            >
              {translations[language].danza_titulo}
            </h1>
            <span
              className="text-[10px] sm:text-sm md:text-base max-w-[95%] mx-auto w-[500px]"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
            >
              {translations[language].danza_descripcion}
            </span>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full relative py-14">
        <div className="w-full absolute -top-4 md:-top-8 flex justify-between">
          <Image
            unoptimized
            src="/assets/images/danzas/planta1.png"
            alt="alt"
            width={0}
            height={0}
            className="w-[150px] md:w-[300px] h-auto"
          />
          <Image
            unoptimized
            src="/assets/images/danzas/planta1.png"
            alt="alt"
            width={0}
            height={0}
            className="w-[150px] md:w-[300px] h-auto scale-x-[-1]"
          />
        </div>

        <div className="h-full w-full mt-10 flex flex-col gap-20 md:gap-32  justify-center items-center">
          <div className="max-w-[95%] mx-auto w-[800px] ">
            <h1 className="bebas-neue text-2xl md:text-4xl lg:text-6xl text-center">
              {translations[language].danza_titulo2}
            </h1>
          </div>

          <div className="w-full relative">
            <div className="max-w-[95%] mx-auto w-[900px] h-auto grid grid-cols-2 gap-2">
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  unoptimized
                  src="/assets/images/danzas/personaje9.png"
                  alt="alt"
                  width={0}
                  height={0}
                  className="w-full h-auto danzasFadeAndScale"
                />
              </div>
              <div className="w-full h-full flex justify-center items-end relative">
                <Image
                  unoptimized
                  src="/assets/images/danzas/mancha8.png"
                  alt="alt"
                  width={0}
                  height={0}
                  className="absolute top-0 right-0 -z-10 w-auto h-auto"
                />

                <div className="flex flex-col gap-2 danzasMarginTop">
                  <h1 className="text-2xl lg:text-4xl bebas-neue">
                    {translations[language].danza_diablada_destacado_titulo}
                  </h1>
                  <p className="text-[8px] md:text-xs lg:text-sm">
                    {
                      translations[language]
                        .danza_diablada_destacado_descripcion
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full relative">
            <Image
              unoptimized
              src="/assets/images/danzas/mancha1.png"
              alt="alt"
              width={0}
              height={0}
              className="absolute top-0 lg:left-36 -z-10 w-auto h-auto md:h-[600px]"
            />
            <div className="max-w-[95%] mx-auto w-[900px] h-auto grid grid-cols-2 gap-2">
              <div className="w-full h-full flex justify-center items-end">
                <div className="flex flex-col gap-2 danzasMarginTop">
                  <h1 className="text-2xl lg:text-4xl bebas-neue">
                    {translations[language].danza_caporales_titulo}
                  </h1>
                  <p className="text-[8px] md:text-xs lg:text-sm">
                    {translations[language].danza_caporales_descripcion}
                  </p>
                </div>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  unoptimized
                  src="/assets/images/danzas/personaje1.png"
                  alt="alt"
                  width={0}
                  height={0}
                  className="w-full h-auto danzasFadeAndScale"
                />
              </div>
            </div>
          </div>

          <div className="w-full relative">
            <Image
              unoptimized
              src="/assets/images/danzas/mancha2.png"
              alt="alt"
              width={0}
              height={0}
              className="absolute top-0 right-0 -z-10 w-[200px] lg:w-auto h-auto"
            />
            <div className="max-w-[95%] mx-auto w-[900px] h-auto grid grid-cols-2 gap-2">
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  unoptimized
                  src="/assets/images/danzas/personaje2.png"
                  alt="alt"
                  width={0}
                  height={0}
                  className="w-full h-auto danzasFadeAndScale"
                />
              </div>
              <div className="w-full h-full flex justify-center items-end relative">
                <div className="absolute top-0 w-full flex justify-center">
                  <Image
                    unoptimized
                    src="/assets/images/danzas/planta2.png"
                    alt="alt"
                    width={0}
                    height={0}
                    className="h-[70px] md:h-[100px] lg:h-[200px] w-auto danzasFade"
                  />
                </div>
                <div className="flex flex-col gap-2 danzasMarginTop">
                  <h1 className="text-2xl lg:text-4xl bebas-neue">
                    {translations[language].danza_sikuris_titulo}
                  </h1>
                  <p className="text-[8px] md:text-xs lg:text-sm">
                    {translations[language].danza_sikuris_descripcion}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[95%] mx-auto w-[900px] h-auto grid grid-cols-2 gap-2">
            <div className="w-full h-full flex justify-center items-end relative">
              <div className="absolute top-0 w-full flex justify-center">
                <Image
                  unoptimized
                  src="/assets/images/danzas/planta3.png"
                  alt="alt"
                  width={0}
                  height={0}
                  className="h-[70px] md:h-[100px] lg:h-[200px] w-auto danzasFade"
                />
              </div>
              <div className="flex flex-col gap-2 danzasMarginTop">
                <h1 className="text-2xl lg:text-4xl bebas-neue">
                  {translations[language].danza_morenada_titulo}
                </h1>
                <p className="text-[8px] md:text-xs lg:text-sm">
                  {translations[language].danza_morenada_descripcion}
                </p>
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <Image
                unoptimized
                src="/assets/images/danzas/personaje3.png"
                alt="alt"
                width={0}
                height={0}
                className="w-full h-auto danzasFadeAndScale"
              />
            </div>
          </div>

          <div className="w-full relative">
            <Image
              unoptimized
              src="/assets/images/danzas/mancha3.png"
              alt="alt"
              width={0}
              height={0}
              className="absolute top-0 left-0 w-[150px] lg:w-[300px] h-auto"
            />
            <div className="max-w-[95%] mx-auto w-[900px] h-auto grid grid-cols-2 gap-2">
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  unoptimized
                  src="/assets/images/danzas/personaje4.png"
                  alt="alt"
                  width={0}
                  height={0}
                  className="w-full h-auto z-10 danzasFadeAndScale"
                />
              </div>
              <div className="w-full h-full flex justify-center items-end relative">
                <div className="absolute top-0 w-full flex justify-center">
                  <Image
                    unoptimized
                    src="/assets/images/danzas/planta4.png"
                    alt="alt"
                    width={0}
                    height={0}
                    className="h-[70px] md:h-[100px] lg:h-[200px] w-auto danzasFade"
                  />
                </div>
                <div className="flex flex-col gap-2 danzasMarginTop">
                  <h1 className="text-2xl lg:text-4xl bebas-neue">
                    {translations[language].danza_kullawa_titulo}
                  </h1>
                  <p className="text-[8px] md:text-xs lg:text-sm">
                    {translations[language].danza_kullawa_descripcion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300px] w-full bg-gradient-to-t from-[#121212] to-white"></div>
      
      <div className="min-h-screen w-full bg-[#121212] flex flex-col">
        <div className="-mt-56 md:-mt-36 flex flex-col gap-20 md:gap-32">
          <div className="max-w-[95%] w-[900px] mx-auto h-[200px] sm:h-[220px] md:h-[250px] lg:h-[430px] relative flex justify-end danzasFade">
            <div className="h-full absolute top-0 left-0 w-[50%] md:w-[40%] flex justify-center flex-col gap-3 z-50">
              <h1
                className="bebas-neue text-white text-xl md:text-2xl lg:text-4xl  z-50 md:w-[70%]"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
              >
                {translations[language].danza_llamerada_titulo}
              </h1>
              <p
                className="text-white  text-[8px] md:text-xs lg:text-sm"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
              >
                {translations[language].danza_llamerada_descripcion}
              </p>
            </div>
            <Image
              unoptimized
              src="/assets/images/danzas/personaje5.png"
              alt="alt"
              width={0}
              height={0}
              className="h-full w-auto"
            />
          </div>

          <div className="w-full h-auto relative flex flex-col gap-20 md:gap-32">
            <Image
              unoptimized
              src="/assets/images/danzas/mancha5.png"
              alt="alt"
              width={0}
              height={0}
              className="absolute w-full h-auto"
            />

            <div className="max-w-[95%] w-[900px] mx-auto h-[200px] sm:h-[220px] md:h-[250px] lg:h-[430px] relative flex justify-start danzasFade">
              <div className="h-full absolute top-0 right-0 w-[50%] md:w-[40%] flex justify-center flex-col gap-3 z-50">
                <h1
                  className="bebas-neue text-white text-xl md:text-2xl lg:text-4xl  z-50 md:w-[70%]"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
                >
                  {translations[language].danza_carnaval_de_arapa_titulo}
                </h1>
                <p
                  className="text-white  text-[8px] md:text-xs lg:text-sm"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
                >
                  {translations[language].danza_carnaval_de_arapa_descripcion}
                </p>
              </div>
              <Image
                unoptimized
                src="/assets/images/danzas/personaje6.png"
                alt="alt"
                width={0}
                height={0}
                className="h-full w-auto"
              />
            </div>

            <div className="max-w-[95%] w-[900px] mx-auto h-[200px] sm:h-[220px] md:h-[250px] lg:h-[430px] relative flex justify-end danzasFade">
              <div className="h-full absolute top-0 left-0 w-[50%] md:w-[40%] flex justify-center flex-col gap-3 z-50">
                <h1
                  className="bebas-neue text-white text-xl md:text-2xl lg:text-4xl  z-50 md:w-[70%]"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
                >
                  {translations[language].danza_tucumanos_titulo}
                </h1>
                <p
                  className="text-white text-[8px] md:text-xs lg:text-sm"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
                >
                  {translations[language].danza_tucumanos_descripcion}
                </p>
              </div>
              <Image
                unoptimized
                src="/assets/images/danzas/personaje7.png"
                alt="alt"
                width={0}
                height={0}
                className="h-full w-auto"
              />
            </div>

            <div className="max-w-[95%] w-[900px] mx-auto h-[200px] sm:h-[220px] md:h-[250px] lg:h-[430px] relative flex justify-start danzasFade">
              <div className="h-full absolute top-0 right-0 w-[50%] md:w-[40%] flex justify-center flex-col gap-3 z-50">
                <h1
                  className="bebas-neue text-white text-xl md:text-2xl lg:text-4xl  z-50 md:w-[70%]"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
                >
                  {translations[language].danza_pandilla_punenia_titulo}
                </h1>
                <p
                  className="text-white text-[8px] md:text-xs lg:text-sm"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
                >
                  {translations[language].danza_pandilla_punenia_descripcion}
                </p>
              </div>
              <Image
                unoptimized
                src="/assets/images/danzas/personaje8.png"
                alt="alt"
                width={0}
                height={0}
                className="h-full w-auto"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-28">
            <div className="max-w-[95%] mx-auto w-[800px] ">
              <h1 className="bebas-neue text-2xl md:text-4xl lg:text-6xl text-center text-white">
                {translations[language].danza_otras_danzas}
              </h1>
            </div>
            <div className="w-full h-screen relative">
              <div className="w-full h-16 absolute top-0 bg-gradient-to-b from-[#121212] to-transparent z-50"></div>
              <div className="w-full h-16 absolute bottom-0 bg-gradient-to-t from-[#121212] to-transparent z-50"></div>
              <InfiniteImageGrid />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
