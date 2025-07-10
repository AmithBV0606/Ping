import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="relative z-10 px-6 py-6 pt-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-slate-950 px-2 py-4">
          <Image
            // src={"/Ping-Logo-Light.png"}
            src={"/New-Logo.png"}
            alt="Ping-Logo"
            height={30}
            width={30}
          />

          <span className="text-2xl font-semibold">Ping</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-[#1B1F22] transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-[#1B1F22] transition-colors"
          >
            Features
          </Link>
          <Link
            href="#"
            className="px-4 py-2 rounded-3xl text-gray-300 hover:text-white hover:bg-[#1B1F22] transition-colors"
          >
            Footer
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant={"link"}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Login
          </Button>

          <Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-3">
              <p>Start Now</p>
              <ChevronRight className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
