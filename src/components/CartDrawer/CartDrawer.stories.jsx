import { CartDrawer } from './CartDrawer.jsx';
const items = [{ name: 'Combo demo familiar', price: 39, qty: 1 }, { name: 'Producto demo', price: 20, qty: 2 }];
export default { title: 'Páginas internas/CartDrawer', component: CartDrawer };
export const Abierto = { args: { open: true, items } };
export const Vacío = { args: { open: true, items: [] } };
