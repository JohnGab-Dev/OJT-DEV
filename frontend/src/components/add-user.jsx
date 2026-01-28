import React from 'react'
import { Button, Label, Modal, ModalBody, ModalHeader, TextInput, Select } from "flowbite-react";
import { useState } from "react";
const Add_user = ( {addOpenModal, setAddOpenModal} ) => {
     const [email, setEmail] = useState("");
  return (
    <div>
      <Modal show={addOpenModal} size="md" onClick={() => setAddOpenModal(false)} popup>
        <ModalHeader />
            <ModalBody>
            <div className="space-y-6" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a new user account</h3>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email">Email</Label>
                    </div> 
                    <TextInput
                        id="email"
                        placeholder="text@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
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
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="max-w-md">
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
                </div>

                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries">Select role</Label>
                    </div>
                    <Select id="countries" required>
                        <option>Admin</option>
                        <option>President</option>
                        <option>Regular User</option>
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="password">Create password</Label>
                    </div>
                    <TextInput id="password" type="password" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password_confirmation">Confirm password</Label>
                    </div>
                        <TextInput id="password_confirmation" type="password" required />
                </div>
                    <div className="w-full flex items-center justify-end gap-2">
                        <Button color="gray" onClick={() => setAddOpenModal(false)}>Cancel</Button>
                        <Button color="blue">Create</Button>
                    </div>
                
            </div>
            
            </ModalBody>
        </Modal>
    </div>
  )
}

export default Add_user
