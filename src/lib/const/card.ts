import type { Card } from "../type/card";

export const Cards:Card[]=[
  {
    id: "card-cx",    
    imgSrc: "https://xkale.com/wp-content/uploads/2025/09/cx-img.jpg",
    imgAlt: "Ilustración de experiencia del cliente mostrando interacción entre usuario y servicios digitales",
    title: "Experiencia del Cliente",
    description: "Diseñamos y construimos experiencias, escuchando la voz de tus clientes para atraerlos, atenderlos y fidelizarlos, apoyados en servicios consultivos, plataformas y programas de Experience Management que transforman tus resultados de negocio",
    className:"bg-verde-planta"
  },
  {
    id: "card-cyber",    
    imgSrc: "https://xkale.com/wp-content/uploads/2025/09/ciber-img.jpg",
    imgAlt: "Ilustración de ciberseguridad mostrando un escudo protegiendo datos digitales",
    title: "Ciberseguridad",
    description: "Blindamos tu modelo de negocio, reduciendo los riesgos digitales y maximizando la resiliencia de tu organización, como medio para alcanzar tus objetivos de negocio.",
    className:"bg-azul-cielo"
  }
] as const;