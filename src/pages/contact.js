import React from "react";
import { withRouteData, Head } from "react-static";
import Title from '../components/Title'

const Contact = ({ openings }) => {
  return (
    <div className="flex-column contact">
      <Head>
        <title>Contact | Hidden Willows Townhomes</title>
      </Head>
      <Title>Contact</Title>
      <h2 className="title">For questions, contact:</h2>
      <p className="name">Jaime Seamons</p>
      <p className="phone">
        <a href="tel:(435) 554-8683">
          (435) 554-8683
        </a>
      </p>
      <p className="email">
        <a href="mailto:seamonsjaime@gmail.com?subject=Hidden%20Willows%20Information%20Request&body=">
          seamonsjaime@gmail.com
        </a>
      </p>
    </div>
  );
};
export default withRouteData(Contact);
