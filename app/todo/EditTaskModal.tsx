"use client";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

interface EditTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: {
    id: string;
    name: string;
    description: string;
    dueDate: string;
  };
  onSave: (updatedTask: any) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ isOpen, onClose, task, onSave }) => {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

   console.log(updatedTask);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUpdatedTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const handleSave = () => {
    onSave(updatedTask);
    onClose(); 
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
            
              <label className="block">
                <span className="text-gray-700">Task Name</span>
                <input
                  type="text"
                  name="name"
                  value={updatedTask.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-1"
                  required
                />
              </label>

           
              <label className="block">
                <span className="text-gray-700">Description</span>
                <textarea
                  name="description"
                  value={updatedTask.description}
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-1"
                  required
                />
              </label>

              
              <label className="block">
                <span className="text-gray-700">Due Date</span>
                <input
                  type="date"
                  name="dueDate"
                  value={updatedTask.dueDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-1"
                  required
                />
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="completed"
                  checked={updatedTask.completed}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-300">Completed</span>
              </label> 


              
            </div>
          </ModalBody>

          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleSave}>
              Save Changes
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default EditTaskModal;