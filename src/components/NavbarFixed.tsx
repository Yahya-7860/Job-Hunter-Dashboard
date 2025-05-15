"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { SpotlightEffect } from "./SpotlightEffect";
import SlidingCards from "../components/SlidingCards";
import { CompanyMarquee } from "./CompanyMarquee";
import { Footer } from "./Footer";
import Link from "next/link";
import ThemeToggle from "./ModeButton";

export function NavbarFixed() {
  const navItems = [
    {
      name: "Resume Tips",
      link: "/ResumeTips",
    },
    {
      name: "Resume Mistakes",
      link: "/AvoidResumeMistakes",
    },
    {
      name: "About Us",
      link: "/AboutUs",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white dark:bg-black">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="primary"
              className="w-full"
              href="https://chat.whatsapp.com/FRlwi3kKfCZ8nD0TPdUlUN"
            >
              Join WhatsApp Group
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-black dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                variant="primary"
                className="w-full dark:bg-white dark:text-black bg-black text-white"
                href="https://chat.whatsapp.com/FRlwi3kKfCZ8nD0TPdUlUN"
              >
                Join WhatsApp Group
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <SpotlightEffect />
      <SlidingCards />
      <CompanyMarquee />
      <Footer />

      {/* Navbar */}
    </div>
  );
}
