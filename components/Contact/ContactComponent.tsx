"use client";

import { Formik, Form, ErrorMessage, Field } from "formik";
import { formSchema } from "@/constants/validation";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ValuesProps {
  correo: string;
  mensaje: string;
}

export default function ContactComponent() {
  async function handleSubmit(values: ValuesProps, { resetForm }: any) {
    try {
      await axios.post("/api/email", { values });
      toast.success("Correo enviado.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      resetForm();
    } catch (error) {
      toast.error("Error al enviar correo", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }

  return (
    <>
      <section className="flex flex-col px-5 gap-5 md:justify-center md:items-center  lg:gap-24 lg:px-5 lg:py-28 w-[95%] m-auto bg-[url(/images/Hero/background_hero_image.svg)] bg-no-repeat bg-cover bg-fixed mt-5 mb-28 rounded-lg shadow-lg shadow-gray-400">
        {/*ZONA DE IMAGEN FORMULARIO*/}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-full">
          <div className="flex justify-center items-center w-full lg:w-1/2 pr-8">
            <Image
              src="/images/Hero/logo_hero_image.svg"
              width={400}
              height={400}
              alt="Logo"
              className="m-auto "
            />
          </div>

          {/* ZONA DEL FORMULARIO */}
          <div className="flex lg:flex-row lg:justify-center lg:items-center w-full lg:w-1/2">
            <Formik
              initialValues={{
                correo: "",
                mensaje: "",
              }}
              onSubmit={(values, { resetForm }) =>
                handleSubmit(values, { resetForm })
              }
              validationSchema={formSchema}
            >
              {({ resetForm, isSubmitting }) => {
                return (
                  <Form className="flex flex-col gap-5 w-full lg:w-[70%] lg:m-auto p-5 shadow-sm shadow-gray-600 rounded-lg">
                    <h1 className="text-center text-2xl font-bold">
                      Escribenos si tienes alguna duda!
                    </h1>

                    <Field
                      name="correo"
                      className="p-2 h-16 shadow-md shadow-gray-400 rounded-lg"
                      placeholder="mi_correo@gmail.com"
                    />
                    <ErrorMessage name="correo" />
                    <Field
                      as="textarea"
                      name="mensaje"
                      className="p-2 h-20 shadow-md shadow-gray-400 rounded-lg"
                      placeholder="Escribe tu mensaje aquí."
                    />
                    <ErrorMessage name="mensaje" />
                    <button
                      type="submit"
                      className="bg-black text-white font-bold p-3 rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-1">
                          <svg
                            className="mr-3 h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        "Enviar"
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
      {/* ZONA MAPA */}
      <section className="flex flex-col justify-center gap-32 h-40 mt-10 mb-28 w-[95%] lg:h-[100vh] lg:px-24 lg:py-20 m-auto shadow-sm shadow-gray-500 rounded-lg">
        <h1 className="font-bold text-3xl lg:text-7xl text-center">
          ¿Dónde encontrarnos?
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d755.2812717488915!2d-80.42697401406828!3d-1.5533277730576114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMzMnMTEuNCJTIDgwwrAyNSczNi4xIlc!5e0!3m2!1ses-419!2sec!4v1716329874891!5m2!1ses-419!2sec"
          width="600"
          height="100%"
          className="border:0; w-full"
          loading="lazy"
        ></iframe>
      </section>
      <ToastContainer />
    </>
  );
}
