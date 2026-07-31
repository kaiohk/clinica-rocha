"use client";
import Image from "next/image";
import { WhatsAppSVG } from "./";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Início" },
    { label: "Sobre" },
    { label: "Serviços" },
    { label: "Agenda" },
    { label: "Contato" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 min-w-screen h-28 flex items-center justify-center text-mainwhite ${
        isScrolled
          ? "bg-mainwhite/95 backdrop-blur-lg shadow-[0_2px_24px_rgba(2,84,78,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-full flex">
        <Image src="/home/card.png" alt="" width={150} height={20} />
        <div className="items-center w-full flex justify-center">
          <ul
            className={`flex gap-6 ${isScrolled ? "text-secondary" : "text-mainwhite"}`}
          >
            {navItems.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div className="flex bg-secondary items-center justify-center h-12 px-5 rounded-md my-6 hover:bg-secondary/80 custom-transform">
          <a
            href="https://wa.me/5511970465837?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
            className="flex items-center gap-2"
          >
            <WhatsAppSVG className="size-4" />
            <span className="whitespace-nowrap">Entre em contato</span>
          </a>
        </div>
      </div>
    </div>
  );
}
