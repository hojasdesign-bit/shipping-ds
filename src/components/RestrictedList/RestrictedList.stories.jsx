import { RestrictedList } from './RestrictedList.jsx';
const items = [{ name: 'Artículo demo A', reason: 'Ejemplo: requiere revisión demo.', level: 'restringido' }, { name: 'Artículo demo B', reason: 'Ejemplo: no se acepta en demo.', level: 'prohibido' }];
export default { title: 'Páginas internas/RestrictedList', component: RestrictedList };
export const Básico = { args: { items } };
