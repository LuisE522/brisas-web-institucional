"use client";

import { API_URL } from "@/const";
import React, { useEffect, useRef, useState } from "react";
import { Danzas_I } from "../Panel/Danzas/ListDanzas";
import { useLanguage } from "@/context/LanguageProvider";
import trs from "@/public/locales/translate.json";

// Simulación de imágenes
const totalImages = 200; // Número total de imágenes
const images = Array.from(
  { length: totalImages },
  (_, i) => `https://picsum.photos/300/600?random=${i + 1}`
);

const initialColumns = 6; // Número inicial de columnas
const imagesPerLoad = 10; // Número de imágenes a cargar cada vez

export default function GameArea() {
  const { language } = useLanguage();
  const translations = trs as any;

  const [loading, setLoading] = useState(true);
  const [listDanzas, setListDanzas] = useState<Danzas_I[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState({ left: 0, top: 0 });
  const [visibleImages, setVisibleImages] = useState<Danzas_I[]>([]);

  const [selectedImage, setSelectedImage] = useState<null | Danzas_I>(null);
  const [isImageModalOpen, setImageModalOpen] = useState(false);

  const handleImageClick = (src: Danzas_I, event: React.MouseEvent) => {
    const target = event.currentTarget;
    const { left, top } = target.getBoundingClientRect();

    setSelectedImage(src);

    setTimeout(() => {
      setImageModalOpen(true);
    }, 1000);

    // Aplicar animación
    target.classList.add("animate-move");
    target.classList.add("z-50");

    // Usar setTimeout para quitar la clase después de la animación
    setTimeout(() => {
      target.classList.remove("animate-move");
      target.classList.remove("z-50");
    }, 1000); // Duración de la animación
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: event.clientX, y: event.clientY });
    if (containerRef.current) {
      setScrollPos({
        left: containerRef.current.scrollLeft,
        top: containerRef.current.scrollTop,
      });
    }
    event.preventDefault(); // Prevenir la selección de texto
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    event.preventDefault();

    const deltaX = event.clientX - startPos.x;
    const deltaY = event.clientY - startPos.y;

    containerRef.current.scrollLeft = scrollPos.left - deltaX;
    containerRef.current.scrollTop = scrollPos.top - deltaY;

    // Detectar si se ha llegado al límite
    if (containerRef.current.scrollLeft <= 0) {
      loadMoreImages("left");
    } else if (
      containerRef.current.scrollLeft + containerRef.current.clientWidth >=
      containerRef.current.scrollWidth
    ) {
      loadMoreImages("right");
    }

    if (containerRef.current.scrollTop <= 0) {
      loadMoreImages("up");
    } else if (
      containerRef.current.scrollTop + containerRef.current.clientHeight >=
      containerRef.current.scrollHeight
    ) {
      loadMoreImages("down");
    }
  };

  const loadMoreImages = (direction: string) => {
    const currentLength = visibleImages.length;

    // Cargar más imágenes en la dirección adecuada
    if (direction === "right" || direction === "down") {
      if (currentLength < listDanzas.length) {
        const newImages = listDanzas.slice(
          currentLength,
          currentLength + imagesPerLoad * initialColumns
        );
        setVisibleImages((prev) => [...prev, ...newImages]);
      }
    }

    if (direction === "left" || direction === "up") {
      const newImages = listDanzas.slice(
        Math.max(0, currentLength - imagesPerLoad * initialColumns),
        currentLength
      );
      setVisibleImages((prev) => [...newImages, ...prev]);
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setIsDragging(true);
    const touch = event.touches[0];
    setStartPos({ x: touch.clientX, y: touch.clientY });
    if (containerRef.current) {
      setScrollPos({
        left: containerRef.current.scrollLeft,
        top: containerRef.current.scrollTop,
      });
    }
    event.preventDefault();
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - startPos.x;
    const deltaY = touch.clientY - startPos.y;

    containerRef.current.scrollLeft = scrollPos.left - deltaX;
    containerRef.current.scrollTop = scrollPos.top - deltaY;

    // Detectar si se ha llegado al límite
    if (containerRef.current.scrollLeft <= 0) {
      loadMoreImages("left");
    } else if (
      containerRef.current.scrollLeft + containerRef.current.clientWidth >=
      containerRef.current.scrollWidth
    ) {
      loadMoreImages("right");
    }

    if (containerRef.current.scrollTop <= 0) {
      loadMoreImages("up");
    } else if (
      containerRef.current.scrollTop + containerRef.current.clientHeight >=
      containerRef.current.scrollHeight
    ) {
      loadMoreImages("down");
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const load = async () => {
      const response = await fetch(`${API_URL}/danzas/listdanzas`, {
        method: "GET",
        cache: "no-cache",
      });

      const res = await response.json();

      setListDanzas(res);
      setLoading(false);
      setVisibleImages(res.slice(0, initialColumns * 5));

      console.log(res);
      console.log(visibleImages);
    };

    load();
  }, []);

  if (loading) {
    return (
      <>
        <h1>Cargando....</h1>
      </>
    );
  }

  return (
    <>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="h-screen w-full overflow-hidden border relative cursor-grab"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${initialColumns}, 1fr)`, // Definir el número de columnas
            width: `${initialColumns * 300}px`, // Ajustar el ancho total
            height: `${
              Math.ceil(visibleImages.length / initialColumns) * 380
            }px`, // Ajustar la altura total
          }}
        >
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg danzasCaja hover:-top-1 transition-all duration-300"
              onMouseDown={(event) => {
                event.stopPropagation();
                handleMouseDown(event);
              }}
              onClick={(e) => handleImageClick(src, e)} // Agregar clic para mostrar imagen
            >
              <img
                src={src.image}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full rounded-lg shadow-lg hover:scale-125 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {isImageModalOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white flex justify-end items-center z-50 transition-all">
          <span
            className="absolute top-5 left-5 p-2 text-xl font-extrabold cursor-pointer z-50"
            onClick={() => setImageModalOpen(false)}
          >
            x
          </span>
          <img
            src="/assets/images/danzas/mancha7.png"
            className="absolute top-0 left-0 w-[40%] h-auto -z-10"
          />
          <img
            src="/assets/images/danzas/mancha6.png"
            className="absolute top-0 right-0 w-auto h-full -z-10"
          />
          <div className="h-screen relative py-10 max-w-[95%] w-[1080px] mx-auto grid grid-cols-[65%_33%] justify-between items-center">
            <div className="w-[500px] mx-auto h-full grid grid-rows-[25%_auto]">
              <div></div>
              <div className="flex flex-col gap-5 justify-center">
                <h1 className="text-6xl bebas-neue font-semibold uppercase">
                  {language == "es" ? (
                    <>{selectedImage?.nombre.es}</>
                  ) : (
                    <>{selectedImage?.nombre.en}</>
                  )}
                </h1>
                <p className="text-sm">
                  {language == "es" ? (
                    <>{selectedImage?.descripcion.es}</>
                  ) : (
                    <>{selectedImage?.descripcion.en}</>
                  )}
                </p>
              </div>
            </div>
            <div className="w-full h-[500px] rounded-lg relative">
              <img
                src={selectedImage?.image}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="/assets/images/danzas/info_danza_planta1.png"
                className="absolute -bottom-4 -right-28 w-[250px]"
              />
              <img
                src="/assets/images/danzas/info_danza_planta2.png"
                className="absolute top-0 -left-44 h-full -z-10"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
