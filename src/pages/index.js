import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import kitchenImg from '../img/kitchen.jpg'
import kitchenWindowImg from '../img/kitchen_window.jpg'
import bedroomImg from '../img/bedroom.jpg'
import closetImg from '../img/closet.jpg'

let Index = ({postings}) => {

  return (
    <main className="home">
      <div className="img-column">
        <div className="img-wrapper">
          <img src={kitchenImg} alt="The kitchen" />
        </div>
        <div className="img-wrapper">
          <img src={bedroomImg} alt="The bedroom" />
        </div>
        <div className="img-wrapper">
          <img src={kitchenWindowImg} alt="View of the kitchen from the hallway" />
        </div>
        <div className="img-wrapper">
          <img src={closetImg} alt="View of the closet" />
        </div>
      </div>
    </main>
  )
}
export default withSiteData(withRouteData(Index))
