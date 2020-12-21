import React from "react"
import SnsLinks from "../sns"

import "./main.scss"

export default function Main() {

  const setColor = "white";
  
  return (
    <div className="mainContainer">
      <div className="mainItemWrapper">
        <div className="mainHead">
          <h2>I'm Masafumi Mori.</h2>
        </div>
        <div className="mainDescription">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis leo
            est. Nullam tristique et quam id lobortis.
          </p>
        </div>
        <div className="mainLinkBox">
          <SnsLinks setColor={setColor} />
        </div>
      </div>
    </div>
  )
}
