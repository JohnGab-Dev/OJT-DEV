import { AppSidebar } from "@/components/app-sidebar-admin"
import { useLocation } from "react-router-dom"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Dropdown, DropdownItem, Button, Pagination } from "flowbite-react"
import { useState } from "react";
import { CircleUserRound, Search } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function User_activities() {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b pl-4 pr-10">
          <div className="flex h-16 shrink-0 items-center gap-2 border-b">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem >
                  <BreadcrumbPage className="font-medium">User Activities</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex justify-between items-center p-1 rounded-lg hover:bg-muted px-3 cursor-pointer gap-2">
           <CircleUserRound size={32} />
            <div className="flex flex-col">
              <h1 className="text-sm font-medium">John Gabriel Completo</h1>
              <span className="text-xs text-neutral-700">admin</span>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          
          <div className="w-full h-auto ">
            <div className="w-full flex items-center justify-between">
                <h1 className=" font-medium text-sm text-neutral-800 ">This lists includes all the user activities</h1>
                
                <div className="w-[60%] flex items-center justify-end gap-2 mb-2">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="
                            w-full h-10 rounded-xl border border-neutral-200 bg-white
                            py-2.5 pl-10 pr-4 text-sm
                            focus:border-blue-500 focus:border-2
                            outline-none transition
                            "
                            autoFocus
                        />
                    </div>
                    <Button color="default" size="sm" className="bg-linear-to-r from-blue-500 to-blue-700 cursor-pointer hover:from-blue-600 hover:to-blue-800">Search</Button>
                </div>
            </div>
            
            <Table striped>
                <TableHead>
                <TableHeadCell>Date and Time</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Activity</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y text-black">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black">
                    <TableCell className="">
                        January 28, 2026 10:15 AM
                    </TableCell>
                    <TableCell>John Gabriel Completo</TableCell>
                    <TableCell>Have logged in</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black">
                    <TableCell className="">
                        January 28, 2026 10:15 AM
                    </TableCell>
                    <TableCell>John Gabriel Completo</TableCell>
                    <TableCell>Have logged in</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black">
                    <TableCell className="">
                        January 28, 2026 10:15 AM
                    </TableCell>
                    <TableCell>John Gabriel Completo</TableCell>
                    <TableCell>Have logged in</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black">
                    <TableCell className="">
                        January 28, 2026 10:15 AM
                    </TableCell>
                    <TableCell>John Gabriel Completo</TableCell>
                    <TableCell>Have logged in</TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black">
                    <TableCell className="">
                        January 28, 2026 10:15 AM
                    </TableCell>
                    <TableCell>John Gabriel Completo</TableCell>
                    <TableCell>Have logged in</TableCell>
                </TableRow>
                
                </TableBody>
            </Table>
            <div className=" float-right ">
                <Pagination currentPage={currentPage} totalPages={2} onPageChange={onPageChange} showIcons />
            </div>
          
        </div>
          
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

