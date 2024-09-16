import Logo from "@/assets/images/logo.png";
import MenuIcon from "@/assets/icons/menu.svg";
import { useState } from "react";

/**
 * This is a Header component.
 */
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id?: string) => {
    const headerOffset = 72;

    if (!id) {
      window?.scrollTo({
        behavior: "smooth",
        top: headerOffset,
      });
      return;
    }

    const element = document.getElementById(id);
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window?.scrollTo({
      behavior: "smooth",
      top: offsetPosition,
    });
  };

  return (
    <div className="sticky top-0 z-50 flex justify-center bg-white py-3 shadow-sm">
      <div className="flex max-w-screen-lg flex-1 justify-between p-3 md:flex-row">
        <button className="flex items-center gap-3" onClick={() => scrollTo()}>
          <img src={Logo} alt="" width={20} />
          <p className="font-semibold">Strategic planing</p>
        </button>

        <div className="flex sm:hidden">
          <button
            aria-label="open menu"
            className={isOpen ? "rotate-90" : ""}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={MenuIcon} alt="Menu" width={20} />
          </button>
        </div>

        <div
          className={
            (isOpen
              ? "absolute right-3 top-24 flex rounded border border-slate-300 bg-white p-10 shadow-lg"
              : "hidden") + " flex-col gap-3 sm:flex sm:flex-row"
          }
        >
          <button
            className="hover:text-blue-600"
            onClick={() => scrollTo("introduction")}
          >
            Introduction
          </button>

          <button
            className="hover:text-blue-600"
            onClick={() => scrollTo("diagnostic")}
          >
            Diagnostic
          </button>

          <button
            className="hover:text-blue-600"
            onClick={() => scrollTo("identity")}
          >
            Identity
          </button>

          <button
            className="hover:text-blue-600"
            onClick={() => scrollTo("objectives")}
          >
            Objectives
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
