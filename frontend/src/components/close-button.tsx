import { PopoverButton } from "@headlessui/react";
import { X } from "phosphor-react";


export function CloseButton() {
  return (
    <PopoverButton className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário de Feedback">
      <X size={16} weight="bold" />
    </PopoverButton>
  )
}