import React from 'react'
import { Button, Label, Modal, ModalBody, ModalHeader, TextInput, Select } from "flowbite-react";
import { useState, useEffect } from "react";
import toast from  'react-hot-toast'
import api from '../axios.jsx'


const Edit_user = ( {EditOpenModal, setEditOpenModal, onUserUpdated, user, page} ) => {

    const [id, setId] = useState(0);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        if (user) {
            setId(user.id);
            setEmail(user.email);
            setName(user.name);
            setRole(user.role);
            setPassword("");
        }
        }, [user]);

        const data = {email, name, role, password};

        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const res = await api.post(`/PDMS/users/update?id=${id}`, data);
                if(res.status === 200){
                    toast.success(res.data.message, {position: "top-right", className: "text-sm"})
                    onUserUpdated(page);
                    setEditOpenModal(false)
                }
            } catch(error){
                console.error(error.response?.data?.message || error);
                toast.error(error.response?.data?.message || "Update failed", {position: "top-right", className: "text-sm"})
            }
        }
  return (
    <div>
      <Modal show={EditOpenModal} size="md" onMouseDown={() => setEditOpenModal(false)} popup>
        <ModalHeader />
            <ModalBody onMouseDown={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
            <div className="space-y-6" >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit user account</h3>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email">Email</Label>
                    </div> 
                    <TextInput
                        id="email"
                        placeholder="text@example.com"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name">Name</Label>
                    </div> 
                    <TextInput
                        id="name"
                        placeholder=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="countries">Select role</Label>
                    </div>
                    <Select id="countries" required value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="superadmin">Superadmin</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="password">Update password</Label>
                    </div>
                    <TextInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="w-full flex items-center justify-end gap-2 mt-2">
                    <Button color="gray" onClick={() => setEditOpenModal(false)}>Cancel</Button>
                    <Button type='submit' color="blue">Save Changes</Button>
                </div>
                
            </div>
            </form>
            
            </ModalBody>
        </Modal>
    </div>
  )
}

export default Edit_user
