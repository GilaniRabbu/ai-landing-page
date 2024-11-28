"use client";

import React, { useState } from "react";
import LogoIcon from "@/public/logo.svg";
import MenuIcon from "@/public/icon-menu.svg";
import Button from "@/components/Button";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

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
            <button onClick={toggleNav} className="md:hidden">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-20 w-80 p-6 bg-gray-900 transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={toggleNav}
          className="absolute top-4 left-6 text-white/70 transition hover:text-white"
        >
          x
        </button>
        <nav className="flex flex-col gap-6 mt-12 text-sm">
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

      {/* Overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleNav}
        ></div>
      )}
    </header>
  );
};

export default Header;
