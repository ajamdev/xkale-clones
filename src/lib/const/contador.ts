import Cargar  from "@/assets/iconos/icon/carga.svg"
import Flecha  from "@/assets/iconos/icon/flecha.svg"
import Times  from "@/assets/iconos/icon/times-x.svg"
import type { ContadorProps } from "../type/contador";

export const contadorData: ContadorProps[] = [
  {
    icon: Cargar,
    count: 150,
    title: "Clientes en América Latina",
    showPlus: true,
    showPorcentaje: false,
  },
  {
    icon: Flecha,
    count: 73,
    title: "NPS 2024",
    showPlus: false,
    showPorcentaje: true,
  },
  {
    icon: Times,
    count: 20,
    title:"Años de experiencia transformando el negocio de nuestros clientes",
    showPlus: true,
    showPorcentaje: false,
  }
]