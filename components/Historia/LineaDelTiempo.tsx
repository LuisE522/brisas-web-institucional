"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { API_URL } from "@/const";

interface Fundadores_I {
  fecha: string;
  descripcion: string;
  imagen: string;
}

export default function LineaDelTiempo() {
  const historia: Fundadores_I[] = [
    {
      fecha: "1961",
      descripcion:
        "Primera actividad de Brisas, celebrando del Aniversario de Puno en noviembre de 1961, con un programa que duró varios días y actuaciones públicas en emisoras radiales, en especial en Radio Continente y Radio Nacional, fueron las primeras actuaciones públicas del Conjunto Musical. El primer local de reuniones, fue una pequeña y sencilla habitación del entonces estudiante de Derecho de la UNMSM, el joven Antonio Ontiveros Luna.",
      imagen: "/assets/images/info/historia_61.png",
    },
    {
      fecha: "1962",
      descripcion:
        "Fotografía de los fundadores (Jorge Rojas Gironda, Cesar Antonio Ontiveros Luna, Miguel Alférez Aguilar, Benjamín Cordero, Policarpo Miranda Mestas, Armando Azcuña Niño de Guzmán, Tommy Felipe Sardón Bacarreza y  Manuel Calderón) tomada en un estudio de La Victoria, a pocos días de haberle dado el nombre de Conjunto Musical Brisas del Titikaka.",
      imagen: "/assets/images/info/historia_62.png",
    },
    {
      fecha: "1964",
      descripcion:
        "Carnavales briseños de entonces, se realizó un paseo campestre al estilo y semejanza de los que se realizan en Puno. como evidencias quedan las fotografías de las damas asistentes que estaban ataviadas con su traje pandillero. Esta demostración artística en el parque, fue la primera presentación de Brisas en las calles de Lima, con danzarines  y Estudiantina.",
      imagen: "/assets/images/info/historia_64.png",
    },
    {
      fecha: "1965",
      descripcion:
        "Presentación de Brisas del Titikaka y Alma Colavina cob el Alcalde Bedoya que se realizó en la Municipalidad de Lima. Aunque el elenco de la institución aún no estaba todavía organizado, el entusiasmo de los danzarines fue desbordante en aquellos tiempos aurorales, que creó la necesidad de contar formalmente con un elenco de danzas, el que empezó a organizarse en los siguientes días, convocándose a diversos jóvenes e hijos de los briseños.",
      imagen: "/assets/images/info/historia_65.png",
    },

    {
      fecha: "1965",
      descripcion:
        "Primera presentación del elenco ante el público, realizada el 18 de diciembre de 1965, luego de la asamblea/fiesta en el local de la Federación Construcción Civil de la Av. Prolongación Cangallo. Este elenco de danzas integrado por 6 parejas que debutó como Brisas del Titikaka con gran auspicio, mayor beneplácito y alegría de los briseños que ya veían plasmados sus objetivos en la promoción y difusión de las tradiciones del folklore puneño",
      imagen: "/assets/images/info/historia_65_2.png",
    },
    {
      fecha: "1965",
      descripcion:
        "Presentación de Brisas del Titikaka y Alma Colavina cob el Alcalde Bedoya que se realizó en la Municipalidad de Lima. Aunque el elenco de la institución aún no estaba todavía organizado, el entusiasmo de los danzarines fue desbordante en aquellos tiempos aurorales, que creó la necesidad de contar formalmente con un elenco de danzas, el que empezó a organizarse en los siguientes días, convocándose a diversos jóvenes e hijos de los briseños.",
      imagen: "/assets/images/info/fondo_historia.png",
    },
    {
      fecha: "1961",
      descripcion:
        "Fotografía de los fundadores (Jorge Rojas Gironda, Cesar Antonio Ontiveros Luna, Miguel Alférez Aguilar, Benjamín Cordero, Policarpo Miranda Mestas, Armando Azcuña Niño de Guzmán, Tommy Felipe Sardón Bacarreza y  Manuel Calderón) tomada en un estudio de La Victoria, a pocos días de haberle dado el nombre de Conjunto Musical Brisas del Titikaka.",
      imagen: "/assets/images/info/historia_70.png",
    },
  ];

  return (
    <div className="w-full relative">
      <div className="w-auto h-full absolute top-0 left-0 z-50">
        <div className="bg-gradient-to-r from-black to-transparent w-[50px] h-full"></div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        /* loop={true} */
        pagination={{
          clickable: true,
        }}
        className="mySwiper !pl-5"
        breakpoints={{
          /* 630: {
            slidesPerView: 3,
            spaceBetween: 30,
          }, */
          650: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
        }}
      >
        {historia.map((fundador, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col -z-0 cursor-grab">
              <div className="w-full flex justify-end">
                <div className="w-[90%] h-[250px] bg-slate-400 !relative rounded-lg overflow-hidden">
                  <Image
                    unoptimized
                    src={fundador.imagen}
                    alt="alt"
                    width={0}
                    height={0}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full text-white -mt-6 z-10 flex flex-col gap-2">
                <h2
                  className="text-5xl bebas-neue"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 2)" }}
                >
                  {fundador.fecha}
                </h2>
                <div className="w-full flex justify-end">
                  <div className="w-[90%] flex flex-col">
                    <p className="text-xs w-[90%] ">{fundador.descripcion}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
