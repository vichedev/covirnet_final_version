"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface HeroProps {
  title: string;
}

export default function Hero(props: HeroProps) {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const isTable = useMediaQuery("min-width: 700px");

  return (
    <>
      <section
        className={`relative flex flex-col items-center justify-center h-[75vh] bg-[url(/images/Hero/fondo_hero_mobile.svg)] bg-fixed bg-cover bg-no-repeat m-auto overflow-hidden lg:overflow-visible bg-black`}
      >
        <div className="flex flex-col-reverse h-full  justify-start px-20 items-center lg:flex lg:flex-row lg:items-center lg:h-full w-[95%] " >

          <Card className="lg:w-[45%] h-[70%] bg-transparent z-10 lg:bg-[#FCA311] lg:bg-opacity-75 p-5 lg:lg:shadow lg:shadow-gray-600 border-none">
            <CardContent className="flex flex-col gap-5 h-full w-full">
              <span className="hidden lg:flex items-center justify-center h-[65%] border-l-8 border-r-8 lg:text-6xl font-bold">
                {props.title}
              </span>

              <p className="w-full text-center hidden sm:block">
                La mejor conexión para tu hogar.
              </p>

              <Link
                href="http://wa.me/+593959884635?text=Quiero%20conocer%20m%C3%A1s%20sobre%20sus%20%precios"
                className=" w-max px-5 py-3 rounded m-auto hidden sm:block text-white bg-gradient-to-r from-[#F2A413] via-[#FC5504] to-[#FF3D00] shadow shadow-gray-600"
              >
                Contratar
              </Link>
            </CardContent>
          </Card>
          <Image
            src="/images/Hero/logo_hero_image.svg"
            width={600}
            height={600}
            alt="Logo"
            className=" absolute top-10 m-auto lg:right-20 lg:top-2 z-20"
          />
        </div>

        {isDesktop ? (
          <div className="flex gap-10 w-[95%] justify-between items-center absolute mt-[35rem] px-14">
            <Image
              src="/images/Hero/arrow_left_hero.svg"
              width={400}
              height={400}
              alt="Imagen"
            // className="absolute"
            />
            <div className="relative flex items-center">
              <Image
                src="/icons/Hero/icon_hero.svg"
                width={100}
                height={100}
                alt="Imagen"
              />
            </div>
            <Image
              src="/images/Hero/arrow_right_hero.svg"
              width={450}
              height={450}
              alt="Imagen"
            />
          </div>
        ) : (
          <div className="absolute bottom-0">
            <Image
              src="/images/Hero/image_mobile.svg"
              width={250}
              height={250}
              alt="Imagen"
            />
          </div>
        )}
      </section>
      {isDesktop ? (
        <section className="flex flex-col justify-center items-center gap-5 m-auto w-[95%] h-[50vh] mt-14">
          <h1 className="text-3xl font-bold">NUESTROS SERVICIOS</h1>
          <p className="italic text-xl">
            Para conocer sobre nuestros planes, haz click aquí:
          </p>
          <Link href="/pricing" className="p-5 rounded-lg bg-black text-white">Revisar planes</Link>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
