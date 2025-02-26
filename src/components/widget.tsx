import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 z-[99999]">
      <PopoverButton className="px-3 h-12 bg-brand rounded-full flex items-center justify-center text-white group">
        <ChatTeardropDots size={24} weight="regular" />
        <span className="group-hover:max-w-xs group-hover:ml-1 max-w-0 overflow-hidden transition-all duration-500 ease-linear font-semibold">
          Feedback
        </span>
      </PopoverButton>
      <PopoverPanel anchor="bottom" className="flex flex-col bg-slate-900 text-white">
        <a href="/analytics">Analytics</a>
        <a href="/engagement">Engagement</a>
        <a href="/security">Security</a>
        <a href="/integrations">Integrations</a>
      </PopoverPanel>
    </Popover>
  )
}