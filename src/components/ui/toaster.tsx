"use client"

import { Toaster as Sonner } from "sonner"

export function Toaster() {
  return (
    <Sonner
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
          title: "text-gray-900 dark:text-gray-100",
          description: "text-gray-600 dark:text-gray-400",
          actionButton: "bg-blue-600 hover:bg-blue-700 text-white",
          cancelButton: "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200",
        },
      }}
    />
  )
}
