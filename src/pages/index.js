import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import kitchenImg from '../img/kitchen.jpg'
import bedroomImg from '../img/bedroom.jpg'

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
      </div>
    </main>
  )
}
export default withSiteData(withRouteData(Index))
