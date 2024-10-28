import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { UserIconPlaceholder } from "../icons/user-placeholder-icon";
import { SearchIcon } from "../icons/search-icon";
import { LogoIcon } from "../icons/logo-icon";
import { MenuIcon } from "../icons/menu-icon";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const renderRoutes = () =>
  ROUTES.map((route) => (
    <Link
      href={route.url}
      key={route.name}
      className="hover:text-greeny-text min-w-fit hover:underline"
    >
      {route.name}
    </Link>
  ));

export function Header() {
  return (
    <div className="flex justify-between sm:pl-40 h-16 items-center shadow-md px-4">
      <LogoIcon className="sm:hidden" />
      <nav className="hidden sm:flex gap-6 text-base font-medium">
        {renderRoutes()}
      </nav>
      <div className="flex gap-6">
        <SearchIcon />
        <UserIconPlaceholder className="hidden sm:block" />

        <Popover className="relative">
          <PopoverButton>
            <MenuIcon className="block sm:hidden" />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="flex sm:hidden flex-col gap-6 shadow text-base font-medium bg-white rounded-xl border border-greeny-text p-4"
          >
            <nav className="flex flex-col">{renderRoutes()}</nav>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
