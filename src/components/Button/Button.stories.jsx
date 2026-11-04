import { Button } from './Button.jsx';
export default { title: 'Núcleo/Button', component: Button, argTypes: { variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'brand'] }, size: { control: 'select', options: ['sm', 'md', 'lg'] } } };
export const Principal = { args: { children: 'Empezar ahora', arrow: true } };
export const Secundario = { args: { variant: 'secondary', children: 'Ver precios' } };
export const Fantasma = { args: { variant: 'ghost', children: 'Cancelar' } };
export const Marca = { args: { variant: 'brand', children: 'Gran Azul' } };
export const ConIcono = { args: { icon: 'package', children: 'Rastrear envío' } };
export const Deshabilitado = { args: { children: 'No disponible', disabled: true } };
export const Tamaños = { render: () => (<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}><Button size="sm">Pequeño</Button><Button size="md">Mediano</Button><Button size="lg">Grande</Button></div>) };
