import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Client content not yet supplied is stored in firm.ts as "[bracketed text]".
// Public pages hide those values instead of showing them as if confirmed.
export function isPlaceholder(value: string) {
  return value.trim().startsWith("[");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
