import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GroupChatType, CustomUser } from "@/types";
import GroupChatCardMenu from "./group-chat-card-menu";

export default function GroupChatCard({
  group,
  user,
}: {
  group: GroupChatType;
  user: CustomUser;
}) {
  return (
    <Card className="h-52">
      <CardHeader className="flex justify-between items-center ">
        <CardTitle className="text-lg lg:text-2xl">{group.title}</CardTitle>
        {/* <GroupChatCardMenu user={user} group={group} /> */}
        <GroupChatCardMenu />
      </CardHeader>

      <CardContent className="mt-4">
        <p className="text-sm lg:text-md text-gray-500">
          <strong>Passcode</strong> : {group.passcode}
        </p>
        <p className="text-sm lg:text-md text-gray-500">
          <strong>Created At</strong> :{" "}
          {new Date(group.created_at).toDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
