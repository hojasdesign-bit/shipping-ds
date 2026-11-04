import { Icon, ICON_NAMES } from './Icon.jsx';

export default {
  title: 'Núcleo/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'select', options: ICON_NAMES },
    size: { control: 'select', options: [16, 20, 24] },
  },
};

export const Búsqueda = { args: { name: 'search', size: 24 } };
export const Paquete = { args: { name: 'package', size: 24 } };
export const Todos = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {ICON_NAMES.map((name) => (
        <span key={name} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4, fontSize: 12 }}>
          <Icon name={name} size={24} />
          {name}
        </span>
      ))}
    </div>
  ),
};
