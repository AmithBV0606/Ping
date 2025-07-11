import { ChevronRight, Github, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="relative z-10 px-6 py-16 mt-6" id="footer">
      <div className="max-w-7xl mx-auto border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 mx-10">
          {/* Subscribe Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              {/* Icon */}
              <Image
                src={"/New-Logo.png"}
                alt="Ping-Logo"
                height={30}
                width={30}
              />

              <span className="text-xl font-semibold">Ping</span>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold">Subscribe</h3>

              <p className="text-gray-600 mb-6">
                Stay tuned for the latest updates!
              </p>

              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-gray-900 border border-gray-800 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />

                <button
                  type="submit"
                  className="bg-gray-700 text-white w-40 px-8 py-3 rounded-full hover:bg-gray-600 transition-colors flex items-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-1 md:ml-auto">
            <h4 className="text-sm font-semibold mb-6 text-gray-400 uppercase tracking-wider">
              Company
            </h4>

            <ul className="space-y-4">
              <li>
                <Link
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#overview"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Overview
                </Link>
              </li>

              <li>
                <Link
                  href="#technologies"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Technology
                </Link>
              </li>

              <li>
                <Link
                  href="#footer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Footer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between md:mx-10">
            <p className="text-gray-500 text-sm">
              © 2025 Ping. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com/AmithBV0606/Ping"
                className="text-gray-500 hover:text-white transition-colors text-sm"
                target="_blank"
              >
                <Github />
              </Link>

              <Link
                href="https://x.com/heyyamith"
                className="text-gray-500 hover:text-white transition-colors text-sm"
                target="_blank"
              >
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
