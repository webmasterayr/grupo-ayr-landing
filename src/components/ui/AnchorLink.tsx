'use client';
import React from 'react';
import handleLandingElementIntoView from '@/modules/shared/presentation/utils/handle-into-view/handle-element-into-view';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
}

// Supports both #section and normal links
const AnchorLink = React.forwardRef<HTMLAnchorElement, AnchorLinkProps>(({ href, offset = 0, children, className = '', ...rest }, ref) => {
  const isAnchor = href.startsWith('#') || (href.startsWith('/') && href.includes('#'));

  const pathName = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor && pathName == '/') {
      const hashIndex = href.indexOf('#');
      if (hashIndex !== -1) {
        e.preventDefault();
        const id = href.substring(hashIndex + 1);
        handleLandingElementIntoView(id, offset);
      }
    }
  };

  return (
    <Link href={href} ref={ref} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
});
AnchorLink.displayName = 'AnchorLink';

export default AnchorLink;
