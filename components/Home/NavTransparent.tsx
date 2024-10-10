"use client";

import { useLanguage } from "@/context/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
//import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import trs from "@/public/locales/translate.json";
import { useEffect, useState } from "react";

export default function NavTransparent() {
  const { language, changeLanguage } = useLanguage();

  const translations = trs as any;

  const [isSliderVisible, setSliderVisible] = useState(false);
  const [isAnimating, setAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleSlider = () => {
    if (!isSliderVisible) {
      setSliderVisible(true);
      setTimeout(() => setAnimating(true), 0); // Iniciar la animación después de mostrar
    } else {
      setAnimating(false);
      setTimeout(() => setSliderVisible(false), 300); // Esperar a que la animación termine antes de ocultar
    }
  };

  const handleScroll = () => {
    // Cambia el estado si se ha desplazado más allá de la altura de la ventana
    setIsScrolled(window.scrollY > 70);
  };

  useEffect(() => {
    // Añadir el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento de scroll al desmontar el componente
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full mx-auto ${
          isScrolled ? "fixed bg-black" : ""
        } z-50 transition-bg duration-300`}
      >
        <div className="w-full hidden md:grid md:grid-cols-3 gap-3 md:gap-0 justify-center md:justify-between h-auto p-3 md:px-3 md:h-[124px] items-center text-base">
          <div className="w-full text-white flex justify-center gap-5">
            <Link href="/danzas">{translations[language].inicio}</Link>
            <Link href="#">{translations[language].eventos}</Link>
            <Link href="#">{translations[language].nosotros}</Link>
            <Link href="/historia">{translations[language].historia}</Link>
            <Link
              href="https://sistemas.brisasdeltiticaca.com/admin"
              target="_blank"
            >
              {translations[language].asociados}
            </Link>
          </div>
          <Link href="/">
            <Image
              unoptimized
              src={`/assets/images/nav_logo.png`}
              width={0}
              height={0}
              alt="Logo"
              className="h-[60px] w-auto"
            />
          </Link>
          <div className="hidden text-white w-full md:grid grid-cols-[70%_17%] justify-between gap-3 items-center">
            <div className="w-full flex justify-center gap-8 items-center">
              <Link href={"/pquina-qocha"}>
                <Image
                  unoptimized
                  src={"/assets/images/logo nav_Puquina_Qocha.png"}
                  height={0}
                  width={0}
                  alt="Puquina Q´ocha"
                  className="w-auto h-[60px]"
                />
              </Link>
              <Link
                href="https://sistemas.brisasdeltiticaca.com/"
                target="_blank"
              >
                <Image
                  unoptimized
                  src={"/assets/images/logo_CFA_Brisas_Vertical.png"}
                  height={0}
                  width={0}
                  alt="Puquina Q´ocha"
                  className="w-auto h-[60px]"
                />
              </Link>
            </div>
            <div className="w-full h-full items-center gap-3 flex">
              <div className="flex flex-row gap-1 font-bold z-[99999]">
                <span
                  className={`cursor-pointer ${
                    language === "es" ? "text-muted-foreground" : ""
                  }`}
                  onClick={() => changeLanguage("es")}
                >
                  ESP
                </span>
                <span>|</span>
                <span
                  className={`cursor-pointer ${
                    language === "en" ? "text-muted-foreground" : ""
                  }`}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-[auto_50%_auto] gap-1 items-center justify-between p-3 text-base z-[9999] md:hidden">
          <div className="w-full flex flex-row gap-3 items-center">
            <Link href={"/pquina-qocha"}>
              <Image
                unoptimized
                src={"/assets/images/logo nav_Puquina_Qocha.png"}
                height={0}
                width={0}
                alt="Puquina Q´ocha"
                className="w-auto h-[30px]"
              />
            </Link>
            <Link
              href="https://sistemas.brisasdeltiticaca.com/"
              target="_blank"
            >
              <Image
                unoptimized
                src={"/assets/images/logo_CFA_Brisas_Vertical.png"}
                height={0}
                width={0}
                alt="Puquina Q´ocha"
                className="w-auto h-[30px]"
              />
            </Link>
          </div>
          <Link href="/">
            <Image
              unoptimized
              src={`/assets/images/nav_logo.png`}
              width={0}
              height={0}
              alt="Logo"
              className="h-auto w-auto "
            />
          </Link>
          <div className="w-[85px] flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1 font-bold text-[10px]">
              <span
                className={`cursor-pointer ${
                  language == "es" ? "text-muted-foreground" : "text-white"
                }`}
                onClick={() => changeLanguage("es")}
              >
                ESP
              </span>
              <span className="text-white">|</span>
              <span
                className={`cursor-pointer ${
                  language == "en" ? "text-muted-foreground" : "text-white"
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </span>
            </div>
            <IoMdMenu color="white" size={30} onClick={toggleSlider} />
          </div>
        </div>
      </div>
      {isSliderVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-start z-50"
          onClick={toggleSlider}
        >
          <div
            className={`bg-[#121212] w-full transition-transform duration-300 transform ${
              isAnimating ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="px-7 py-5 flex flex-col gap-5 text-white">
              <Link
                className={`hover:text-[#23B3F0] ${
                  pathname == "/danzas" ? "text-[#23b3f0]" : ""
                }`}
                href="/danzas"
              >
                {translations[language].inicio}
              </Link>
              <Link
                className={`hover:text-[#23B3F0] ${
                  pathname == "/danzasqw" ? "text-[#23b3f0]" : ""
                }`}
                href="#"
              >
                {translations[language].eventos}
              </Link>
              <Link
                className={`hover:text-[#23B3F0] ${
                  pathname == "/danzasqwe" ? "text-[#23b3f0]" : ""
                }`}
                href="#"
              >
                {translations[language].nosotros}
              </Link>
              <Link
                className={`hover:text-[#23B3F0] ${
                  pathname == "/historia" ? "text-[#23b3f0]" : ""
                }`}
                href="/historia"
              >
                {translations[language].historia}
              </Link>
              <Link
                className="hover:text-[#23B3F0] "
                href="https://sistemas.brisasdeltiticaca.com/admin"
                target="_blank"
              >
                {translations[language].asociados}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
