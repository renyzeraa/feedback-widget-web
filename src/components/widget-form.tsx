import { useState } from "react";

import bugImageUrl from '../assets/bug.svg'
import ideiaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'
import { WidgetFormStepType } from "./widget-form-step-type";
import { WidgetFormStepContent } from "./widget-form-step-content";
import { WidgetFormStepSuccess } from "./widget-form-step-success";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de Inseto'
    },
    placeHolder: 'Diga o problema que esta ocorrendo no site'
  },
  IDEIA: {
    title: 'Ideia',
    image: {
      source: ideiaImageUrl,
      alt: 'Imagem de uma lâmpada'
    },
    placeHolder: 'Nos diga qual ideia você tem'
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    },
    placeHolder: 'Pensando em algo diferente, deixe seu comentário'
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<null | FeedbackType>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ?
        (<WidgetFormStepSuccess handleRestartFeedback={handleRestartFeedback} />)
        :
        (<>
          {!feedbackType ?
            <WidgetFormStepType
              setType={setFeedbackType}
            />
            :
            <WidgetFormStepContent
              type={feedbackType}
              handleRestartFeedback={handleRestartFeedback}
              setFeedbackSent={() => setFeedbackSent(true)}
            />
          }
        </>)
      }

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/renyzeraa" target="_blank" title="Github profile">Renan Silva</a>
      </footer>
    </div>
  )
}