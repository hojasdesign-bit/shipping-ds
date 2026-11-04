import { ServiceAccordion } from './ServiceAccordion.jsx';
const items = [{ title: 'Recepción demo', text: 'Texto demo: recibimos el paquete de ejemplo en el casillero.' }, { title: 'Preparación demo', text: 'Texto demo: revisamos, empacamos y etiquetamos el ejemplo.' }, { title: 'Envío demo', text: 'Texto demo: sale hacia el destino de ejemplo con rastreo.' }];
export default { title: 'Envíos/ServiceAccordion', component: ServiceAccordion };
export const Básico = { args: { items } };
export const SegundoAbierto = { args: { items, defaultOpen: 1 } };
