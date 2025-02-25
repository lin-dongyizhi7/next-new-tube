"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import { useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Subscriptions",
    url: "/feed/subscriptions",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Trending",
    url: "/feed/trending",
    icon: FlameIcon,
  },
];

export const MainSection = () => {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            return (
              <SidebarMenuItem key={item.title} style={{ cursor: "pointer" }}>
                <SidebarMenuButton
                  tooltip={item.title}
                  asChild
                  isActive={false} // TODO: change to look at current pathname
                  onClick={(e) => {
                    if (!isSignedIn && item.auth) {
                      e.preventDefault();
                      return clerk.openSignIn();
                    }
                  }} // TODO: Do something on click
                >
                  <div className="flex items-center gap-4">
                    <Link href={item.url}>
                      <item.icon />
                      <span className="text-sm cursor-pointer">
                        {item.title}
                      </span>
                    </Link>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
