"use client";
import React from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { Tooltip } from '@heroui/react';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const TasksTable = () => {
  const tasks = useSelector((state: RootState) => state.tasks);


const columns = [
  { key: "id", label: "Id" },
  { key: "name", label: "Name" },
  { key: "description", label: "Description" },
  { key: "dueDate", label: "Due Date" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Actions" },
];



  return (
    <Table aria-label="table with dynamic content" className="w-full mt-6" >
      <TableHeader>
      {columns.map((column) => (
    <TableColumn key={column.key}>{column.label}</TableColumn>
  ))}
      </TableHeader>

      <TableBody>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TableRow key={task.id} >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>
              {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}
              </TableCell>
              <TableCell className={task.completed? "text-green-400" : "text-red-400"}>
                {task.completed ? "Completed" : "Pending"}
              </TableCell>
              <TableCell>
              <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditTask task={...task} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteTask id={task.id} />
              </span>
            </Tooltip>
          </div>

              </TableCell>
            </TableRow>
           ))
        ) : (
          <TableRow key="no-data">
          <TableCell colSpan={columns.length} className="text-center ">
            No Tasks to Show , please add one...
          </TableCell>
          <TableCell className='hidden' children={undefined}/> 
          <TableCell className='hidden' children={undefined}/> 
          <TableCell className='hidden' children={undefined}/> 
          <TableCell className='hidden' children={undefined}/> 
          <TableCell className='hidden' children={undefined}/> 
        </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TasksTable;