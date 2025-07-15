"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can use any icon set like Lucide or Heroicons
import clsx from "clsx";
import ButtonWithBg from "../ui/ButtonWithBg";
import ButtonWithBorder from "../ui/ButtonWithBorder";
const navLinks = [
  { href: "/", label: "Home+" },
  { href: "/courses", label: "Courses+" },
  { href: "/dashboard", label: "Dashboard+" },
  { href: "/about", label: "About+" },
  { href: "/contact", label: "Contact Us+" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 z-10 flex justify-between items-center bg-[#FFF5F0] px-30 border-b border-[#006A62]">
      <nav
        className="flex gap-20"
        role="navigation"
        aria-label="Main Navigation"
      >
        <Link href="/" className="text-xl font-bold text-[#006A62]">
          MyLMS
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  " hover:text-[#006A62] transition",
                  pathname === href && "font-semibold text-[#006A62]"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {/* login and register buttons */}
      <div className="flex gap-10 z-20 mr-[8%]">
        <ButtonWithBorder>log in</ButtonWithBorder>
        <ButtonWithBg background="#FF8C5A">Register</ButtonWithBg>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "block text-gray-700 hover:text-indigo-600 transition",
                    pathname === href && "font-semibold text-indigo-600"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
