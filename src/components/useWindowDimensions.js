import { useState, useEffect } from "react"

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    {}
  )

  useEffect(() => {
    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height,
      }
    }

    const onResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return windowDimensions
}
