import React from 'react'
import Willow from '../img/willow_dark.svg'
import Stroke from '../img/stroke.svg'

export default ({ children, className }) => (
  <h1 className={`route-title ${className}`}>
    {children}
    <div className="title-image-wrapper">
      <img className="willow" src={Willow} aria-hidden="true" />
      <img className="stroke" src={Stroke} aria-hidden="true" />
    </div>
  </h1>
)
