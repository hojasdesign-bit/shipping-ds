import { Input } from './Input.jsx';
export default { title: 'Núcleo/Input', component: Input };
export const Básico = { args: { label: 'Correo demo', placeholder: 'tu@ejemplo.com', type: 'email' } };
export const ConIcono = { args: { label: 'Buscar', icon: 'search', placeholder: 'Buscar en la demo' } };
export const ConAyuda = { args: { label: 'Código de envío', placeholder: 'GA-DEMO-1234', hint: 'Solo demo: cualquier código muestra un ejemplo.' } };
export const ConError = { args: { label: 'Código de envío', placeholder: 'GA-DEMO-1234', error: 'Escribe un código para continuar.' } };
