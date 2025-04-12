import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "./close-button";
import { FeedbackType, feedbackTypes } from "./widget-form";
import { Screenshot } from "./screenshot";
import { useState } from "react";
import { api } from "../lib/api";
import { Loading } from "./loading";

interface WidgetFormStepContentProps {
  type: FeedbackType
  handleRestartFeedback: VoidFunction
  setFeedbackSent: VoidFunction
}

export function WidgetFormStepContent({ type, handleRestartFeedback, setFeedbackSent }: WidgetFormStepContentProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string>('')
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false)
  const { image, title, placeHolder } = feedbackTypes[type]

  async function handleSubmitFeedback(event: React.FormEvent) {
    event.preventDefault()
    setIsSendingFeedback(true)

    await api.post('/feedbacks', {
      type,
      comment,
      screenshot,
    })
      .then(() => {
        setFeedbackSent()
        setIsSendingFeedback(false)
      })
      .catch((error) => {
        console.error(error)
        setIsSendingFeedback(false)
      })
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <button type="button" onClick={() => handleRestartFeedback()}>
          <ArrowLeft weight="bold" size={16} className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" />
        </button>
        <span className="text-xl leading-6 flex flex-row gap-2 items-center">
          <img src={image.source} alt={image.alt} className="size-6" />
          {title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full text-sm min-h-[102px] placeholder:text-zinc-400 text-zinc-100 border border-zinc-600 bg-transparent rounded-md p-2 focus:border-brand focus:ring-brand focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder={placeHolder}
          onChange={(e) => setComment(e.target.value)}
        />
        <footer className="mt-2 flex items-center gap-2">
          <Screenshot
            onSceenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            className="p-2 h-10 bg-brand border-transparent flex-1 rounded flex justify-center items-center text-sm hover:bg-brand-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand disabled:opacity-50 disabled:hover:bg-brand disabled:cursor-not-allowed"
            title={comment.length === 0 ? 'Escreva um feedback' : 'Enviar feedback'}
            disabled={comment.length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}