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
      className={`z-10 aspect-video h-full w-full fixed top-0 left-0 overflow-hidden duration-1000 ease-custom-bezier ${
        channel === 2
          ? "bg-slate-400"
          : channel === 4
          ? "bg-white"
          : "bg-slate-700"
      }`}
    >
      {channel === 1 && (
        <div className="video-overlay  w-full h-full  ">
          <video
            ref={videoRef}
            className={`w-full h-full ${
              isTvMode ? "scale-150" : "scale-[5] md:scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
          >
            <source src="/video/pulp.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      {channel === 2 && (
        <div className="video-overlay  w-full h-full  ">
          <video
            ref={videoRef}
            className={`w-full h-full ${
              isTvMode ? "scale-150" : "scale-[4] lg:scale-150 "
            }  `}
            playsInline
            autoPlay
          >
            <source src="/video/psycho.mp4" type="video/mp4" />
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
        </div>
      )}
      {channel === 4 && (
        <div className="bg-black opacity-70 w-full h-full relative ">
          <div className="-z-10 section2  w-full h-full ">
            <svg viewBox="-20 -20 100 100">
              <filter id="tvNoise" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence id="tvTurbulence">
                  <animate
                    attributeName="baseFrequency"
                    dur="20s"
                    values="0.1 0.1;0.05 0.05;0.1 0.1;"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  scale="10"
                ></feDisplacementMap>
              </filter>
            </svg>
          </div>
        </div>
      )}

      {channel === 5 && (
        <>
          <div className="video-overlay  w-full h-full  "></div>
        </>
      )}

      {(channel === 6 || channel === 7 || channel === 8 || channel === 9) && (
        <div className=" w-full h-full section bg-slate-300">
          <svg viewBox="0 0 100 100">
            <filter id="noise">
              <feTurbulence id="turbulence">
                <animate
                  attributeName="baseFrequency"
                  dur="10s"
                  values="0.9 0.9;0.8 0.8;0.9 0.9;"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                scale="20"
              ></feDisplacementMap>
            </filter>
          </svg>
        </div>
      )}
    </div>
  )
}

export default Channels
