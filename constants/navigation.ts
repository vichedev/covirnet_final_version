interface NavigationProps {
  id: number;
  path: string;
  title: string;
  icon?: string;
}

export const navigationLinks: NavigationProps[] = [
  {
    id: 1,
    path: "/",
    title: "Inicio",
    // icon: "/icons/home.svg"
  },
  {
    id: 2,
    path: "/pricing",
    title: "Precios",
    // icon: "/icons/pricing.svg"
  },
  {
    id: 3,
    path: "/documents",
    title: "Documentos",
    // icon: "/icons/document.svg"
  },
  {
    id: 4,
    path: "/quality",
    title: "Calidad",
    // icon: "/icons/person.svg"
  },
  {
    id: 5,
    path: "/contact",
    title: "Contacto",
    // icon: "/icons/info.svg"
  },
];
