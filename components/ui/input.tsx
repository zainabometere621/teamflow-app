import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-lg border border-[#2d3f55] bg-[#1e293b] px-2.5 py-1 text-sm text-[#ffffff] outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
