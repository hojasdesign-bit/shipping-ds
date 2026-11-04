import React from 'react';
import {
  Airplane01Icon,
  ArrowDown01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Building01Icon,
  Cancel01Icon,
  CargoShipIcon,
  Chat01Icon,
  ChevronDownIcon,
  Clock01Icon,
  ContainerTruck01Icon,
  DeliveryBox01Icon,
  FavouriteIcon,
  FilterHorizontalIcon,
  GlobeIcon,
  HeadsetIcon,
  Home01Icon,
  Location01Icon,
  Mail01Icon,
  Menu01Icon,
  MinusSignIcon,
  PackageIcon,
  PlusSignIcon,
  QrCodeIcon,
  Search01Icon,
  Shield01Icon,
  ShoppingCart01Icon,
  StarIcon,
  Tick01Icon,
  UserIcon,
  Wallet01Icon,
} from '@hugeicons/core-free-icons';

const ICONS = {
  search: Search01Icon,
  package: PackageIcon,
  airplane: Airplane01Icon,
  ship: CargoShipIcon,
  truck: ContainerTruck01Icon,
  delivery: DeliveryBox01Icon,
  location: Location01Icon,
  building: Building01Icon,
  clock: Clock01Icon,
  shield: Shield01Icon,
  star: StarIcon,
  check: Tick01Icon,
  'arrow-right': ArrowRight01Icon,
  'arrow-left': ArrowLeft01Icon,
  'arrow-up-right': ArrowUpRight01Icon,
  'arrow-down': ArrowDown01Icon,
  'chevron-down': ChevronDownIcon,
  cancel: Cancel01Icon,
  plus: PlusSignIcon,
  minus: MinusSignIcon,
  home: Home01Icon,
  wallet: Wallet01Icon,
  user: UserIcon,
  menu: Menu01Icon,
  filter: FilterHorizontalIcon,
  mail: Mail01Icon,
  cart: ShoppingCart01Icon,
  heart: FavouriteIcon,
  globe: GlobeIcon,
  headset: HeadsetIcon,
  qr: QrCodeIcon,
  chat: Chat01Icon,
};

export const ICON_NAMES = Object.keys(ICONS);

/**
 * Icon — solo HugeIcons, estilo Stroke Rounded, grosor 1.8, currentColor,
 * rejilla 24×24. Los datos vienen del paquete oficial gratuito
 * (@hugeicons/core-free-icons, grosor por defecto 1.5) y aquí se normalizan
 * a 1.8. Tamaños de uso: 16 (botones/texto), 20 (controles) y 24 (navegación).
 */
export function Icon({ name, size = 24, label, className = '', ...rest }) {
  const data = ICONS[name];
  if (!data) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      className={className}
      style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
      {...rest}
    >
      {data.map(([tag, props]) => {
        const { key, ...attrs } = props || {};
        const Tag = tag;
        return <Tag key={key} {...attrs} stroke="currentColor" strokeWidth={1.8} />;
      })}
    </svg>
  );
}
