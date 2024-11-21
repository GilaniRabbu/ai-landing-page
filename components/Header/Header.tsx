import React from "react";
import LogoIcon from "@/public/logo.svg";
import MenuIcon from "@/public/icon-menu.svg";
import Button from "@/components/Button";

const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="w-10 h-10 rounded-lg inline-flex justify-center items-center border border-white/15">
              <LogoIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a className="text-white/70 transition hover:text-white" href="#">
                Features
              </a>
              <a className="text-white/70 transition hover:text-white" href="#">
                Developers
              </a>
              <a className="text-white/70 transition hover:text-white" href="#">
                Pricing
              </a>
              <a className="text-white/70 transition hover:text-white" href="#">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join WaitList</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
