"use client";

import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  Sheet,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { NAVBARITEMS } from "@/modules/landing/presentation/constants/nav-bar-items.constant";
import Icon, {
  AppIcons,
} from "@/modules/shared/presentation/components/icons/main-icon/main-icon";
import BrandLogo from "../../../brand-logo/brand-logo";
import { LandingNavBarItems } from "../../landing-navbar";
import { useLandingNavStore } from "@/modules/landing/presentation/stores/nav-bar.store";

export default function MobileNavbar() {
  const isOpen = useLandingNavStore((state) => state.isOpenMobileMenu);
  const setMobileMenu = useLandingNavStore(
    (state) => state.setIsOpenMobileMenu
  );

  return (
    <Sheet onOpenChange={setMobileMenu} open={isOpen}>
      <SheetTrigger className="md:hidden">
        <Icon name={AppIcons.Menu} size={24} />
      </SheetTrigger>
      <SheetContent className="md:hidden w-[250px]" side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <BrandLogo className="mx-auto" mode="horizontal" />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="w-full flex justify-center mt-5">
          <LandingNavBarItems
            className="flex flex-col gap-y-4"
            items={NAVBARITEMS}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
