import React from 'react'
import { Button, Label, Modal, ModalBody, ModalHeader, TextInput, Select } from "flowbite-react";
import { useState } from "react";
import api from '../axios.jsx'
import toast from 'react-hot-toast';
const Add_user = ( {addOpenModal, setAddOpenModal} ) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const data = {email, name, role, password, confirmPassword};
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{
            const res = await api.post('/PDMS/users/add', data);
            if(res.status === 201){
                toast.success("User created successfully", {
                    duration: 4000, 
                    position: 'top-right'
                });
            }
        } catch (error){
            setError(error.response?.data?.message)
            toast.error("User add failed", {
                position: "top-right",
                duration: 4000
            })
            console.error(error.response?.data?.message || "User add failed")
        }
    }

  return (
    <div>
      <Modal show={addOpenModal} size="md" onMouseDown={() => setAddOpenModal(false)} popup>
        <ModalHeader />
            <ModalBody>
            <form onSubmit={handleSubmit}>
            <div className="space-y-6" onMouseDown={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a new user account</h3>
                {error != "" && (
                    <p className='text-red-700 text-xs'>{error}</p>
                )}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email">Email</Label>
                    </div> 
                    <TextInput
                        id="email"
                        placeholder="text@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email">Name</Label>
                    </div> 
                    <TextInput
                        id="email"
                        placeholder=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                {/* <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries">Select department</Label>
                    </div>
                    <Select id="countries" required>
                        <option>President</option>
                        <option>Academics</option>
                        <option>RET</option>
                        <option>Finance</option>
                        <option value="">Planning</option>
                    </Select>
                </div> */}

                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries">Select role</Label>
                    </div>
                    <Select id="countries" required value={role} onChange={(e) => setRole(e.target.value)} >
                        <option value="superadmin">Superadmin</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="password">Create password</Label>
                    </div>
                    <TextInput id="password" type="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password_confirmation">Confirm password</Label>
                    </div>
                        <TextInput id="password_confirmation" type="password" required value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                </div>
                    <div className="w-full flex items-center justify-end gap-2">
                        <Button color="gray" onClick={() => setAddOpenModal(false)}>Cancel</Button>
                        <Button type='submit' color="blue">Create</Button>
                    </div>
                
            </div>
            </form>
            
            </ModalBody>
        </Modal>
    </div>
  )
}

export default Add_user
