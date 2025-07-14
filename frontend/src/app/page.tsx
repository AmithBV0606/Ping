"use client";

import Navbar from "@/components/home-page/navbar";
import HeroSection from "@/components/home-page/hero-section";
import AppOverviewSection from "@/components/home-page/app-overview-section";
import TechnologySection from "@/components/home-page/technology-section";
import FooterSection from "@/components/home-page/footer-section";
import BottomCTASection from "@/components/home-page/bottom-cta-section";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar user={session?.user} />

      {/* Hero Section */}
      <HeroSection />

      {/* Wavy Background Section */}
      <AppOverviewSection />

      {/* Technologies Used section : */}
      <TechnologySection />

      {/* Bottom Call-To-Action : */}
      <BottomCTASection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
