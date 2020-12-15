import { styled } from "linaria/react"
import React, { useEffect, useState } from "react"

export default function TopProgress() {
  const winHeight = window.innerHeight
  const docHeight = document.documentElement.scrollHeight
  const [max, setMax] = useState(docHeight - winHeight)
  const [value, setValue] = useState(window.scrollY)

  const calculate_progress = () => {
    setMax(docHeight - winHeight)
    setValue(window.scrollY)
  }

  useEffect(() => {
    document.addEventListener("scroll", calculate_progress)

    return () => {
      document.removeEventListener("scroll", calculate_progress)
    }
  }, [winHeight, docHeight, window.scrollY])

  return <Progress max={max} value={value} />
}

const progressColor = "#ef3982"

const Progress = styled.progress`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-color: transparent;
  color: ${progressColor};
  &::-webkit-progress-bar {
    background-color: transparent;
  }
  &::-webkit-progress-value {
    background-color: ${progressColor};
  }
  &::-moz-progress-bar {
    background-color: ${progressColor};
  }
`
