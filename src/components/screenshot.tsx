import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./loading";

interface ScreenshotProps {
  screenshot: string | null
  onSceenshotTook: (image: string | null) => void
}

export function Screenshot({ onSceenshotTook, screenshot }: ScreenshotProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function takeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html') as HTMLElement)
    const base64image = canvas.toDataURL('image/png')
    onSceenshotTook(base64image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="size-10 p-1 rounded border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: '118px',
          backgroundPosition: 'right bottom'
        }}
        title="Deletar screenshot"
        onClick={() => onSceenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="bg-zinc-800 p-2 rounded border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand h-10"
      onClick={takeScreenshot}
    >
      {isTakingScreenshot ?
        <Loading />
        :
        <Camera weight="regular" className="size-6 text-text-primary" />
      }
    </button>
  )
}