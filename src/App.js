import React from "react";
import { Root, Routes } from "react-static";
import { Location } from "@reach/router";
import Header from "./components/Header";
import { Transition, animated } from "react-spring";
import "normalize.css";
import "./app.css";

const App = props => {
  return (
    <Root>
      <Location>{props => <Header {...props} />}</Location>
      <div className="content">
        <div className="inner-wrapper">
          <Routes>
            {({ routePath, getComponentForPath }) => (
              <Transition
                native
                items={routePath}
                from={{ transform: "translateX(-100px)", opacity: 0 }}
                enter={{ transform: "translateX(0px)", opacity: 1 }}
                leave={{ transform: "translateX(-100px)", opacity: 0 }}
              >
                {item => props => {
                  const Comp = getComponentForPath(item);
                  return (
                    <animated.div className="route-wrapper" style={props}>
                      <Comp />
                    </animated.div>
                  );
                }}
              </Transition>
            )}
          </Routes>
        </div>
      </div>
    </Root>
  );
};

export default App;
