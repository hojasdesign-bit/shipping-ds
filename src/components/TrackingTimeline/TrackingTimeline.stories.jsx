import { TrackingTimeline } from './TrackingTimeline.jsx';
const checkpoints = [
  { label: 'Paquete demo recibido', date: 'Día 1 demo', place: 'Casillero demo', state: 'done' },
  { label: 'En tránsito demo', date: 'Día 3 demo', place: 'Ruta demo', state: 'current' },
  { label: 'Entrega demo', date: 'Pendiente demo', place: 'Destino demo', state: 'pending' },
];
export default { title: 'Páginas internas/TrackingTimeline', component: TrackingTimeline };
export const Básico = { args: { checkpoints } };
