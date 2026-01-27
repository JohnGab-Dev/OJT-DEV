import * as React from "react"
import { Link } from "react-router-dom"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function VersionSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <img src="/basc-logo.png" alt="" className="w-10"/>
              <div className="flex flex-col gap-0.5 leading-none">
                <Link to="/dashboard" className="font-medium">Bulacan Agricultural <br /> State College</Link>
              </div>
            </SidebarMenuButton>
          
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
