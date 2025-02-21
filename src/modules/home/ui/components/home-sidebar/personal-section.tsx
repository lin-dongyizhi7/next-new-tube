"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HistoryIcon, Link, ListVideoIcon, ThumbsUpIcon } from "lucide-react";

const items = [
  {
    title: "History",
    url: "/playlists/history",
    icon: HistoryIcon,
    auth: true
  },
  {
    title: "Like",
    url: "/playlist/liked",
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: "All playlists",
    url: "/playlist/trending",
    icon: ListVideoIcon,
    auth: true
  },
];

export const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip="item.title"
                asChild
                isActive={false} // TODO: change to look at current pathname
                onClick={() => {}} // TODO: Do something on click
              >
                <Link href={item.url}>
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
