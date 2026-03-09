"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3, HiUser } from "react-icons/hi2";
import Image from "next/image";
import { usePrivy } from "@privy-io/react-auth";
import { usePathname } from "next/navigation";

import { heroDetails } from "@/data/hero";
import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";
import ContactModal from "./ContactModal";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { login, authenticated, ready, user } = usePrivy();
  const pathname = usePathname();
  const isPlatformPage = pathname === "/platform";

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
        scrolled ? "py-2 pt-3" : "py-4 pt-5"
      }`}
    >
      <Container className="!px-0">
        <nav
          className={`relative transition-all duration-300 ${
            scrolled
              ? "bg-[#fafaf5] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)]"
              : "bg-[#fafaf5] border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(46,46,46,1)]"
          } mx-auto flex justify-between items-center py-3 p-5 md:py-4`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`relative transition-all duration-300 ${
                scrolled ? "w-8 h-8" : "w-10 h-10"
              }`}
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"></div>
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
              <span
                className={`font-bold text-foreground transition-all duration-300 ${
                  scrolled ? "text-lg" : "text-xl"
                }`}
              >
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
                  className="relative px-4 py-2 text-foreground font-semibold hover:text-secondary transition-colors group"
                >
                  <span className="relative z-10">{item.text}</span>
                </Link>
              </li>
            ))}
            {isPlatformPage && ready && !authenticated && (
              <li>
                <button
                  onClick={login}
                  className="relative text-foreground font-bold px-6 py-2.5 border-2 border-foreground bg-[#fafaf5] hover:bg-primary transition-all duration-200"
                >
                  Login
                </button>
              </li>
            )}
            {authenticated && (
              <li>
                <Link
                  href="/profile"
                  className="flex items-center justify-center w-12 h-12 bg-secondary text-white hover:bg-secondary/80 transition-all duration-200 border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  aria-label="Profile"
                >
                  <HiUser className="w-6 h-6" />
                </Link>
              </li>
            )}
            <li>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="relative ml-2 text-foreground font-bold px-6 py-2.5 border-2 border-foreground bg-primary hover:bg-secondary hover:text-white transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                Contact Us
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="relative bg-primary text-foreground focus:outline-none border-2 border-foreground w-10 h-10 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]"
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
          <div className="bg-[#fafaf5] border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] overflow-hidden">
            <ul className="flex flex-col p-2">
              {menuItems.map((item, index) => (
                <li key={item.text}>
                  <Link
                    href={item.url}
                    className="flex items-center gap-3 text-foreground font-semibold px-4 py-3 hover:bg-secondary/10 border-2 border-transparent hover:border-foreground transition-all"
                    onClick={toggleMenu}
                  >
                    <div className="w-1.5 h-1.5 bg-foreground"></div>
                    {item.text}
                  </Link>
                </li>
              ))}

              {isPlatformPage && ready && !authenticated && (
                <li className="mt-2 px-2">
                  <button
                    onClick={() => {
                      login();
                      toggleMenu();
                    }}
                    className="flex items-center justify-center text-foreground font-bold bg-[#fafaf5] border-2 border-foreground px-5 py-3 transition-all duration-200 w-full"
                  >
                    Login
                  </button>
                </li>
              )}

              {authenticated && (
                <li className="mt-2 px-2">
                  <Link
                    href="/profile"
                    onClick={toggleMenu}
                    className="flex items-center justify-center w-full py-3 bg-secondary text-white font-bold border-2 border-foreground hover:bg-secondary/80 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <HiUser className="w-5 h-5" />
                      <span>Profile</span>
                    </div>
                  </Link>
                </li>
              )}

              <li className="mt-2 px-2 pb-2">
                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    toggleMenu();
                  }}
                  className="flex items-center justify-center text-foreground font-bold bg-primary border-2 border-foreground px-5 py-3 shadow-[2px_2px_0px_0px_rgba(46,46,46,1)] hover:shadow-[4px_4px_0px_0px_rgba(46,46,46,1)] transition-all duration-200 w-full"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </header>
  );
};

export default Header;
