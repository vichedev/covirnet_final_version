import * as Yup from "yup";

export const formSchema = Yup.object({
  correo: Yup.string()
    .trim()
    .required("El correo es obligatorio")
    .email("Ingresa un correo válido"),
  mensaje: Yup.string()
    .trim()
    .required("El mensaje es obligatorio")
    .min(10, "Escribe al menos 10 caracteres")
    .max(2000, "El mensaje es demasiado largo (máx. 2000 caracteres)"),
});
