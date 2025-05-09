import BrandLogo from "@landing/presentation/components/shared/brand-logo/brand-logo";
import { ModeToggle } from "@landing/presentation/components/shared/theme-switcher/theme-swticher";
import { cn } from "@/lib/utils";
import NavbarItem from "@/modules/landing/presentation/components/shared/navbar/components/navbar-item/navbar-item";
import LandingContainer from "../landing-container/landing-container";
import { NAVBARITEMS } from "@/modules/landing/presentation/constants/nav-bar-items.constant";
import MobileNavbar from "./components/mobile-menu/mobile-navbar";
import { ContactDialog } from "../contact/first-contact-dialog";

interface LandingNavbarProps {
  className?: string;
}

export default function LandingNavbar(props: LandingNavbarProps) {
  return (
    <LandingContainer
      className={cn(
        "flex w-full justify-between gap-y-3 relative flex-wrap lg:flex-nowrap items-center pt-3",
        {
          [`${props.className}`]: !!props.className,
        }
      )}
    >
      <BrandLogo mode="horizontal" />
      <nav className="flex-grow justify-center md:flex hidden">
        <LandingNavBarItems items={NAVBARITEMS} />
      </nav>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <MobileNavbar />
        <ContactDialog
          className="hidden md:flex"
          buttonText="Contacto"
        ></ContactDialog>
      </div>
    </LandingContainer>
  );
}

interface LandingNavBarItemsProps {
  className?: string;
  items: typeof NAVBARITEMS;
}

export function LandingNavBarItems(props: LandingNavBarItemsProps) {
  return (
    <ul
      className={cn("flex items-center gap-x-4 font-bold", {
        [`${props.className}`]: !!props.className,
      })}
    >
      {props?.items.map((item) => {
        return <NavbarItem navBarItem={item} key={item.name}></NavbarItem>;
      })}
    </ul>
  );
}
