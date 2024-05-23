"use client";
import React from "react";

import { navigationLinks } from "@/constants/navigation";
import { linksInteres } from "@/constants/links_interes";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-3 z-30 w-[95%] m-auto mt-5 border-2 border-black bg-[url(/images/Hero/background_hero_image.svg)] bg-no-repeat bg-cover bg-fixed rounded-lg py-5">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:pl-16">
          
          <div className="lg:col-span-1 flex flex-col items-start lg:mr-8"> {/* Agregamos un margen derecho para la primera columna */}
            <div className="lg:w-[100%]">
              <Image
                src="/images/Hero/logo_hero_image.svg"
                width={300}
                height={100}
                alt="Logo"
                className=""
              />
            </div>
            <p className="mb-4">
              <strong className="font-medium">¡La Velocidad que necesitas!</strong> No lo pienses más, Covirnet es tu mejor opción.
            </p>
          </div>

          {/* SECTOR DE LINKS 1 */}
          <div className="md:col-span-1 lg:col-span-1 flex flex-col lg:ml-8"> {/* Agregamos un margen izquierdo para las otras tres columnas */}
            <p className="text-black-600 mb-4 font-medium text-lg">Links rápidos</p>
            <div className="flex flex-col">
              {navigationLinks.map((item_link) => (
                <Link
                  className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                  href={item_link.path}
                  key={item_link.id}
                >
                  {item_link.title}
                </Link>
              ))}
            </div>
          </div>
          {/* SECTOR DE LINKS 2 */}
          <div className="md:col-span-1 lg:col-span-1 flex flex-col lg:ml-8"> {/* Agregamos un margen izquierdo para las otras tres columnas */}
            <p className="text-black-600 mb-4 font-medium text-lg">Links de interés</p>
            <div className="flex flex-col ">
              {linksInteres.map((interes) => (
                <Link
                  className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                  key={interes.id}
                  href={interes.path}
                  prefetch={false}
                >
                  {interes.title}
                </Link>
              ))}
            </div>
          </div>
          {/* SECTOR DE LINKS 3 */}
          <div className="md:col-span-1 lg:col-span-1 flex flex-col lg:ml-8"> {/* Agregamos un margen izquierdo para las otras tres columnas */}
            <p className="text-black-600 mb-4 font-medium text-lg">Links de contactos</p>
            <div className="flex flex-col ">
              <Link
                className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                href="tel:+593959884635"
                prefetch={false}
              >
                Ventas y soporte
              </Link>
              <Link
                className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                href="mailto:covir.net@gmail.com"
                prefetch={false}
              >
                Correo ventas
              </Link>
              <Link
                className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                href="mailto:covirnetsoporte@gmail.com"
                prefetch={false}
              >
                Correo soporte
              </Link>
              <Link
                className="my-2 hover:text-orange-500 cursor-pointer transition-all"
                href="https://maps.app.goo.gl/PfmkTYPABR6estif7"
                prefetch={false}
                target="_blank"
              >
                Dirección
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-300 py-4 w-full">
        <p className="text-gray-400 text-center">©{new Date().getFullYear()} Inigualitysoft</p>
      </div>
    </>
  );
}
