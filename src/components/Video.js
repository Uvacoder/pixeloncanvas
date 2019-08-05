import React from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const Video = styled.div`
  position: relative;
  margin: 1.25rem 0 1.5rem 0;

  .video-padding {
    width: 100%;
    padding-bottom: ${props => 100 / props.aspectRatio}%;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default ({ src, aspectRatio, poster }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <Video ref={ref} aspectRatio={aspectRatio} poster={poster} inView={inView}>
      <div className="video-padding"></div>
      {inView && (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          playsInline
          loop
        ></video>
      )}
    </Video>
  )
}