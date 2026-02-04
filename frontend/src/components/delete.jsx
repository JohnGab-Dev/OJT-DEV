import React from 'react'
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import api from '../axios.jsx'
import toast from 'react-hot-toast';

function DeleteComp({ openModal, setOpenModal, id, onUserAdded, page }) {
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await api.post(`/PDMS/users/delete?id=${id}`);
            if(res.status === 200){
                onUserAdded(page);
                toast.success(res.data.message, {position: "top-right", className: "text-sm"})
                setOpenModal(false)
            }
        } catch(error){
            console.error(error.response?.data?.message || error.message)
            toast.error(error.response?.data?.message || "Something went wrong", {position: "top-right", className: "text-sm"})
        }
    }
  return (
    <>
        <Modal show={openModal} size="md" onMouseDown={(e) => setOpenModal(false)} popup>
        <ModalHeader />
            <ModalBody>
            <div className="text-center" onMouseDown={(e) => e.stopPropagation()}>
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this account?
                </h3>
                <div className="flex justify-center gap-4">
                <form onSubmit={handleSubmit}>
                    <Button type='submit' color="red">
                        Yes, I'm sure
                    </Button>
                </form>
                <Button color="alternative" onClick={() => setOpenModal(false)}>
                    No, cancel
                </Button>
                </div>
            </div>
            </ModalBody>
        </Modal>
    </>
  )
}

export default DeleteComp
