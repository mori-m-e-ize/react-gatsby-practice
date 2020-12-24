import { useState, useEffect } from "react"

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({})

  useEffect(() => {
    const getWindowDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height,
      }
    }

    //TODO: 初期表示のため追加
    setWindowDimensions(getWindowDimensions())

    const onResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return windowDimensions
}
