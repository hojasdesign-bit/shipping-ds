import { SectionHeading } from './SectionHeading.jsx';
export default { title: 'Núcleo/SectionHeading', component: SectionHeading, argTypes: { align: { control: 'select', options: ['center', 'left'] } } };
export const Centrado = { args: { eyebrow: 'Cómo funciona', title: 'Enviar con Gran Azul es simple', text: 'Texto demo propio: cuatro pasos, sin copiar el copy de los referentes.' } };
export const Alineado = { args: { align: 'left', eyebrow: 'Rastreo', title: 'Rastrea tu paquete', text: 'Demo: cualquier código muestra un estado de ejemplo.' } };
