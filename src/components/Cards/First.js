import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const First = ({}) => (
  <Flippy
    flipOnHover={true} // default false
    flipOnClick={false} // default false
    flipDirection="vertical" // horizontal or vertical
    ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: "725px", height: "400px" }} /// these are optional style, it is not necessary
  >
    <FrontSide>
      <img
        src="./images/translation.png"
        alt="Smiley face"
        height="380"
        width="700"
      />
    </FrontSide>
    <BackSide style={{ backgroundColor: "#ffffff" }}>ROCKS</BackSide>
  </Flippy>
);

export default First;
