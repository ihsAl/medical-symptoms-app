import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function to merge class names and handle conditional classes
// This function combines clsx and twMerge to ensure that Tailwind CSS classes are merged correctly
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
