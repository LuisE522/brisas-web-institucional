"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

import trs from "@/public/locales/translate.json";
import { useLanguage } from "@/context/LanguageProvider";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  const { language } = useLanguage();
  const translations = trs as any;

  return (
    <>
      <div className="bg-black py-10 hidden md:block">
        <div className="max-w-[95%] w-[1080px] mx-auto flex flex-col gap-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-between gap-5">
            <Image
              unoptimized
              src={"/assets/images/nav_logo.png"}
              alt="Footer logo"
              width={0}
              height={0}
              className="h-[50px] w-auto"
            />
            <div className="w-full flex flex-row items-center rounded-lg overflow-hidden">
              <div className="w-full h-full bg-white text-black">
                <input
                  type="email"
                  className="bg-white text-black w-full h-full outline-none px-2"
                  placeholder="Escribe tu e-mail"
                />
              </div>
              <span className="w-fit h-full px-5 py-2 bg-[#00A859] flex items-center text-white">
                Suscríbete
              </span>
            </div>
            <div className="w-full flex lg:grid lg:grid-cols-5 gap-x-5">
              <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                <FaFacebookF color="black" size={25} />
              </div>
              <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                <FaXTwitter color="black" size={25} />
              </div>
              <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                <FaInstagram color="black" size={25} />
              </div>
              <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                <FaYoutube color="black" size={25} />
              </div>
              <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-white rounded-lg flex justify-center items-center">
                <FaWhatsapp color="black" size={25} />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-5 lg:grid-cols-2 text-white">
            <div className="w-full grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2">
              <div className="w-full flex flex-col gap-1">
                <p>{translations[language].nosotros}</p>
                <p>{translations[language].nuestra_institucion}</p>
                <p>{translations[language].mision_vision}</p>
                <p>{translations[language].consejo_directivo}</p>
              </div>
              <div className="w-full flex flex-col gap-1">
                <p>{translations[language].elenco}</p>
                <p>{translations[language].elenco_danzas}</p>
                <p>{translations[language].coro_brizas_titicaca}</p>
                <p>{translations[language].estudiantina}</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2">
              <div className="w-full flex flex-col gap-1">
                <p>{translations[language].libro_reclamaciones}</p>
                <p>{translations[language].trabaja_con_nosotros}</p>
              </div>
              <div className="w-full flex flex-col gap-1">
                <p>{translations[language].contactanos}</p>
                <p>Jr. Héroes de Tarapacá 168</p>
                <div className="w-full flex flex-row justify-between">
                  <p>01-715 6960</p>
                  <p>01-715 6961</p>
                </div>
                <p>eventos@brisasdeltiticaca.com</p>
                <p>ventas@brisasdeltiticaca.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-5 flex flex-col gap-5 md:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-none">
              {translations[language].nosotros}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="border-none">
              {translations[language].nuestra_institucion}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="border-none">
              {translations[language].mision_vision}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="border-none">
              {translations[language].consejo_directivo}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="border-none">
              {translations[language].elenco}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="border-none">
              {translations[language].elenco_danzas}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="border-none">
              {translations[language].coro_brizas_titicaca}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="border-none">
              {translations[language].estudiantina}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="border-none">
              {translations[language].libro_reclamaciones}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="border-none">
              {translations[language].trabaja_con_nosotros}
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="w-full flex flex-col gap-3 items-center">
          <Image
            unoptimized
            src="/assets/images/nav_logo_negro.png"
            alt="alt"
            width={0}
            height={0}
            className="w-[70%] h-auto"
          />

          <div className="w-full flex flex-row gap-3 justify-between">
            <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-black rounded-lg flex justify-center items-center">
              <FaFacebookF color="white" size={25} />
            </div>
            <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-black rounded-lg flex justify-center items-center">
              <FaXTwitter color="white" size={25} />
            </div>
            <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-black rounded-lg flex justify-center items-center">
              <FaInstagram color="white" size={25} />
            </div>
            <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-black rounded-lg flex justify-center items-center">
              <FaYoutube color="white" size={25} />
            </div>
            <div className="w-fit p-2 lg:p-0 lg:w-full h-full bg-black rounded-lg flex justify-center items-center">
              <FaWhatsapp color="white" size={25} />
            </div>
          </div>

          <div className="w-full flex flex-col gap-1 items-center">
            <p className="font-bold text-lg">{translations[language].contactanos}</p>
            <p className="text-sm">Jr. Héroes de Tarapacá 168</p>
            <div className="w-full flex flex-row justify-around text-sm">
              <p className="flex flex-row gap-1 items-center"><FaPhoneAlt /> 01-715 6960</p>
              <p className="flex flex-row gap-1 items-center"><FaPhoneAlt />01-715 6961</p>
            </div>
            <p className="text-sm">eventos@brisasdeltiticaca.com</p>
            <p className="text-sm">ventas@brisasdeltiticaca.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
