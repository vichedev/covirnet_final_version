export const WHATSAPP_NUMBER = "593959884635";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const contactInfo = {
  phone: "+593 95 988 4635",
  phoneHref: "tel:+593959884635",
  salesEmail: "covir.net@gmail.com",
  supportEmail: "covirnetsoporte@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/PfmkTYPABR6estif7",
};
