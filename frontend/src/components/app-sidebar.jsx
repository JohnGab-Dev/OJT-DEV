import * as React from "react"
import { LogOut } from "lucide-react"
import { VersionSwitcher } from "@/components/version-switcher"
import { useLocation, Link } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Academics",
          url: "/academics",
        },
        {
          title: "RET",
          url: "/ret",
        },
        {
          title: "Finance",
          url: "/finance",
        },
        {
          title: "Planning",
          url: "/planning",
        },
      ],
    },
  ],
}


export function AppSidebar({
  ...props
}){
  const location = useLocation();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher/>
        
      </SidebarHeader>
      <SidebarContent className="px-2 mt-4">
        {data.navMain.map((item) => (
            <SidebarMenu>
              {item.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive} className={location.pathname.startsWith(item.url) ? " bg-neutral-200 font-medium hover:bg-neutral-300" : ""}>
                    <Link to={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
        ))}

        <SidebarMenu className="mt-auto pb-2">
          <SidebarMenuButton >
            <span className="flex items-center gap-2"><LogOut />Logout</span>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />

      
    </Sidebar>
  );
}
