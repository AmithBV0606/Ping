import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { CustomSession } from "@/types";

// This is sample data.
const data = {
  navMain: [
    {
      title: "All Chats",
      url: "#",
    },
    {
      title: "Building Your Application",
      url: "#",
    },
    {
      title: "API Reference",
      url: "#",
    },
  ],
};

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="bg-gray-800 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg p-1">
                  <Image
                    src={"/New-Logo.png"}
                    alt="Ping-Logo"
                    height={30}
                    width={30}
                  />
                </div>

                <div className="flex flex-col gap-2 leading-none">
                  <span className="font-medium text-xl">Ping</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title} defaultChecked>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser
          user={{
            name: session?.user?.name as string,
            email: session?.user?.email as string,
            avatar: session?.user?.image ?? undefined,
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
