"use client";
import React from "react";
import handleLandingElementIntoView from "@/modules/shared/presentation/utils/handle-into-view/handle-element-into-view";
import Link from "next/link";

interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
}

// Supports both #section and normal links
const AnchorLink = React.forwardRef<HTMLAnchorElement, AnchorLinkProps>(
  ({ href, offset = 0, children, className = "", ...rest }, ref) => {
    const isAnchor = href.startsWith("#") || (href.startsWith("/") && href.includes("#"));

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isAnchor) {
        const hashIndex = href.indexOf("#");
        if (hashIndex !== -1) {
          e.preventDefault();
          const id = href.substring(hashIndex + 1);     
          handleLandingElementIntoView(id, offset);
          // Update hash in URL without scrolling
          window.history.pushState(null, "", href);
        }
      }
      if (rest.onClick) rest.onClick(e);
    };

    return (
      <Link   
        href={href}
        ref={ref}
        className={className}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Link>
    );
  }
);
AnchorLink.displayName = "AnchorLink";

export default AnchorLink;
