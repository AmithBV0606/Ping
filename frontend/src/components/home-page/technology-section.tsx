"use client";

import type React from "react";
import {
  Code,
  Zap,
  Palette,
  Component as LucideComponent,
  Server,
  Globe,
  Database,
  Layers,
  MessageSquare,
  Gauge,
  Unplug
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function TechnologySection() {
  return (
    <section className="min-h-screen bg-black py-20 px-4 -mt-20" id="technologies">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h1>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Built with modern technologies and best practices to deliver
            exceptional performance, scalability, and developer experience.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-12 gap-4 lg:gap-6">
          <TechnologyCard
            area="md:col-span-4 xl:col-span-6 xl:row-span-2"
            name="Next.js"
            description="React framework for production with hybrid static & server rendering, API routes, and automatic code splitting for optimal performance."
            icon={<Zap className="h-6 w-6" />}
            category="Framework"
            size="large"
          />

          <TechnologyCard
            area="md:col-span-2 xl:col-span-6"
            name="TypeScript"
            description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
            icon={<Code className="h-5 w-5" />}
            category="Language"
            size="medium"
          />

          <TechnologyCard
            area="md:col-span-2 xl:col-span-3"
            name="Tailwind CSS"
            description="Utility-first CSS framework for rapidly building custom designs."
            icon={<Palette className="h-5 w-5" />}
            category="Styling"
            size="small"
          />

          <TechnologyCard
            area="md:col-span-2 xl:col-span-3"
            name="Shadcn/ui"
            description="Beautifully designed components built with Radix UI and Tailwind CSS."
            icon={<LucideComponent className="h-5 w-5" />}
            category="UI Library"
            size="small"
          />

          <TechnologyCard
            area="md:col-span-2 xl:col-span-3"
            name="Node.js"
            description="JavaScript runtime built on Chrome's V8 JavaScript engine for scalable network applications."
            icon={<Server className="h-5 w-5" />}
            category="Runtime"
            size="medium"
          />

          <TechnologyCard
            area="md:col-span-2 xl:col-span-3"
            name="Express.js"
            description="Fast, unopinionated, minimalist web framework for Node.js applications."
            icon={<Globe className="h-5 w-5" />}
            category="Backend"
            size="medium"
          />

          <TechnologyCard
            area="md:col-span-2 xl:col-span-3"
            name="Prisma ORM"
            description="Next-generation ORM for Node.js and TypeScript with type safety."
            icon={<Layers className="h-5 w-5" />}
            category="ORM"
            size="small"
          />

          <TechnologyCard
            area="md:col-span-4 xl:col-span-3 xl:row-span-2"
            name="PostgreSQL"
            description="Advanced open source relational database system with strong reputation for reliability, feature robustness, and performance."
            icon={<Database className="h-6 w-6" />}
            category="Database"
            size="large"
          />

          <TechnologyCard
            area="md:col-span-2 xl:col-span-3"
            name="Redis"
            description="In-memory data structure store for caching and session management."
            icon={<Gauge className="h-5 w-5" />}
            category="Cache"
            size="small"
          />

          <TechnologyCard
            area="md:col-span-2 xl:col-span-3"
            name="Apache Kafka"
            description="Distributed event streaming platform for high-performance data pipelines and real-time analytics."
            icon={<MessageSquare className="h-5 w-5" />}
            category="Messaging"
            size="medium"
          />

          <TechnologyCard
            area="md:col-span-2 xl:col-span-3"
            name="Socket.io"
            description="Socket.IO is a JavaScript library that enables real-time, bidirectional, and event-based communication between web clients and servers. "
            icon={<Unplug className="h-5 w-5" />}
            category="Web - Socket"
            size="small"
          />
        </div>
      </div>
    </section>
  );
}

interface TechnologyCardProps {
  area: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  size: "small" | "medium" | "large";
}

const TechnologyCard = ({
  area,
  name,
  description,
  icon,
  category,
  size,
}: TechnologyCardProps) => {
  const getMinHeight = () => {
    switch (size) {
      case "small":
        return "min-h-[12rem]";
      case "medium":
        return "min-h-[14rem]";
      case "large":
        return "min-h-[20rem]";
      default:
        return "min-h-[14rem]";
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "large":
        return "w-14 h-14";
      case "medium":
        return "w-12 h-12";
      case "small":
        return "w-10 h-10";
      default:
        return "w-12 h-12";
    }
  };

  return (
    <div className={`group relative list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-neutral-800 p-1 transition-all duration-300 hover:border-neutral-700">
        <GlowingEffect
          spread={size === "large" ? 80 : 60}
          glow={true}
          disabled={false}
          proximity={size === "large" ? 100 : 80}
          inactiveZone={0.01}
          movementDuration={1.5}
          borderWidth={1}
        />

        <div
          className={`relative flex h-full ${getMinHeight()} flex-col justify-between gap-4 overflow-hidden rounded-xl bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-neutral-900/70`}
        >
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-300">
              {category}
            </span>
          </div>

          {/* Icon */}
          <div
            className={`flex items-center justify-center ${getIconSize()} rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 border border-neutral-600 transition-all duration-300 group-hover:from-neutral-600 group-hover:to-neutral-700`}
          >
            <div className="text-white transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <h3
              className={`${
                size === "large"
                  ? "text-2xl"
                  : size === "medium"
                  ? "text-xl"
                  : "text-lg"
              } font-semibold text-white group-hover:text-neutral-100 transition-colors duration-300`}
            >
              {name}
            </h3>
            <p
              className={`${
                size === "large" ? "text-base" : "text-sm"
              } text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300`}
            >
              {description}
            </p>
          </div>

          {/* Hover Effect Gradient */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-neutral-800/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
