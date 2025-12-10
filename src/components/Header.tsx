"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import Image from "next/image";

import { heroDetails } from "@/data/hero";
import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2" 
          : "py-4"
      }`}
    >
      <Container className="!px-0">
        <nav 
          className={`relative rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/50"
              : "bg-white/80 backdrop-blur-sm shadow-md border border-gray-200/30"
          } mx-auto flex justify-between items-center py-3 p-5 md:py-4`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`relative transition-all duration-300 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            }`}>
              <div className="absolute inset-0rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <Image
                src={heroDetails.centerImageSrc}
                width={scrolled ? 32 : 40}
                height={scrolled ? 32 : 40}
                quality={100}
                priority={true}
                unoptimized={true}
                alt="Mintro Labs arrow"
                className="relative z-10 p-1 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className={`manrope font-bold text-foreground transition-all duration-300 ${
                scrolled ? "text-lg" : "text-xl"
              }`}>
                {siteDetails.siteName}
              </span>
              <span className="text-xs text-secondary font-semibold uppercase tracking-wider hidden md:block">
                Education, Reimagined
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="relative px-4 py-2 text-foreground font-semibold rounded-3xl hover:text-secondary transition-colors group"
                >
                  <span className="relative z-10">{item.text}</span>
                  <div className="absolute inset-0 bg-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="relative ml-2 text-foreground font-semibold px-6 py-2.5 rounded-full overflow-hidden group"
              >
                <span className="relative z-10 rounded-3xl ">
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100  transition-opacity duration-300 rounded-3xl"></div>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="relative bg-gradient-to-br from-primary to-primary text-foreground focus:outline-none rounded-xl w-10 h-10 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div id="mobile-menu" className="md:hidden mt-2 mx-4">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200/50 overflow-hidden">
            <ul className="flex flex-col p-2">
              {menuItems.map((item, index) => (
                <li key={item.text}>
                  <Link
                    href={item.url}
                    className="flex items-center gap-3 text-foreground font-semibold px-4 py-3 rounded-xl "
                    onClick={toggleMenu}
                  >
                    <div className="w-1.5 h-1.5 rounded-full "></div>
                    {item.text}
                  </Link>
                </li>
              ))}
              <li className="mt-2 px-2 pb-2">
                <Link
                  href="#cta"
                  className="flex items-center justify-center text-foreground font-semibold bg-gradient-to-r from-primary to-primary px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;