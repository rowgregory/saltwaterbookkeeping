import React, { FC, LegacyRef } from 'react'

interface VideoProps {
  videoRef: LegacyRef<HTMLVideoElement> | undefined
  className: string
  src: string
}

const Video: FC<VideoProps> = ({ videoRef, className, src }) => {
  return (
    <video ref={videoRef} className={className} autoPlay muted loop playsInline preload="auto">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video
