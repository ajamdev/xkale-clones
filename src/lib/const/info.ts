import type { Info } from "../type/info";
import Search from "@/assets/buscar.svg"
import Mail from "@/assets/mail.svg"
import Phone from "@/assets/telefono.svg"
export const INFO: Info[] = [
  {
    id: 'identity',
    icon: {name: Search},
    title: 'Identificamos riesgos digitales que afectan a tu operación',
    description: 'A través de un análisis profundo, revelamos vulnerabilidades que podrían estar afectando tu operación sin que lo sepas.',
    className: 'bg-gris-escudo',
  },
  {
    id: 'expert',
    icon: {name: Mail},
    title: 'Conocimiento experto y tecnología de vanguardia que blindan tu modelo de negocio',
    description: 'Diseñamos soluciones estratégicas y personalizadas que aseguran la continuidad de tu negocio.',
    className: 'bg-verde-planta text-negro',
  },
  {
    id: 'partner',
    icon: {name: Phone},
    title: 'Te acompañamos en cada paso',
    description: 'Desde el diseño de la estrategia hasta la implementación operativa, aplicando metodologías ágiles y análisis basados en datos para garantizar el cumplimiento eficiente de los objetivos de tu negocio.',
    className: 'bg-azul-cielo text-blanco',
  },
]