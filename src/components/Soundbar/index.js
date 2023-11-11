import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import music from '../../assets/sounds/fake_verthandi.mp3'

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  right: 8rem;
  top: 3rem;
  z-index: 3;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
    color:#00abf0
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
    color:#00abf0;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
    color:#00abf0;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
    color:#00abf0;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
    color:#00abf0;
  }

  &:before {
    content: '<music>';
    font-family: 'La Belle Aurore', cursive;
    color: #00ff7f;
    font-size: 18px;
    position: absolute;
    margin-top: -20px;
    left: -60px;
    opacity: 0.9;
    line-height: 20 px;
  }

  &:after {
    content: '<music/>';
    font-family: 'La Belle Aurore', cursive;
    color: #00ff7f;
    font-size: 18px;
    line-height: 20px;
    position: absolute;
    left: -60px;
    bottom: -20px;
    opacity: 0.9;
  }
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
  background: #00ff7f;
  border: 1px solid;

  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? 'running' : 'paused')};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`
const SoundBar = () => {
  const ref = useRef(null)
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)

    if (!click) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }
  return (
    <Box onClick={() => handleClick()}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio src={music} ref={ref} loop /> &nbsp;
    </Box>
  )
}

export default SoundBar
