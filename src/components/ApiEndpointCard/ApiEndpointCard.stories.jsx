import { ApiEndpointCard } from './ApiEndpointCard.jsx';
export default { title: 'Páginas internas/ApiEndpointCard', component: ApiEndpointCard };
export const Get = { args: { method: 'GET', path: '/v1/envios/demo', description: 'Ejemplo demo: consulta un envío de ejemplo.', example: '{ "codigo": "GA-DEMO-1234", "estado": "En tránsito demo" }' } };
export const Post = { args: { method: 'POST', path: '/v1/envios/demo', description: 'Ejemplo demo: crea un envío de ejemplo.', example: '{ "ok": true, "codigo": "GA-DEMO-1234" }' } };
