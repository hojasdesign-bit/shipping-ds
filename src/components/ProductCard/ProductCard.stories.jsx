import { ProductCard } from './ProductCard.jsx';
export default { title: 'Comercio/ProductCard', component: ProductCard };
export const Básico = { args: { name: 'Combo demo familiar', oldPrice: '$50.00', price: '$39.00', discount: 22, stockLeft: 5 } };
export const SinDescuento = { args: { name: 'Producto demo', oldPrice: '$20.00', price: '$20.00', stockLeft: 12 } };
export const Favorito = { args: { name: 'Combo demo familiar', oldPrice: '$50.00', price: '$39.00', discount: 22, stockLeft: 3, favorite: true } };
