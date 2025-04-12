import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="size-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="size-4 animate-spin" />
    </div>
  )
}