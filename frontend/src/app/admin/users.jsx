import { AppSidebar } from "@/components/app-sidebar-admin"
import { useLocation } from "react-router-dom"
import { CircleUserRound, EllipsisVertical, UserRoundPlus, Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useState } from "react";
import { Dropdown, DropdownItem, Button, Pagination } from "flowbite-react"
import Add_user from "@/components/add-user";
import DeleteComp from "@/components/delete"; 
import Edit_user from "@/components/edit-user";  
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

export default function Users() {
    const [openModal, setOpenModal] = useState(false);
    const [addOpenModal, setAddOpenModal] = useState(false);
    const [EditOpenModal, setEditOpenModal] = useState(false);
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
                  <BreadcrumbPage className="font-medium">User Management</BreadcrumbPage>
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
            <div className="w-full flex items-center justify-between mt-2 mb-2">
                <h1 className=" font-medium text-sm text-neutral-800 ">This lists includes all the user accounts</h1>
                
                <div className="w-[60%] flex items-center gap-2">
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
                    <Button size="xs" color="default" className="flex items-center gap-2 w-[7rem] bg-linear-to-r from-green-400 to-green-600 cursor-pointer hover:from-green-500 hover:to-green-700" onClick={() => setAddOpenModal(true)}><UserRoundPlus size={16}  />Add User</Button>
                </div>
            </div>
            <Add_user addOpenModal={addOpenModal} setAddOpenModal={setAddOpenModal}/>
            
            <Table striped>
                <TableHead>
                <TableHeadCell>Email</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Role</TableHeadCell>
                <TableHeadCell>Department</TableHeadCell>
                <TableHeadCell>
                    Actions 
                </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black">
                        <TableCell className="">
                            johngabrielcompleto.basc@gmail.com
                        </TableCell>
                        <TableCell>John Gabriel Completo</TableCell>
                        <TableCell>President</TableCell>
                        <TableCell>VPAA</TableCell>
                        <TableCell>
                            <Dropdown
                                    arrowIcon={false}
                                    inline
                                    dismissOnClick={false}
                                    label={
                                        <span className="p-2 rounded-lg hover:bg-neutral-200 cursor-pointer">
                                        <EllipsisVertical className="w-5 h-5 text-gray-500 hover:text-gray-800" />
                                        </span>
                                    }
                                    >
                                    <DropdownItem onClick={() => setEditOpenModal(true)}>Edit</DropdownItem>
                                    <DropdownItem className="text-red-600" onClick={() => setOpenModal(true)}>
                                        Delete
                                    </DropdownItem>
                                </Dropdown>
                                <Edit_user EditOpenModal={EditOpenModal} setEditOpenModal={setEditOpenModal} />
                                <DeleteComp openModal={openModal} setOpenModal={setOpenModal} />

                        </TableCell>

                        
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black">
                        <TableCell className="">
                            johngabrielcompleto.basc@gmail.com
                        </TableCell>
                        <TableCell>John Gabriel Completo</TableCell>
                        <TableCell>President</TableCell>
                        <TableCell>VPAA</TableCell>
                        <TableCell>
                            <Dropdown
                                    arrowIcon={false}
                                    inline
                                    dismissOnClick={false}
                                    label={
                                        <span className="p-2 rounded-lg hover:bg-neutral-200 cursor-pointer">
                                        <EllipsisVertical className="w-5 h-5 text-gray-500 hover:text-gray-800" />
                                        </span>
                                    }
                                    >
                                    <DropdownItem onClick={() => setEditOpenModal(true)}>Edit</DropdownItem>
                                    <DropdownItem className="text-red-600" onClick={() => setOpenModal(true)}>
                                        Delete
                                    </DropdownItem>
                                </Dropdown>
                                <Edit_user EditOpenModal={EditOpenModal} setEditOpenModal={setEditOpenModal} />
                                <DeleteComp openModal={openModal} setOpenModal={setOpenModal} />

                        </TableCell>

                        
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 text-black">
                        <TableCell className="">
                            johngabrielcompleto.basc@gmail.com
                        </TableCell>
                        <TableCell>John Gabriel Completo</TableCell>
                        <TableCell>President</TableCell>
                        <TableCell>VPAA</TableCell>
                        <TableCell>
                            <Dropdown
                                    arrowIcon={false}
                                    inline
                                    dismissOnClick={false}
                                    label={
                                        <span className="p-2 rounded-lg hover:bg-neutral-200 cursor-pointer">
                                        <EllipsisVertical className="w-5 h-5 text-gray-500 hover:text-gray-800" />
                                        </span>
                                    }
                                    >
                                    <DropdownItem onClick={() => setEditOpenModal(true)}>Edit</DropdownItem>
                                    <DropdownItem className="text-red-600" onClick={() => setOpenModal(true)}>
                                        Delete
                                    </DropdownItem>
                                </Dropdown>
                                <Edit_user EditOpenModal={EditOpenModal} setEditOpenModal={setEditOpenModal} />
                                <DeleteComp openModal={openModal} setOpenModal={setOpenModal} />

                        </TableCell>

                        
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

