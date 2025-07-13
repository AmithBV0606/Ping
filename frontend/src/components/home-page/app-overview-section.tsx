"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export default function AppOverviewSection() {
  return (
    <div
      className="flex flex-col overflow-hidden -mt-36 md:-mt-28 lg:-mt-20"
      id="overview"
    >
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white mb-2 md:mb-10 lg:mb-12">
              Overview of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Ping!!
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/Dashboard.png`}
          alt="hero"
          height={720}
          width={1600}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
