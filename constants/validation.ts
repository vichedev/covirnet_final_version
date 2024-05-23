import * as Yup from "yup"

export const formSchema = Yup.object({
    correo: Yup.string().required("This field is required").email("This is not a valid email").test("domain-test", "Domain not allowed", (value) => {
        const allowedDomains = ["gmail.com", "outlook.com", "yahoo.com"]
        const domain = value.split("@",)[1]
        return allowedDomains.includes(domain)
    }),
    mensaje: Yup.string().required("This field is required").min(10, "Yup must type at least 10 words")
})