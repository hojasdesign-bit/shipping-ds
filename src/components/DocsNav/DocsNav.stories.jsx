import { DocsNav } from './DocsNav.jsx';
const sections = [{ title: 'Guías demo', links: ['Empezar demo', 'Envíos demo', 'Rastreo demo'] }, { title: 'API demo', links: ['Crear envío demo', 'Consultar envío demo'] }];
export default { title: 'Páginas internas/DocsNav', component: DocsNav };
export const Básico = { args: { sections, active: 'Empezar demo' } };
