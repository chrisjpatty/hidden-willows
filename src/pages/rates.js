import React from "react";
import { withRouteData, Head } from "react-static";
import Title from '../components/Title'

const Rates = ({ openings }) => {
  return (
    <div className="flex-column">
      <Head>
        <title>Rates & Amenities | Hidden Willows Townhomes</title>
      </Head>
      <Title>Rates & Amenities</Title>
      <div className="price-wrapper">
        <span className="months">12</span> month lease for{" "}
        <div className="price-box">
          <span className="dollar">$</span>475 <span className="caption">per month</span>
        </div>
      </div>
      <ul className="amenities">
        <li>Utilities are included</li>
        <li>All private rooms</li>
        <li>All private bathrooms</li>
        <li>Washers and dryers</li>
        <li>Guaranteed FREE parking</li>
      </ul>
    </div>
  );
};
export default withRouteData(Rates);
