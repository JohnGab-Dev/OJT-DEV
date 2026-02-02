import { AppSidebar } from "@/components/app-sidebar-admin"
import { UsersRound, CircleUserRound } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useState, useEffect } from "react"
import api from "../../axios.jsx";

// designs
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


export default function Admin_Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/pdms/admin-dashboard");
      setUsers(res.data.data);
      console.log(res.status);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
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
                  <BreadcrumbPage className="font-medium">Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex justify-between items-center p-1 rounded-lg hover:bg-muted px-3 cursor-pointer gap-2">
           <CircleUserRound size={32} />
            <div className="flex flex-col">
              <h1 className="text-sm font-medium">{name}</h1>
              <span className="text-xs text-neutral-700">{role}</span>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="w-full h-auto p-6 flex flex-col gap-2 shadow-lg rounded-xl bg-linear-to-r from-green-400 to-green-600 text-white">
            <h1 className="text-2xl font-semibold"> Welcome back, User</h1>
            <span className="text-sm ">Here's what's happening with your university today.</span>
          </div>
          <div className="w-full h-auto flex items-center justify-center gap-5">
            
            <div className="w-1/3 rounded-xl flex p-5 shadow-md border ">
                <div className="w-full flex flex-col gap-2">
                  <h1 className="text-neutral-800 flex justify-between font-medium">Students </h1>
                 <h1 className="text-2xl font-medium">100</h1>
                 <span className="text-xs text-neutral-600">Total Number of Students</span>
                </div>
                <div className="w-12 h-10 flex items-center justify-center rounded-full bg-green-200"><UsersRound /></div>
            </div>

            <div className="w-1/3 rounded-xl flex p-5 shadow-md border ">
                <div className="w-full flex flex-col gap-2">
                  <h1 className="text-neutral-800 flex justify-between font-medium">Budget </h1>
                 <h1 className="text-2xl font-medium">100</h1>
                 <span className="text-xs text-neutral-600">Total Budget Consumption</span>
                </div>
                <div className="w-12 h-10 flex items-center justify-center rounded-full bg-red-200"><UsersRound /></div>
            </div>
            <div className="w-1/3 rounded-xl flex p-5 shadow-md border ">
                <div className="w-full flex flex-col gap-2">
                  <h1 className="text-neutral-800 flex justify-between font-medium">Research </h1>
                 <h1 className="text-2xl font-medium">50</h1>
                 <span className="text-xs text-neutral-600">Total Published Documents</span>
                </div>
                <div className="w-12 h-10 flex items-center justify-center rounded-full bg-yellow-200"><UsersRound /></div>
            </div>
          </div>
          <div className="w-full h-auto ">
            <h1 className="my-4 text-lg font-medium">Here are the list of all recent activities</h1>
            <Table striped>
                <TableHead>
                  <TableRow>
                    <TableHeadCell>Email</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Role</TableHeadCell>
                    <TableHeadCell>Activity</TableHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody className="divide-y text-black">
                  {users.map((user) => (
                <TableRow key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell >
                        {user.email}
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>VPAA</TableCell>
                </TableRow>
                  ))}

                </TableBody>
            </Table>
            
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

