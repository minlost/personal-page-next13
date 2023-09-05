"use client"

import { useSwitchScreen } from "@/hooks/useSwitchScreen"
import { useEffect, useRef } from "react"

const Channels = () => {
  const { channel, isTvMode } = useSwitchScreen()
  const videoRef = useRef(null)
  const { setVideoRef } = useSwitchScreen()

  useEffect(() => {
    setVideoRef(videoRef)
  }, [videoRef, setVideoRef])

  return (
    <div
      className={`z-10 w-full h-full absolute top-0 left-0 overflow-hidden duration-1000 ease-custom-bezier ${
        channel === 2 ? "bg-slate-400" : channel === 4 ? "bg-white" : "bg-black"
      }`}
    >
      {channel === 1 && (
        <div className="  w-full h-full rowGradient ">
          <video
            ref={videoRef}
            className={`w-full h-full opacity-50 ${
              isTvMode
                ? " scale-[2] md:scale-150 "
                : "scale-[5] md:scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            loop
          >
            <source src="/video/pulp.mp4" type="video/mp4" />
          </video>
          <video
            className={`w-full h-full opacity-20 ${
              isTvMode ? "scale-150" : "scale-[5] md:scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/video/tvEffect.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {channel === 2 && (
        <div className="  w-full h-full rowGradient ">
          <video
            ref={videoRef}
            className={`w-full h-full ${
              isTvMode ? "scale-150" : "scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            loop
          >
            <source src="/video/psycho.mp4" type="video/mp4" />
          </video>
          <video
            className={`w-full h-full opacity-20 ${
              isTvMode ? "scale-150" : "scale-[5] md:scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/video/tvEffect.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {channel === 3 && (
        <div className="video-overlay  w-full h-full  ">
          <video
            ref={videoRef}
            className={`w-full h-full ${
              isTvMode ? "scale-150" : "scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
          >
            <source src="/video/shinning.mp4" type="video/mp4" />
          </video>
          <video
            className={`w-full h-full opacity-20 ${
              isTvMode ? "scale-150" : "scale-[5] md:scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/video/tvEffect.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {channel === 4 && (
        <>
          <div className="video-overlay  w-full h-full  "></div>
        </>
      )}
      {channel === 5 && <div className="video-overlay  w-full h-full  "></div>}

      {(channel === 6 || channel === 7 || channel === 8 || channel === 9) && (
        <div className="video-overlay  w-full h-full  ">
          <video
            ref={videoRef}
            className={`w-full h-full ${
              isTvMode ? "scale-150" : "scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
          >
            <source src="/video/whitenoise.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  )
}

export default Channels
