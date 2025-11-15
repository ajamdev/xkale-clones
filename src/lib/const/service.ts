import type { Service } from "@/lib/type/services";

export const SERVICE: Service[]=[
  {
    id: "consulting-cx",
    name: "Consultoría CX" ,
    figureSrc: "https://xkale.com/wp-content/uploads/2025/07/cx-experiencia-img.jpg",
  },
  {
    id:"service-crm",
    name:"CRM de Servicio",
    figureSrc:"https://xkale.com/wp-content/uploads/2025/07/ciberseguridad-img.jpg"
  },
  {
    id:"voice-client-analytics",
    name:"Voz y Analítica del Cliente",
    figureSrc:"https://xkale.com/wp-content/uploads/2025/07/aliados-img.jpg"
  },
  {
    id:"ox",
    name:"Orquestador de experiencia",
    figureSrc:"https://xkale.com/wp-content/uploads/2025/07/img.jpg"
  }
] as const;