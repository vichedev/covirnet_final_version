interface PricingProps {
    id: number
    title: string;
    price: string;
    megas: string;
    features: string[];
    legend: string;
    legendSize: number;
    buttonMessage?: string;
    buttonIcon?: string;
    buttonLink?: string;
    buttonColor?: string;
    image: string; 

}

export const pricing: PricingProps[] = [
    {
        id: 1,
        title: "Plan básico",
        price: "20",
        megas: "20",
        features: [
            "Ideal para actividades básicas en línea como navegación web, correo electrónico y redes sociales.",
            "Opción económica para aquellos que buscan un servicio calidad/precio",
            "Adecuado para hogares con pocos usuarios.",
            "Conexión estable y confiable para tareas cotidianas.",
        ],
        legend: "Nuevo",
        legendSize: 16,
        image: "/images/Hero/planbasico1.svg"
    },
    {
        id: 2,
        title: "Plan intermedio",
        price: "25",
        megas: "25",
        features: [
            "Mejora significativa en la velocidad con respecto al plan básico.",
            "Adecuado para hogares con múltiples usuarios que realizan actividades en línea simultáneamente.",
            "Asequible para la mayoría de los hogares.",
            "Ideal para aquellos que necesitan una conexión rápida y confiable para teletrabajo o educación en línea.",
        ],
        legend: "Nuevo",
        legendSize: 16,
        image: "/images/Hero/planintermedio.svg"
    },
    {
        id: 3,
        title: "Plan avanzado",
        price: "30",
        megas: "30",
        features: [
            "Opción sólida para aquellos que necesitan una conexión más rápida para actividades en línea intensivas.",
            "Alto rendimiento de internet.",
            "Para usuarios avanzados que necesitan una conexión rápida y estable para actividades exigentes en línea.",
            "Precio competitivo."
        ],
        legend: "Popular",
        legendSize: 32,
        image: "/images/Hero/planavanzado.svg"
    },
    {
        id: 4,
        title: "Plan tercera edad",
        price: "10",
        megas: "20",
        features: [
            "Diseñado específicamente para personas mayores a un precio muy asequible.",
            "Diseñada para actividades en línea como correos electrónicos, navegación web y videoconferencias.",
            "Ideal para aquellos que prefieren mantener costos bajos.",
            "Proporciona una conexión estable y confiable para que las personas mayores se mantengan conectadas.",
        ],
        legend: "Nuevo",
        legendSize: 16,
        image: "/images/Hero/plantercerae.svg"
    },
    {
        id: 5,
        title: "Plan discapacidad",
        price: "15",
        megas: "12",
        features: [
            "Diseñado para personas con discapacidades a un precio asequible.",
            "Velocidad de conexión suficiente para actividades en línea como comunicación, entretenimiento y educación.",
            "Proporciona acceso a internet a un costo más bajo.",
            "Incluye opciones de accesibilidad y soporte técnico especializado.",
        ],
        legend: "Nuevo",
        legendSize: 16,
        image: "/images/Hero/plandiscapa.svg"
    }
];
