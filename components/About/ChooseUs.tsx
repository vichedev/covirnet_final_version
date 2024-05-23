"use client";
import Image from "next/image";

interface DataCardsProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const dataCards: DataCardsProps[] = [
  {
    id: 1,
    img: "/images/motivo1.png",
    title: "MOTIVO #1",
    description: "Nuestra excelente capacidad en brindar un servicio confiable y rápida: En Covirnet, entendemos que la velocidad y la confiabilidad son fundamentales cuando se trata de tu conexión a internet."
  },
  {
    id: 2,
    img: "/images/motivo2.png",
    title: "MOTIVO #2",
    description: "Atención al cliente excepcional: En Covirnet, nos preocupamos por la satisfacción de nuestros clientes y nos esforzamos por brindar un servicio de atención al cliente excepcional."
  },
  {
    id: 3,
    img: "/images/motivo3.png",
    title: "MOTIVO #3",
    description: "Variedad de servicios y opciones flexibles: En Covirnet, comprendemos que cada cliente es único y tiene necesidades diferentes cuando se trata de su conexión a internet."
  },
]

export default function ChooseUsComponent() {
  return (
    <>
      <section className="flex flex-col lg:flex-col justify-center items-center sm:flex-wrap lg:flex-nowrap gap-10 w-[95%] lg:h-[70vh] mt-5 m-auto px-5 py-10 bg-[url(/images/About/bg_image_choose_us.svg)] bg-cover rounded-lg">

        <h1 className="text-center font-bold text-4xl text-white">
          ¿POR QUÉ ELEGIRNOS?
        </h1>

        <div className="flex flex-row justify-around items-center flex-wrap lg:nowrap w-full py-2">
          {dataCards.map((item) => {
            return (
              <>

                <div className="flex flex-col gap-5 justify-center items-center lg:w-[25%] lg:justify-between lg:py-3 lg:px-2 lg:h-full">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full m-auto bg-gray-400">

                    <Image
                      src={item.img}
                      width={300}
                      height={100}
                      alt="Logo"
                      className="rounded-full m-auto "
                    />

                  </div>
                  <h2 className="font-bold text-white">{item.title}</h2>
                  <p className="text-white text-justify h-1/2 ">
                    {item.description}
                  </p>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  );
}
