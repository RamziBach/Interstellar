import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/app.css';

import circle1 from '../img/circle-1.svg';
import circle2 from '../img/circle-2.svg';
import circle3 from '../img/circle-3.svg';
import circle4 from '../img/circle-4.svg';
import circle5 from '../img/circle-5.svg';
import circle6 from '../img/circle-6.svg';
import circle7 from '../img/circle-7.svg';
import circle8 from '../img/circle-8.svg';
import circle9 from '../img/circle-9.svg';
import circle10 from '../img/circle-10.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans0 = (x, y) => `translate3d(${x / 90}px, ${y / 90}px, 0)`;
const trans1 = (x, y) => `translate3d(${x / 40}px, ${y / 40}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 20}px, 0)`;
const trans3 = (x, y) => `translate3d(${x / 15}px,${y / 15}px, 0)`;
// const trans32 = (x, y) => `translate3d(${x / 13}px,${y / 13}px, 0)`;
const trans4 = (x, y) => `translate3d(${x / 10}px,${y / 10}px, 0)`;

const App = () => {
  const [isPulsing1, setIsPulsing1] = useState(true);
  const [isPulsing2, setIsPulsing2] = useState(null);
  const [isPulsing3, setIsPulsing3] = useState(null);
  const [isPulsing4, setIsPulsing4] = useState(null);
  const [isPopUp1, setIsPopUp1] = useState(false);
  const [isPopUp2, setIsPopUp2] = useState(false);
  const [isPopUp3, setIsPopUp3] = useState(false);
  const [isPopUp4, setIsPopUp4] = useState(false);

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 20, tension: 550, friction: 140 },
  }));

  return (
    <>
      <div
        className="hero"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <div className="landing-child">
          <div
            className="circles"
            style={{ transform: props.xy.interpolate(trans0) }}
          >
            <animated.div
              className="circle"
              style={{ transform: props.xy.interpolate(trans1) }}
            >
              <img className="rotating-30" src={circle1} alt="circle" />
            </animated.div>
            <animated.div
              className="circle"
              style={{ transform: props.xy.interpolate(trans0) }}
            >
              <img className="rotating-50" src={circle2} alt="circle" />
            </animated.div>
            <animated.div
              className="circle2"
              style={{ transform: props.xy.interpolate(trans2) }}
            >
              <img className="rotating-70" src={circle3} alt="circle" />
            </animated.div>
            <animated.div
              className="circle2"
              style={{ transform: props.xy.interpolate(trans2) }}
            >
              <img className="rotating-40" src={circle4} alt="circle" />
            </animated.div>
            <animated.div
              className="circle3"
              style={{ transform: props.xy.interpolate(trans3) }}
            >
              <img className="rotating-70" src={circle5} alt="circle" />
            </animated.div>
            <animated.div
              className="circle3"
              style={{ transform: props.xy.interpolate(trans3) }}
            >
              <img className="rotating-30" src={circle6} alt="circle" />
            </animated.div>
            <animated.div
              className="circle4"
              style={{ transform: props.xy.interpolate(trans3) }}
            >
              <img className="rotating-50" src={circle7} alt="circle" />
            </animated.div>
            <animated.div
              className="circle4"
              style={{ transform: props.xy.interpolate(trans3) }}
            >
              <img className="rotating-40" src={circle8} alt="circle" />
            </animated.div>
            <animated.div
              className="circle5"
              style={{ transform: props.xy.interpolate(trans4) }}
            >
              <img className="rotating-100" src={circle9} alt="circle" />
            </animated.div>
            <animated.div
              className="circle5"
              style={{ transform: props.xy.interpolate(trans4) }}
            >
              <img className="rotating-70" src={circle10} alt="circle" />
            </animated.div>

            <ul className="planet-ul">
              <animated.li
                className="planet planet1"
                onMouseEnter={() => isPulsing1 && setIsPopUp1(true)}
                onMouseLeave={() => {
                  if (isPulsing1) {
                    setIsPopUp1(false);
                    setIsPulsing1(false);
                    setIsPulsing4(true);
                  }
                }}
                style={{ transform: props.xy.interpolate(trans4) }}
              >
                {isPulsing1 && <div className="ring pulsate"></div>}
              </animated.li>
              <animated.li
                className={`planet planet2`}
                onMouseEnter={() => isPulsing2 && setIsPopUp2(true)}
                onMouseLeave={() => {
                  if (isPulsing2) {
                    setIsPopUp2(false);
                    setIsPulsing2(false);
                    setIsPulsing1(true);
                  }
                }}
                style={{ transform: props.xy.interpolate(trans1) }}
              >
                {isPulsing2 && <div className="ring2 pulsate"></div>}
              </animated.li>
              <animated.li
                className={`planet planet3`}
                onMouseEnter={() => isPulsing3 && setIsPopUp3(true)}
                onMouseLeave={() => {
                  if (isPulsing3) {
                    setIsPopUp3(false);
                    setIsPulsing3(false);
                    setIsPulsing2(true);
                  }
                }}
                style={{ transform: props.xy.interpolate(trans2) }}
              >
                {isPulsing3 && <div className="ring3 pulsate"></div>}
              </animated.li>
              <animated.li
                className={`planet planet4`}
                onMouseEnter={() => isPulsing4 && setIsPopUp4(true)}
                onMouseLeave={() => {
                  if (isPulsing4) {
                    setIsPopUp4(false);
                    setIsPulsing4(false);
                    setIsPulsing3(true);
                  }
                }}
                style={{ transform: props.xy.interpolate(trans3) }}
              >
                {isPulsing4 && <div className="ring4 pulsate"></div>}
              </animated.li>
            </ul>
            <div
              className="pop-up"
              style={{
                opacity: `${!isPopUp3 ? '0' : '1'}`,
              }}
            >
              <div
                className="pop-up-opacity"
                style={{ opacity: `${isPulsing3 ? '1' : '0'}` }}
              >
                <h3 className="pop-up_h3">Lorem.</h3>
                <p className="pop-up_p">
                  Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                  commodo culpa culpa. In adipisicing nostrud ex cillum velit
                  reprehenderit ea labore. Irure reprehenderit elit culpa
                  voluptate.
                </p>
              </div>
            </div>
            <div
              className="pop-up_sub"
              style={{ opacity: `${!isPopUp4 ? '0' : '1'}` }}
            >
              <div
                className="pop-up-opacity"
                style={{ opacity: `${isPulsing4 ? '1' : '0'}` }}
              >
                <h3 className="pop-up_h3_sub">Lorem.</h3>
                <p className="pop-up_p_sub">
                  Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                  commodo culpa culpa. In adipisicing nostrud.
                </p>
              </div>
            </div>
            <div
              className="pop-up2"
              style={{ opacity: `${!isPopUp1 ? '0' : '1'}` }}
            >
              <div
                className="pop-up-opacity"
                style={{ opacity: `${isPulsing1 ? '1' : '0'}` }}
              >
                <h3 className="pop-up_h3">Lorem.</h3>
                <p className="pop-up_p2">
                  Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                  commodo culpa culpa. In adipisicing nostrud ex cillum velit
                  reprehenderit ea labore. Irure reprehenderit elit culpa
                  voluptate.
                </p>
              </div>
            </div>
            <div
              className="pop-up_sub2"
              style={{ opacity: `${!isPopUp2 ? '0' : '1'}` }}
            >
              <div
                className="pop-up-opacity"
                style={{ opacity: `${isPulsing2 ? '1' : '0'}` }}
              >
                <h3 className="pop-up_h3_sub2">Lorem.</h3>
                <p className="pop-up_p_sub2">
                  Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                  commodo culpa culpa. In adipisicing nostrud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
