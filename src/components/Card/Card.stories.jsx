import { Card } from './Card.jsx';
export default { title: 'Núcleo/Card', component: Card, argTypes: { variant: { control: 'select', options: ['surface', 'marketplace', 'raised'] } } };
export const Superficie = { args: { children: 'Contenido de ejemplo en tarjeta oscura.' } };
export const Marketplace = { args: { variant: 'marketplace', children: 'Tarjeta clara del marketplace.' } };
export const Elevada = { args: { variant: 'raised', children: 'Tarjeta elevada con sombra.' } };
