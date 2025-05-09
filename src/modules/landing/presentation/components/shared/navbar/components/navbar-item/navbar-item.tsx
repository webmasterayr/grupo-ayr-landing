"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NAVBARITEMS } from "../../../../../constants/nav-bar-items.constant";
import { useLandingNavStore } from "../../../../../stores/nav-bar.store";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  className?: string;
  navBarItem: (typeof NAVBARITEMS)[0];
}
export default function NavbarItem({ navBarItem, className }: NavbarItemProps) {
  const setMobileMenu = useLandingNavStore(
    (state) => state.setIsOpenMobileMenu
  );
  const pathName = usePathname();
  return (
    <Link
      href={
        pathName === "/landing" && !!navBarItem.isScrollToId
          ? `#${navBarItem.idSection}`
          : !!navBarItem.isScrollToId
          ? `/landing#${navBarItem.idSection}`
          : navBarItem.href
      }
      className={cn("cursor-pointer hover:underline", {
        [`${className}`]: !!className,
      })}
      onClick={(event) => {
        setMobileMenu(false);
      }}
    >
      {navBarItem.name}
    </Link>
  );
}
