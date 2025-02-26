import { ChatTeardropDots } from "phosphor-react";


export function Widget() {
  return (
    <button type="button" className="px-3 h-12 bg-brand rounded-full flex items-center justify-center text-white">
      <ChatTeardropDots size={24} weight="regular" />
      <span>Feedback</span>
    </button>
  )
}