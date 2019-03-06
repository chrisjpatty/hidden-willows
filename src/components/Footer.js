import React from 'react'
import Willow from "../img/willow_dark.svg";
import Stroke from "../img/stroke.svg";

export default () => (
  <footer>
    <div className="willow-stroke">
      <img className="willow" src={Willow} aria-hidden="true" />
      <img className="stroke" src={Stroke} aria-hidden="true" />
    </div>
  </footer>
)
