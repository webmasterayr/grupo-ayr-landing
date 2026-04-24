'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLandingNavStore } from '../../../stores/nav-bar.store';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  width?: number;
  height?: number;
  mode: 'horizontal' | 'vertical';
  /** Use 'light' for dark backgrounds (white logo), 'dark' for light backgrounds (colored logo) */
  variant?: 'dark' | 'light';
  logoClassName?: string;
  dotClassName?: string;
  letterClassName?: string;
  onClick?: () => void;
}

export default function BrandLogo(props: BrandLogoProps) {
  const pathname = usePathname();

  const setIsOpenMobileMenu = useLandingNavStore((state) => state.setIsOpenMobileMenu);

  const getComponent = () => {
    switch (props.mode) {
      case 'horizontal':
        return BrandLogoHorizontal;
      case 'vertical':
        return BrandLogoVertical;
      default:
        return BrandLogoHorizontal;
    }
  };

  const Component = getComponent();

  return (
    <Link
      href={pathname === '/' ? '' : '/'}
      onClick={() => {
        setIsOpenMobileMenu(false);
      }}
    >
      <Component {...props} />
    </Link>
  );
}

function BrandLogoVertical(props: BrandLogoProps) {
  const logoSrc = props.variant === 'light'
    ? '/logo grupo ayr blanco.svg'
    : '/logo grupo ayr.svg';

  return (
    <Image
      src={logoSrc}
      alt="Grupo AYR Logo Vertical"
      width={props.width || 120}
      height={props.height || 40}
      className={props.className}
      style={{ objectFit: 'contain' }}
    />
  );
}

function BrandLogoHorizontal(props: BrandLogoProps) {
  const logoSrc = props.variant === 'light'
    ? '/logo grupo ayr blanco.svg'
    : '/logo grupo ayr.svg';

  return (
    <Image
      src={logoSrc}
      alt="Grupo AYR Logo Horizontal"
      width={props.width || 120}
      height={props.height || 40}
      className={props.className}
      style={{ objectFit: 'contain' }}
    />
  );
}
