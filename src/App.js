import React, { useState } from "react";
import { Root, Routes, Head } from "react-static";
import { Location } from "@reach/router";
import Header from "./components/Header";
import Footer from './components/Footer'
import MobileHeader from "./components/MobileHeader";
import { useMedia } from "react-use-media";
import { Transition, animated } from "react-spring";
import "normalize.css";
import "./app.css";

const App = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(s => !s);

  const isShort = useMedia({
    maxWidth: 900
  });
  return (
    <Root>
      {
        isShort &&
        <MobileHeader />
      }
      <Head>
        <title>Hidden Willows Townhomes</title>
        <meta name="theme-color" content="#2f2414" />
      </Head>
      {
        !isShort &&
        <Location>
          {props => (
            <Header
              isShort={isShort}
              toggleMenu={toggleMenu}
              isOpen={isOpen}
              {...props}
            />
          )}
        </Location>
      }
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
                      <Comp isShort={isShort} />
                      {
                        isShort &&
                        <Footer />
                      }
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
