"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export default function AppOverviewSection() {
  return (
    <div id="overview" className="mt-6 mb-20">
      {/* Section Heading : */}
      <div className="w-full flex justify-center items-center mb-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Ping Overview
        </h1>
      </div>

      {/* Overview cards : */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl md:mx-auto w-full px-2">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Ping keeps conversations alive
            </h2>

            <p className="mt-4 text-left  text-base/6 text-neutral-300">
              Whether it&apos;s for friends, teams, or communities — Ping
              delivers lightning-fast, reliable chat with zero lag.
            </p>
          </div>

          <img
            src="/Demo-1.png"
            width={600}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain p-2 rounded-2xl w-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No spam. No noise. Just real talk.
          </h2>

          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-300">
            Every room in Ping is built for respectful, real-time conversations.
            Moderation tools keep things clean and clear.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Join Ping - the fast, secure, and modern way to chat
            </h2>

            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-300">
              Built with real-time tech and privacy in mind, Ping is the go-to
              chat platform for communities that care.
            </p>
          </div>

          <img
            src="/Demo-2.png"
            width={600}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl p-2 w-xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
