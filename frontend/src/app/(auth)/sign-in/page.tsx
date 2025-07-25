"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";
import AuthButton from "@/components/home-page/auth-button";
import { Spotlight } from "@/components/ui/spotlight";
import { signIn } from "next-auth/react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function SignInPage() {
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };

  return (
    <HeroGeometric badge="Sign In">
      <div className="flex justify-center items-center">
        <Card className="p-0 max-w-sm w-full shadow-none border-none z-50">
          <MagicCard
            // gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="p-5 py-8"
          >
            <div className="flex flex-col items-center mb-2">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <Image
                    src={"/New-Logo.png"}
                    alt="Ping-Logo"
                    height={30}
                    width={30}
                  />
                </span>
              </button>
            </div>

            <CardHeader className="border-b border-border p-4 [.border-b]:pb-4 flex flex-col gap-2 items-center">
              <CardTitle className="text-2xl">Welcome back</CardTitle>

              <CardDescription className="text-sm text-gray-500">
                A modern chatting application.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-4 mb-2">
              <CardDescription>
                Ping is fast, reliable and a platform for collaboration Ping
                fuels communication without barriers or bottlenecks.
              </CardDescription>
            </CardContent>

            <CardFooter className="p-3">
              <AuthButton
                text="Sign In with Google"
                image={true}
                onClick={handleLogin}
              />
            </CardFooter>
          </MagicCard>
        </Card>
      </div>
    </HeroGeometric>
  );
}
