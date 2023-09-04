"use client"
import "../../app/css/controller.css"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { FC } from "react"
import { BsFillPlayFill, BsFillVolumeMuteFill } from "react-icons/bs"

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
      className={`controller transition ease-in-out duration-500 ${
        isTvMode ? "translate-x-0 -rotate-2" : "translate-x-[200%]"
      }`}
    >
      <div className="controller__body">
        <div className="controller__body__section1 ">
          <div className="controller__body__section__body ">
            <div className="controller_btn_box ">
              <div className="controller_btn_box_shadow">
                <div
                  onClick={() => toggleTVMode()}
                  className="controller_btn__power controller_btn controller_btn_animation"
                ></div>
              </div>
              <div className="controller_btn__label">
                <span>ON</span>
              </div>
            </div>
          </div>
        </div>
        <div className="controller__spacer " />
        <div className="controller__body__section2 ">
          <div className="controller__body__section__body controller__body__section__body__section2">
            {channel.map((item) => (
              <div
                key={item.id}
                onClick={() => setChannel(item.id)}
                className="controller_btn_box "
              >
                <div className="controller_btn_box_shadow">
                  <div className="controller_btn__channel controller_btn controller_btn_animation"></div>
                </div>
                <div className="controller_btn__label">
                  <span>{item.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="controller__spacer " />

        <div className="controller__body__section3">
          <div
            onClick={() => togglePlayVideoFunc()}
            className="controller_btn_box_shadow_round"
          >
            <div className="controller__btn__play controller_btn  controller_btn_animation">
              <BsFillPlayFill />
            </div>
            <div className="controller_btn__label">
              <span>PLAY</span>
            </div>
          </div>
          <div
            onClick={() => muteVideoFnc()}
            className="controller_btn_box_shadow_round shadow_round_left"
          >
            <div className="controller__btn__mute controller_btn  controller_btn_animation">
              <BsFillVolumeMuteFill />
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
