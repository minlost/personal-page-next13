import { useEffect } from "react"
import { useSwitchScreen } from "./useSwitchScreen"

const useFirstLoadAniamtion = () => {
  const { isFirstLoad } = useSwitchScreen()

  useEffect(() => {
    useSwitchScreen.setState({ isFirstLoad: false })
  }, [isFirstLoad])

  return { isFirstLoad }
}

export default useFirstLoadAniamtion
