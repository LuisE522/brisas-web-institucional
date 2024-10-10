import { clsx, type ClassValue } from "clsx"
import { format } from "date-fns";
import { cookies } from "next/headers";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formateDate (date: string) {
  const fecha = new Date(date);
  const fechaFormateada = format(fecha, "yyyy-MM-dd");

  return fechaFormateada;
};