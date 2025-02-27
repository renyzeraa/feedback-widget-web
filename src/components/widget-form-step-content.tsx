import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "./close-button";
import { FeedbackType, feedbackTypes } from "./widget-form";
import { Screenshot } from "./screenshot";

interface WidgetFormStepContentProps {
  type: FeedbackType
  setType: (type: null) => void
}

export function WidgetFormStepContent({ type, setType }: WidgetFormStepContentProps) {
  const { image, title, placeHolder } = feedbackTypes[type]

  return (
    <>
      <header className="flex items-center justify-between">
        <button type="button" onClick={() => setType(null)}>
          <ArrowLeft weight="bold" size={16} className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" />
        </button>
        <span className="text-xl leading-6 flex flex-row gap-2 items-center">
          <img src={image.source} alt={image.alt} className="size-6" />
          {title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full">
        <textarea className="min-w-[304px] w-full text-sm min-h-[102px] placeholder:text-zinc-400 text-zinc-100 border border-zinc-600 bg-transparent rounded-md p-2 focus:border-brand focus:ring-brand focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" placeholder={placeHolder} />
        <footer className="mt-2 flex items-center gap-2">
          <Screenshot />
          <button
            type="submit"
            className="p-2 h-10 bg-brand border-transparent flex-1 rounded flex justify-center items-center text-sm hover:bg-brand-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}