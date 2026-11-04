import { TrackingSearch } from './TrackingSearch.jsx';
export default { title: 'Envíos/TrackingSearch', component: TrackingSearch };
export const Básico = { args: {} };
export const ConAcción = { args: { onTrack: (code) => alert('Demo: se rastrearía ' + (code || 'GA-DEMO-1234')) } };
