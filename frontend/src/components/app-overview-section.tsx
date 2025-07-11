"use client";

import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import Image from "next/image";

export default function AppOverviewSection() {
  return (
    <section
      className="relative overflow-x-hidden -mt-56 md:-mt-36 lg:-mt-56 2xl:mt-16"
      id="overview"
    >
      <WavyBackground
        className="max-w-4xl mx-auto pb-2"
        colors={["#313131", "#313131", "#313131", "#313131", "#313131"]}
        waveWidth={100}
        backgroundFill="black"
        blur={40}
        speed="slow"
        waveOpacity={0.5}
      >
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Overview
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative inline-flex overflow-hidden rounded-lg p-[4px] w-[400px] h-[300px] sm:w-[600px] sm:h-[400px] md:w-[700px] md:h-[500px] 2xl:w-[1450px] 2xl:h-[650px]">
            {/* Animated Gradient Border */}
            <span
              className="absolute inset-[-150%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
              aria-hidden="true"
            ></span>

            {/* Image */}
            <div className="relative z-10 w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/Dashboard.png"
                alt="Dashboard image"
                fill
                className="object-fill"
              />
            </div>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}
