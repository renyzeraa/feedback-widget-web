import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./loading";

export function Screenshot() {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function takeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html') as HTMLElement)
    const base64image = canvas.toDataURL('image/png')
    setIsTakingScreenshot(false)
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