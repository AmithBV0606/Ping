"use client";

import React from "react";
import FuzzyText from "@/components/general-ui/fuzzy-text";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useSession } from "next-auth/react";

export default function NotFound() {
  const { data, status } = useSession();

  console.log(status);
  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize={250}
        fontWeight={"950"}
      >
        404
      </FuzzyText>

      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        fontSize={60}
      >
        Page Not Found!
      </FuzzyText>

      <Link
        href={status === "authenticated" ? "/dashboard" : "/"}
        className="mt-8 cursor-pointer"
      >
        <Button
          variant={"outline"}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft />
          <span>Back to {status === "authenticated" ? "Dashboard" : "Home"}</span>
        </Button>
      </Link>
    </div>
  );
}
