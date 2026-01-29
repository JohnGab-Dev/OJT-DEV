import { AppSidebar } from "@/components/app-sidebar"
import { UsersRound, CircleUserRound} from "lucide-react"
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

export default function Ret() {
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
                  <BreadcrumbPage className="font-medium">RET</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex justify-between items-center p-1 rounded-lg hover:bg-muted px-3 cursor-pointer gap-2">
           <CircleUserRound size={32} />
            <div className="flex flex-col">
              <h1 className="text-sm font-medium">John Gabriel Completo</h1>
              <span className="text-xs text-neutral-700">President of BASC</span>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* <div className="w-full h-auto flex items-center justify-center gap-6">
            <div className="w-1/3 rounded-xl border flex flex-col p-5 gap-2 shadow-sm shadow-green-600">
                 <h1 className="text-neutral-800 flex justify-between">Students <UsersRound /></h1>
                 <h1 className="text-5xl">100</h1>
                 <span className="text-xs text-neutral-600">Total Number of Students</span>
            </div>

           <div className="w-1/3 rounded-xl border flex flex-col p-5 gap-2 shadow-sm shadow-green-600">
                 <h1 className="text-neutral-800 flex justify-between">Students <UsersRound /></h1>
                 <h1 className="text-5xl">100</h1>
                 <span className="text-xs text-neutral-600">Total Number of Students</span>
            </div>

            <div className="w-1/3 rounded-xl border flex flex-col p-5 gap-2 shadow-sm shadow-green-600">
                 <h1 className="text-neutral-800 flex justify-between">Students <UsersRound /></h1>
                 <h1 className="text-5xl">100</h1>
                 <span className="text-xs text-neutral-600">Total Number of Students</span>
            </div>
          </div>

          <div className="w-full h-auto ">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left py-3 border-b px-2">Student ID</th>
                        <th className="text-left py-3 border-b px-2">Name</th>
                        <th className="text-left py-3 border-b px-2">Year Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-slate-100">
                        <td className="text-left py-3 border-b px-2">2022000571</td>
                        <td className="text-left py-3 border-b px-2">John Doe</td>
                        <td className="text-left py-3 border-b px-2">3rd Year</td>
                    </tr>
                    <tr className="hover:bg-slate-100">
                        <td className="text-left py-3 border-b px-2">2022000571</td>
                        <td className="text-left py-3 border-b px-2">John Doe</td>
                        <td className="text-left py-3 border-b px-2">3rd Year</td>
                    </tr>
                    <tr className="hover:bg-slate-100">
                        <td className="text-left py-3 border-b px-2">2022000571</td>
                        <td className="text-left py-3 border-b px-2">John Doe</td>
                        <td className="text-left py-3 border-b px-2">3rd Year</td>
                    </tr>
                </tbody>
            </table>
          </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

