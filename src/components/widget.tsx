import { ChatTeardropDots } from "phosphor-react";


export function Widget() {
  return (
    <div className="absolute bottom-4 right-4 z-[99999]">
      <button type="button" className="px-3 h-12 bg-brand rounded-full flex items-center justify-center gap-1 text-white group">
        <ChatTeardropDots size={24} weight="regular" />
        <span className="group-hover:max-w-xs max-w-0 overflow-hidden transition-all duration-500 ease-linear font-semibold">
          Feedback
        </span>
      </button>
    </div>
  )
}