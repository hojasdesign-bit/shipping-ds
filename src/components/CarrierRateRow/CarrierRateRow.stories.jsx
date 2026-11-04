import { CarrierRateRow } from './CarrierRateRow.jsx';
export default { title: 'Envíos/CarrierRateRow', component: CarrierRateRow };
export const Básico = { args: { carrier: 'Paquetería Demo A', service: 'Estándar demo', days: '5-7', price: '$18.50' } };
export const Destacado = { args: { carrier: 'Paquetería Demo B', service: 'Exprés demo', days: '3-4', price: '$16.20', featured: true } };
