"use client";
import {cn, Input} from "@heroui/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label?: string;
  className?: string;
  options?: { value: string; label: string }[];
}


export default function InputComponent({ label , options, type , className,...props} : InputProps ) {
  return (
    <div className="flex flex-col w-full">
 {label && (<label className="text-gray-200 font-medium my-3 text-left">{label}</label>)}
      
{options ? (
  <select {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
  className={cn(
    "rounded-md bg-gray-800 text-white px-3 py-2 placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-200 transition-all",
    className
  )}
  >
  {options.map(({ value, label }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
  </select>
) : (
  <Input
  {...props}
  className={cn(
   "rounded-md bg-gray-800 text-white px-3 py-2 placeholder-gray-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-200 transition-all",

   className
 )}
  placeholder="Enter new Task..." 
  type={type}
/>
)}
    </div>
  )
}