"use client";
/* eslint-disable prettier/prettier */
import {  Button, Card, CardHeader,  Divider , Tooltip } from "@heroui/react";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import TasksTable from "./TasksTable";
import { useDispatch } from "react-redux";
import { addTask } from "../lib/taskSlice";

export default function ToDoPage() {
  const [editData, setEditData] = useState({ name: "", description: "", dueDate: "" , completed : ""});
const dispatch = useDispatch();
const router = useRouter();
 const color = "primary";

  const handleSubmit=(e : React.FormEvent) => {
    e.preventDefault();

    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      name: editData.name,
      description: editData.description,
      dueDate: new Date(editData.dueDate).toISOString(),
      completed: editData.completed,
    };

//  Add the new task
 dispatch(addTask(newTask));

  
setEditData({
  name: "",
  description: "",
  dueDate: "",  
  completed: false
})
  }

  return (
      <main className="flex items-center  justify-center min-h-screen  text-white p-3 md:p-7  ">
    <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg  lg:max-w-4xl xl:max-w-6xl flex flex-col justify-center text-center p-6 md:p-10 lg:p-12 shadow-lg border border-gray-700 bg-gray-900">
     <CardHeader className="text-center text-2xl font-bold mx-auto my-5">Online-Task-Mangement</CardHeader>
         <Image
          alt="heroui logo"
          height={150}
          src="/image.png"
          width={200}
          className="mx-auto rounded-xl "
        />

   <form onSubmit={handleSubmit} className="bg-gray-900 text-white p-3 md:p-6 rounded-lg shadow-lg  m-auto w-full md:min-w-[70%] lg:min-w-[1000px]">
   <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 gap-x-6 ">
    <InputComponent
    required
    type="text"
    className="font-bold text-2xl w-full "
    label="Task Name" 
    value={editData.name}  
    onChange={(e) => setEditData({...editData, name: e.target.value})}
    />
    
    <InputComponent 
    required
    type="text"
    className="font-bold text-2xl w-full"
    label="Description" 
    value={editData.description}
     onChange={(e) => setEditData({...editData, description: e.target.value})} 
     />

    <InputComponent 
    required
    type="date"
    className="font-bold text-2xl w-full"
    label="Due Date" 
    value={editData.dueDate}
    onChange={(e) => setEditData({ ...editData, dueDate: e.target.value })} 
    />

    
<InputComponent 
    required
    className="w-full h-[55px] p-2 "
    label="Completion Status" 
    value={editData.completed ? "completed" : "not_completed"}
    onChange={(e) => setEditData({ ...editData, completed: e.target.value === "completed" ? true : false })} 
    options={[
    { label: "Not Completed" , value: "not_completed"},
    { label: "Completed" , value: "completed"},
    ]}
 />
  
    </div>
   
   <div className="flex  flex-row items-center justify-center gap-6">
   <Tooltip key={color} className="capitalize" color={color} content={"Add Task"}>
   <Button type="submit" color="primary" variant="flat" className="text-white w-[40px] h-[50px] text-xl mt-5 capitalize ">

{/* <ButtonComponent " color="primary" className="text-white w-[40px] h-[50px] text-xl mt-5" variant="flat"  > */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
{/* </ButtonComponent> */}
</Button>
</Tooltip>
   </div>

 </form>
 <Divider />

<TasksTable editData={editData}/>

    <ButtonComponent className="mt-10 w-[250px] mx-auto text-lg" color="primary" onClick={() => router.push("/")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
 Back to home page</ButtonComponent>  
         </Card> 
       </main>
    )
}