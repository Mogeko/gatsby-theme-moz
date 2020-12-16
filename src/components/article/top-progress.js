import { styled } from "linaria/react"
import React, { useEffect, useState } from "react"
import { topProgressColor } from "../../styles/variables"

export default function TopProgress() {
  const winHeight = window.innerHeight
  const docHeight = document.documentElement.scrollHeight
  const [max, setMax] = useState(docHeight - winHeight)
  const [value, setValue] = useState(window.scrollY)

  useEffect(() => {
    const calculate_progress = () => {
      setMax(docHeight - winHeight)
      setValue(window.scrollY)
    }
    document.addEventListener("scroll", calculate_progress)

    return () => {
      document.removeEventListener("scroll", calculate_progress)
    }
  }, [winHeight, docHeight, window.scrollY])

  return <Progress max={max} value={value} />
}

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
  color: ${topProgressColor};
  &::-webkit-progress-bar {
    background-color: transparent;
  }
  &::-webkit-progress-value {
    background-color: ${topProgressColor};
  }
  &::-moz-progress-bar {
    background-color: ${topProgressColor};
  }
`
