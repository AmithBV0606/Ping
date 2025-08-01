import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import TailwindButton from "../ui/tailwind-button";

export default function Navbar() {
  return (
    <header className="relative z-10 px-6 py-1 pt-1 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-slate-950 px-2 py-4">
          <Image src={"/New-Logo.png"} alt="Ping-Logo" height={30} width={30} />

          <span className="text-2xl font-semibold">Ping</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#home"
            className="px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-[#1B1F22] transition-colors"
          >
            Home
          </Link>

          <Link
            href="#overview"
            className="px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-[#1B1F22] transition-colors"
          >
            Overview
          </Link>

          <Link
            href="#technologies"
            className="px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-[#1B1F22] transition-colors"
          >
            Technology
          </Link>

          <Link
            href="#footer"
            className="px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-[#1B1F22] transition-colors"
          >
            Footer
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          <Link href={"/sign-in"}>
            <Button
              variant={"ghost"}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Login
            </Button>
          </Link>

          <Link href={"/sign-up"}>
            <TailwindButton>Sign Up</TailwindButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
