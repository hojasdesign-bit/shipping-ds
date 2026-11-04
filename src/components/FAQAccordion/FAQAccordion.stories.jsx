import { FAQAccordion } from './FAQAccordion.jsx';
const items = [{ question: '¿Esto es un servicio real?', answer: 'No: esta es una demo del sistema de diseño, sin backend ni pagos reales.' }, { question: '¿Cómo rastreo un envío demo?', answer: 'Escribe cualquier código demo en el rastreador y verás un estado de ejemplo.' }];
export default { title: 'Envíos/FAQAccordion', component: FAQAccordion };
export const Básico = { args: { items } };
