import React from "react";
import Logo from "@/public/logo.svg";
import XSocial from "@/public/social-x.svg";
import IGSocial from "@/public/social-instagram.svg";
import YTSocial from "@/public/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="w-6 h-6" />
            <h2 className="font-medium">AI Startup Landing Page</h2>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-xs md:text-sm text-white/70 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-xs md:text-sm text-white/70 hover:text-white transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-xs md:text-sm text-white/70 hover:text-white transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-xs md:text-sm text-white/70 hover:text-white transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-xs md:text-sm text-white/70 hover:text-white transition"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="cursor-pointer transition text-white/70 hover:text-white" />
            <IGSocial className="cursor-pointer transition text-white/70 hover:text-white" />
            <YTSocial className="cursor-pointer transition text-white/70 hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
