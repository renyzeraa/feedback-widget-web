import { CloseButton } from "./close-button";
import { FeedbackType, feedbackTypes } from "./widget-form";

interface WidgetFormStepTypeProps {
  setType: (type: FeedbackType) => void;
}

export function WidgetFormStepType({ setType }: WidgetFormStepTypeProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([feedbackType, { title, image }]) => (
          <button
            key={feedbackType}
            onClick={() => setType(feedbackType as FeedbackType)}
            className='bg-zinc-800 rounded-lg py-8 w-24 gap-2 flex-1 flex flex-col items-center border-2 border-transparent hover:border-brand focus:border-brand transition-colors focus:outline-none'
            type="button"
          >
            <img src={image.source} alt={image.alt} />
            <span>{title}</span>
          </button>
        ))
        }
      </div>
    </>
  )
}