import { IntegrationStrip } from './IntegrationStrip.jsx';
const items = [{ name: 'Tienda Demo Norte', icon: 'building' }, { name: 'Venta Directa Demo', icon: 'cart' }, { name: 'API Gran Azul Demo', icon: 'globe' }];
export default { title: 'Comercio/IntegrationStrip', component: IntegrationStrip };
export const Básico = { args: { items } };
