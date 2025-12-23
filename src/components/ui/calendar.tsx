"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/Button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-3", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-between pt-1 relative items-center mb-8",
                caption_label: "text-[#111318] dark:text-white text-lg font-bold leading-tight",
                nav: "flex items-center gap-2",
                nav_button: cn(
                    buttonVariants({ variant: "outline" }),
                    "flex size-9 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#111318] dark:text-gray-200 transition-colors"
                ),
                nav_button_previous: "",
                nav_button_next: "",
                table: "w-full border-collapse",
                head_row: "grid grid-cols-7 mb-2",
                head_cell: "flex items-center justify-center h-10 text-xs font-bold text-gray-400 uppercase tracking-wider",
                row: "grid grid-cols-7 gap-1 md:gap-2",
                cell: "h-10 md:h-12 w-full",
                day: cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-10 md:h-12 w-full rounded-lg text-sm font-medium text-[#111318] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                ),
                day_selected:
                    "bg-primary text-white font-bold shadow-md shadow-blue-500/30 hover:bg-primary hover:text-white focus:bg-primary focus:text-white relative group",
                day_today: "font-bold text-primary dark:text-primary border border-primary/20 bg-primary/5",
                day_outside: "day-outside text-gray-400 opacity-50",
                day_disabled: "text-gray-400 opacity-50",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{
                IconLeft: () => <span className="material-symbols-outlined text-[20px]">chevron_left</span>,
                IconRight: () => <span className="material-symbols-outlined text-[20px]">chevron_right</span>,
            }}
            {...props}
        />
    )
}
Calendar.displayName = "Calendar"

export { Calendar }
