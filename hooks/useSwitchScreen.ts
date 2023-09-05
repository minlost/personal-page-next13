import { create } from "zustand"
import React from "react"

type SwitchScreenStore = {
  isTvMode: boolean
  toggleTVMode: () => void
  channel: number
  setChannel: (channel: number) => void
  isScreenAnimating: boolean
  setIsScreenAnimating: (isScreenAnimating: boolean) => void
  muteVideo: (video: HTMLVideoElement | null) => void // Note the type change here
  togglePlayVideo: (video: HTMLVideoElement | null) => void // And here
  videoRef: React.RefObject<HTMLVideoElement> | null
  setVideoRef: (ref: React.RefObject<HTMLVideoElement>) => void
  videoIsPlaying: boolean
  videoIsMuted: boolean
  isShowing: boolean
  setIsShowing: (isShowing: boolean) => void
  isSwaping: boolean
}

export const useSwitchScreen = create<SwitchScreenStore>((set) => ({
  isTvMode: false,
  toggleTVMode: () => set((state) => ({ isTvMode: !state.isTvMode })),
  channel: 1,
  setChannel: (channel) => {
    set(() => ({ channel, isSwaping: true }))
    setTimeout(() => set(() => ({ isSwaping: false })), 500)
  },
  isScreenAnimating: false,
  setIsScreenAnimating: (isScreenAnimating) =>
    set(() => ({ isScreenAnimating })),
  muteVideo: (video) => {
    if (video) {
      video.muted = !video.muted
      set(() => ({ videoIsMuted: video.muted }))
    } else {
      set(() => ({ videoIsMuted: false }))
    }
  },
  togglePlayVideo: (video) => {
    if (video) {
      if (video.paused) {
        video.play()
        set(() => ({ videoIsPlaying: true }))
      } else {
        video.pause()
        set(() => ({ videoIsPlaying: false }))
      }
    }
  },
  videoRef: null,
  setVideoRef: (ref) => set(() => ({ videoRef: ref })),
  videoIsPlaying: false,
  videoIsMuted: false,
  isShowing: true,
  setIsShowing: (isShowing) => set(() => ({ isShowing })),
  isSwaping: false,
}))
