import { CloseButton } from "./close-button";

interface WidgetFormStepSuccessProps {
  handleRestartFeedback: VoidFunction
}

export function WidgetFormStepSuccess({ handleRestartFeedback }: WidgetFormStepSuccessProps) {
  return (
    <>
      <header><CloseButton /></header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 34C38 36.209 36.209 38 34 38H6C3.791 38 2 36.209 2 34V6C2 3.791 3.791 2 6 2H34C36.209 2 38 3.791 38 6V34Z" fill="#77B255" />
          <path d="M31.28 8.36202C30.124 7.61102 28.576 7.94002 27.822 9.09802L16.936 25.877L11.907 21.227C10.893 20.289 9.31103 20.352 8.37403 21.365C7.43703 22.379 7.49903 23.961 8.51303 24.898L15.722 31.564C16.202 32.009 16.812 32.229 17.418 32.229C18.091 32.229 18.952 31.947 19.517 31.09C19.849 30.584 32.017 11.82 32.017 11.82C32.768 10.661 32.438 9.11302 31.28 8.36202Z" fill="white" />
        </svg>
        <span className="text-xl mt-2">Agradecemos o feedback!</span>
        <button
          type="button"
          className="py-2 mt-6 text-sm px-6 bg-zinc-800 rounded-md border-transparent leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand"
          onClick={() => handleRestartFeedback()}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}