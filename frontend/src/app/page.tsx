"use client";

// import { useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AppOverviewSection from "@/components/app-overview-section";
import TechnologySection from "@/components/technology-section";
import FooterSection from "@/components/footer-section";
import BottomCTASection from "@/components/bottom-cta-section";

export default function Home() {
  // const [email, setEmail] = useState("");

  // const handleSubscribe = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle subscription logic here
  //   console.log("Subscribing email:", email);
  // };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar />

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
