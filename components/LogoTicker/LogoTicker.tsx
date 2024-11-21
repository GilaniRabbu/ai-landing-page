import React from "react";
import Image from "next/image";
import acmeLogo from "@/public/logo-acme.png";
import apexLogo from "@/public/logo-apex.png";
import celestialLogo from "@/public/logo-celestial.png";
import echoLogo from "@/public/logo-echo.png";
import pulseLogo from "@/public/logo-pulse.png";
import quantumLogo from "@/public/logo-quantum.png";

const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14">
              {[
                acmeLogo,
                pulseLogo,
                echoLogo,
                celestialLogo,
                apexLogo,
                quantumLogo,
              ].map((logo) => (
                <Image
                  src={logo.src}
                  key={logo.src}
                  alt={logo.src}
                  className="w-auto h-6 mr-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
