"use client";
import Image from "next/image";

export default function AboutComponent() {
    return (
        <section className="flex flex-col p-5 gap-5 md:justify-center md:items-center lg:flex-row lg:flex-wrap lg:justify-center lg:gap-5 lg:p-5 w-[95%] m-auto bg-[url(/images/Hero/background_hero_image.svg)] bg-no-repeat bg-cover bg-fixed mt-5 rounded-lg shadow-lg shadow-gray-400">

            <h1 className="text-white font-bold text-4xl mb-4 text-center">SOBRE NOSOTROS</h1>
            <div className="flex flex-col lg:flex-row">
                <div className=" w-full lg:w-1/2 pr-8">
                    <p className="text-white text-center  md:text-justify mb-4">
                        Bienvenido a Covirnet, tu proveedor de servicios de internet de confianza. En Covirnet, estamos comprometidos a brindarte una experiencia de conexión excepcional, diseñada para satisfacer tus necesidades y superar tus expectativas.
                    </p>
                    <div className="lg:flex lg:flex-row flex-wrap space-x-4 hidden">
                        <div className="bg-white rounded-lg p-4 flex-1 w-1/2">
                            <p className="text-gray-800">Desde nuestro inicio, nos hemos dedicado a ofrecer servicios de internet de alta calidad y confiabilidad a nuestros clientes.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 flex-1 w-1/2">
                            <p className="text-gray-800">Nuestra misión es simple: proporcionarte el acceso a internet que necesitas para mantenerte conectado con el mundo, ya sea en casa, en la oficina o en movimiento.</p>
                        </div>

                    </div>
                    <div className="bg-white rounded-lg p-4 mt-4 hidden lg:block">
                        <ul className="text-gray-600 list-disc pl-6 mt-2">
                            <li>En Covirnet, valoramos la satisfacción del cliente por encima de todo. Nos esforzamos por ofrecer un servicio excepcional, respaldado por un equipo de atención al cliente dedicado y accesible. Tu satisfacción y comodidad son nuestra prioridad número uno.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex lg:flex-row lg:justify-center lg:items-center w-full lg:w-1/2">
                    <Image
                        src="/images/Hero/logo_hero_image.svg"
                        width={400}
                        height={400}
                        alt="Logo"
                        className="m-auto "
                    />
                </div>
            </div>

        </section>
    );
}


// sm: pantallas de movil
// md: pantallas de tablet
// lg: pantallas de escritorio
// xl: pantallas super grandes

