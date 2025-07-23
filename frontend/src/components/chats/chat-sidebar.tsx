import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { GroupChatUsersType } from "@/types";
import { Card, CardTitle } from "../ui/card";

export function ChatSidebar({
  users,
}: {
  users: Array<GroupChatUsersType> | [];
}) {
  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#" className="space-x-2">
                <div className="bg-gray-800 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg p-1">
                  <Image
                    src={"/New-Logo.png"}
                    alt="Ping-Logo"
                    height={30}
                    width={30}
                  />
                </div>

                <div className="flex flex-col gap-2 leading-none">
                  <span className="font-bold text-xl">Users</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent
        className="max-h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {users.length > 0 &&
              users.map((item, index) => (
                <Card key={index} className="rounded-md p-3 mt-2">
                  <CardTitle className="text-lg">{item.name}</CardTitle>

                  <p className="text-sm font-semibold text-gray-500">
                    Joined :{" "}
                    <span>{new Date(item.created_at).toDateString()}</span>
                  </p>
                </Card>
              ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
