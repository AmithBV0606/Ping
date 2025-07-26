import { ArrowRight } from "lucide-react";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/home-page/cta-button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <main className="relative" id="home">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight className="left-0 top-0" />
        <Spotlight className="right-0 top-0" flip />
      </div>

      <div className="relative z-10 px-6 py-24 mb-10">
        <div className="max-w-7xl mx-auto text-center mb-10">
          {/* Explore Banner */}
          <Button
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mb-16 mt-14"
            onClick={() => router.push("/sign-up")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-6">
              <span className="text-gray-400">
                Explore the Ping Application
              </span>

              <div className="flex items-center space-x-2 text-purple-400">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </span>
          </Button>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The modern{" "}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                chatting platform
              </span>
              .
            </h1>

            <h2 className="text-4xl md:text-5xl font-light text-gray-400 mb-8">
              Ping powers realtime conversations that scales.
            </h2>
          </div>

          {/* Description */}
          <div className="mb-20">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ping is fast, reliable and a platform for collaboration
              <br />
              Ping fuels communication without barriers or bottlenecks.
            </p>
          </div>

          {/* CTA Button */}
          <Link href={"/sign-up"}>
            <CTAButton />
          </Link>
        </div>
      </div>
    </main>
  );
}
