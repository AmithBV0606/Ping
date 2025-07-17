import { AppSidebar } from "@/components/dashboard/app-sidebar";
import CreateChat from "@/components/group-chat/create-chat";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { GroupChatType, CustomSession } from "@/types";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { fetchChatGroups } from "@/data-fetching/fetch-chat-groups";
import GroupChatCard from "@/components/group-chat/group-chat-card";

export default async function Page() {
  const session: CustomSession | null = await getServerSession(authOptions);

  const groups: Array<GroupChatType> | [] = await fetchChatGroups(
    session?.user?.token!
  );

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />

          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>All Chats</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="ml-auto mr-1">
            <CreateChat user={session?.user} />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-scroll">
          {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div> */}

          <div className="bg-muted/60 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
            <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-6">
              {groups.length > 0 &&
                groups.map((group) => (
                  <div key={group.id} className="space-y-6">
                    <GroupChatCard group={group} user={session?.user!} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
