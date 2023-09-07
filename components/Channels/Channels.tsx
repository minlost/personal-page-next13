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
      className={`z-10 w-full h-full aspect-video absolute top-0 left-0 overflow-hidden ${
        channel === 3 ? "bg-slate-400" : channel === 5 ? "bg-white" : "bg-black"
      }`}
    >
      {channel === 1 && (
        <div className="  w-full h-screen rowGradient ">
          <video
            className={`w-full h-full opacity-20 rowGradient ${
              isTvMode ? "scale-150" : "scale-[5] md:scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/video/tvEffect-d.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {channel === 2 && (
        <div className="  w-full h-full rowGradient ">
          <video
            className={`w-full h-full opacity-20 ${
              isTvMode ? "scale-150" : "scale-[5] md:scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/video/tvEffect-d.mp4" type="video/mp4" />
          </video>
          <video
            ref={videoRef}
            className={`w-full h-full opacity-50 ${
              isTvMode ? "scale-150" : "scale-[5] md:scale-[1.8] "
            }  `}
            playsInline
            autoPlay
            loop
          >
            <source src="/video/pulp-c.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {channel === 3 && (
        <div className="  w-full h-full rowGradient ">
          <video
            className={`w-full h-full opacity-20 ${
              isTvMode ? "scale-150" : "scale-[5] md:scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/video/tvEffect-d.mp4" type="video/mp4" />
          </video>
          <video
            ref={videoRef}
            className={`w-full h-full ${
              isTvMode ? "scale-150" : "scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            loop
          >
            <source src="/video/psycho-d.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {channel === 4 && (
        <div className="video-overlay  w-full h-full rowGradient   ">
          <video
            className={`w-full h-full opacity-20 ${
              isTvMode ? "scale-150" : "scale-[5] md:scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/video/tvEffect-d.mp4" type="video/mp4" />
          </video>
          <video
            ref={videoRef}
            className={`w-full h-full ${
              isTvMode ? "scale-150" : "scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
          >
            <source src="/video/shinning-c.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {channel === 5 && (
        <>
          <div className="video-overlay  w-full h-full  "></div>
        </>
      )}
      {channel === 6 && (
        <div className=" bg-slate-700 video-overlay  w-full h-full  "></div>
      )}

      {(channel === 7 || channel === 8 || channel === 9) && (
        <div className=" w-full h-full  ">
          <video
            ref={videoRef}
            className={`w-full h-full ${
              isTvMode ? "scale-150" : "scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
            loop
            muted
          >
            <source src="/video/whitenoise-c.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  )
}

export default Channels
