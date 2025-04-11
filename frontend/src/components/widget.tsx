import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./widget-form";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-[99999] flex flex-col items-end">
      <PopoverPanel>
        <WidgetForm />
      </PopoverPanel>
      <PopoverButton className="px-3 h-12 bg-brand rounded-full flex items-center justify-center text-white group">
        <ChatTeardropDots size={24} weight="regular" />
        <span className="group-hover:max-w-xs group-hover:ml-1 max-w-0 overflow-hidden transition-all duration-500 ease-linear font-semibold">
          Feedback
        </span>
      </PopoverButton>
    </Popover>
  )
}