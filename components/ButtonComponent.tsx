"use client";
/* eslint-disable prettier/prettier */
import { Button } from "@heroui/react";

interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: '"primary" | "secondary" | "tertiary" | undefined' ;
  onClick?:  () => void; 
  className?: string;
   type?: 'submit' | 'reset' | 'button';
   variant?:"string"
}

export default function ButtonComponent({
  children,
  size,
  color,
  onClick,
  className,
  type,
  variant
}: ButtonProps) {
  return (
    <Button className={className} color={color} size={size} type={type} onPress={onClick} variant={variant}>
    {children}
    </Button>
  )
}