"use client"
import { cn } from "@/lib/utils"
import "../../app/css/controller.css"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { FC, useEffect, useState } from "react"
import { BsFillPlayFill, BsFillVolumeMuteFill } from "react-icons/bs"

interface ChBtnProps {
  setChannel: (id: number) => void
  item: { id: number }
  handleChannel: () => void
}

const ChBtn: FC<ChBtnProps> = ({ setChannel, handleChannel, item }) => {
  const handleClick = () => {
    handleChannel()
    setChannel(item.id)
  }

  return (
    <div
      onClick={handleClick}
      className="relative flex justify-center cursor-pointer "
    >
      <div className="shadow-controller-button-shadow rounded-[4px]">
        <div className="controller_btn__channel controller_btn controller_btn_animation"></div>
      </div>
      <div className="controller_btn__label">
        <span>{item.id}</span>
      </div>
    </div>
  )
}

const ControllerSpacer: FC = () => {
  return <div className="w-[90%] h-[1px] bg-white " />
}

interface ComponentBodyProps {
  children: React.ReactNode
  className?: string
}

const ControllerBodySection: FC<ComponentBodyProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(` w-full pt-[15px]   `, `${className} `)}>
      {children}
    </div>
  )
}

const ControllerBodySectionBody: FC<ComponentBodyProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        `  w-full h-full grid gap-y-[13px] items-center  grid-cols-3fr   grid-rows-3fr justify-cente`,
        `controller__body__section__body  `
      )}
    >
      {children}
    </div>
  )
}

const Controller: FC = () => {
  const {
    isTvMode,
    toggleTVMode,
    setChannel,
    setIsShowing,
    isShowing,
    muteVideo,
    togglePlayVideo,
    videoRef,
  } = useSwitchScreen()

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  useEffect(() => {
    setAudio(new Audio("/sounds/glitch.mp3"))
  }, [])

  const handleChannel = () => {
    if (audio) {
      audio.onended = () => {
        setIsAudioPlaying(false)
      }
      if (!isAudioPlaying) {
        audio.play()
        setIsAudioPlaying(true)
      }
    }
  }

  const muteVideoFnc = () => {
    if (videoRef !== null) {
      muteVideo(videoRef.current)
    }
  }

  const togglePlayVideoFunc = () => {
    if (videoRef !== null) {
      togglePlayVideo(videoRef.current)
    }
  }

  const channel = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ]

  return (
    <div
      className={`w-[200px] h-[400px] fixed bg-no-repeat bg-cover bg-center right-[2rem] md:right-[5rem] bottom-[1.5rem] z-[60] border border-black controller rounded-[5px] flex flex-col items-center justify-center transition ease-in-out duration-500 bg-controller-bg ${
        isTvMode ? "translate-x-0 -rotate-2" : "translate-x-[200%]"
      }`}
    >
      <div className=" z-[100] w-[85%] h-[80%] bg-controller-body-bg flex flex-col items-center rounded-[5px] border-[6px] border-black">
        <ControllerBodySection className={"h-[9%] pb-[20px]"}>
          <ControllerBodySectionBody>
            <div className="relative flex justify-center cursor-pointer">
              <div className="shadow-controller-button-shadow rounded-[4px]">
                <div
                  onClick={() => toggleTVMode()}
                  className="controller_btn__power controller_btn controller_btn_animation"
                ></div>
              </div>
              <div className="controller_btn__label">
                <span>ON</span>
              </div>
            </div>
          </ControllerBodySectionBody>
        </ControllerBodySection>
        <ControllerSpacer />
        <ControllerBodySection className={"h-[35%] pb-[12px] flex"}>
          <ControllerBodySectionBody>
            {channel.map((item) => (
              <ChBtn
                key={item.id}
                setChannel={setChannel}
                handleChannel={handleChannel}
                item={item}
              />
            ))}
          </ControllerBodySectionBody>
        </ControllerBodySection>
        <ControllerSpacer />
        <div className="controller__body__section3">
          <div
            onClick={() => togglePlayVideoFunc()}
            className=" controller_btn_box_shadow_round rounded-full flex justify-center items-center shadow-controller-button-shadow "
          >
            <div className="controller__btn__play controller_btn  controller_btn_animation">
              <BsFillPlayFill className="text-[20px] text-white" />
            </div>
            <div className="controller_btn__label">
              <span>PLAY</span>
            </div>
          </div>
          <div
            onClick={() => muteVideoFnc()}
            className=" controller_btn_box_shadow_round rounded-full flex justify-center items-center shadow-controller-button-shadow shadow_round_left "
          >
            <div className="controller__btn__mute controller_btn  controller_btn_animation">
              <BsFillVolumeMuteFill className="text-[20px] text-white" />
            </div>
            <div className="controller_btn__label">
              <span>MUTE</span>
            </div>
          </div>
          <div
            onClick={() => setIsShowing(!isShowing)}
            className="controller__btn__shadow_show"
          >
            <div className="controller__btn__show controller_btn  controller_btn_animation"></div>
            <div className="controller_btn__label">
              <span>SHOW</span>
            </div>
          </div>

          <div className="controller__body__section3_label">
            <p>TV - 1986 </p>
          </div>
        </div>
      </div>
      <div className="controller__body__bottom ">
        <p>Pro Space Enterpsise</p>
        <p>WOLF COMPUTERS</p>
      </div>
    </div>
  )
}

export default Controller
