import { useEffect, useState } from "react"

export const useShowScrollbar = (isTvMode: boolean) => {
  const [shouldShowScrollbar, setShouldShowScrollbar] = useState(false)

  useEffect(() => {
    if (isTvMode) {
      setShouldShowScrollbar(false)
    }
    const timer = setTimeout(() => {
      setShouldShowScrollbar(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [isTvMode])

  return { shouldShowScrollbar }
}
