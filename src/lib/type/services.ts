type ServicesId =
  | "consulting-cx"
  | "service-crm"
  | "voice-client-analytics"
  | "ox"

type ServiceName =
  | "Consultoría CX"
  | "CRM de Servicio"
  | "Voz y Analítica del Cliente"
  | "Orquestador de experiencia"

export interface Service {
  id: ServicesId
  name: ServiceName
  figureSrc: string
}