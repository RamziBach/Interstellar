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
// const trans0 = (x, y) => `translate3d(${x / 90}px, ${y / 90}px, 0)`;
// const trans1 = (x, y) => `translate3d(${x / 45}px, ${y / 45}px, 0)`;
// const trans2 = (x, y) => `translate3d(${x / 30}px,${y / 30}px, 0)`;
// // const trans3 = (x, y) => `translate3d(${x / 20}px,${y / 20}px, 0)`;
// const trans4 = (x, y) => `translate3d(${x / 15}px,${y / 15}px, 0)`;

const trans0 = (x, y) => `translate3d(${x / 90}px, ${y / 90}px, 0)`;
const trans1 = (x, y) => `translate3d(${x / 40}px, ${y / 40}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 20}px, 0)`;
const trans3 = (x, y) => `translate3d(${x / 15}px,${y / 15}px, 0)`;
const trans4 = (x, y) => `translate3d(${x / 10}px,${y / 10}px, 0)`;

const App = () => {
  const [pulse1, setPulse1] = useState(null);
  const [pulse2, setPulse2] = useState(null);
  const [pulse3, setPulse3] = useState(null);
  const [pulse4, setPulse4] = useState(null);
  const [isPopUp1, setIsPopUp1] = useState(false);
  const [isPopUp2, setIsPopUp2] = useState(false);
  const [isPopUp3, setIsPopUp3] = useState(false);
  const [isPopUp4, setIsPopUp4] = useState(false);

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 20, tension: 550, friction: 140 },
  }));

  // const getCoords = elem => {
  //   let box = elem.getBoundingClientRect();
  //   return {
  //     top: box.top + window.pageYOffset,
  //     right: box.right + window.pageXOffset,
  //     bottom: box.bottom + window.pageYOffset,
  //     left: box.left + window.pageXOffset,
  //   };
  // };

  const handleMouseEnterPlanet1 = () => {
    setPulse1('paused');
    setIsPopUp1(true);
    // const planet1 = document.querySelector('.planet1');
    // if (getCoords(planet1).right > 974) {
    //   console.log('Right');
    // } else {
    //   console.log('left');
    // }
  };

  const handleMouseEnterPlanet2 = () => {
    setPulse2('paused');
    setIsPopUp2(true);
    // const planet2 = document.querySelector('.planet2');
    // if (getCoords(planet2).right > 974) {
    //   console.log('Right');
    // } else {
    //   console.log('left');
    // }
  };

  const handleMouseEnterPlanet3 = () => {
    setPulse3('paused');
    setIsPopUp3(true);
    // const planet3 = document.querySelector('.planet3');
    // if (getCoords(planet3).right > 974) {
    //   console.log('right');
    // } else {
    //   console.log('left');
    // }
  };

  const handleMouseEnterPlanet4 = () => {
    setPulse4('paused');
    setIsPopUp4(true);
    // const planet4 = document.querySelector('.planet4');
    // if (getCoords(planet4).right > 974) {
    //   console.log('right');
    // } else {
    //   console.log('left');
    // }
  };

  // useEffect(() => {
  //   const planet1 = document.querySelector('.planet1');
  //   const planet2 = document.querySelector('.planet2');

  //   const getCoords = elem => {
  //     let box = elem.getBoundingClientRect();
  //     return {
  //       top: box.top + window.pageYOffset,
  //       right: box.right + window.pageXOffset,
  //       bottom: box.bottom + window.pageYOffset,
  //       left: box.left + window.pageXOffset,
  //     };
  //   };

  //   console.log(getCoords(planet1));
  //   console.log(getCoords(planet2));
  // }, []);

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
            {/* <img className="circle rotating-50" src={circle2} alt="circle" /> */}
            {/* <img className="circle2 rotating-70" src={circle3} alt="circle" /> */}
            {/* <img className="circle2 rotating-40" src={circle4} alt="circle" /> */}
            {/* <img className="circle3 rotating-70" src={circle5} alt="circle" /> */}
            {/* <img className="circle3 rotating-30" src={circle6} alt="circle" /> */}
            {/* <img className="circle4 rotating-50" src={circle7} alt="circle" /> */}
            {/* <img className="circle4 rotating-40" src={circle8} alt="circle" /> */}
            {/* <img className="circle5 rotating-100" src={circle9} alt="circle" /> */}
            {/* <img className="circle5 rotating-70" src={circle10} alt="circle" /> */}
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
            <animated.div
              className="circle5"
              style={{ transform: props.xy.interpolate(trans0) }}
            >
              <img className="rotating-70" src={circle10} alt="circle" />
            </animated.div>

            <ul className="planet-ul">
              <animated.li
                className={`planet planet1 ${pulse1}`}
                onMouseEnter={handleMouseEnterPlanet1}
                onMouseLeave={() => {
                  setPulse1(null);
                  setIsPopUp1(false);
                }}
                style={{ transform: props.xy.interpolate(trans4) }}
              >
                <div className="ring pulsate"></div>
              </animated.li>
              <animated.li
                className={`planet planet2 ${pulse2}`}
                onMouseEnter={handleMouseEnterPlanet2}
                onMouseLeave={() => {
                  setPulse2(null);
                  setIsPopUp2(false);
                }}
                style={{ transform: props.xy.interpolate(trans1) }}
              >
                <div className="ring2 pulsate"></div>
              </animated.li>
              <animated.li
                className={`planet planet3 ${pulse3}`}
                onMouseEnter={handleMouseEnterPlanet3}
                onMouseLeave={() => {
                  setPulse3(null);
                  setIsPopUp3(false);
                }}
                style={{ transform: props.xy.interpolate(trans2) }}
              >
                <div className="ring3 pulsate"></div>
              </animated.li>
              <animated.li
                className={`planet planet4 ${pulse4}`}
                onMouseEnter={handleMouseEnterPlanet4}
                onMouseLeave={() => {
                  setPulse4(null);
                  setIsPopUp4(false);
                }}
                style={{ transform: props.xy.interpolate(trans3) }}
              >
                <div className="ring4 pulsate"></div>
              </animated.li>
            </ul>
            <div
              className="pop-up"
              style={{ opacity: `${!isPopUp3 ? '0' : '1'}` }}
            >
              <h3 className="pop-up_h3">Lorem.</h3>
              <p className="pop-up_p">
                Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                commodo culpa culpa. In adipisicing nostrud ex cillum velit
                reprehenderit ea labore. Irure reprehenderit elit culpa
                voluptate.
              </p>
            </div>
            <div
              className="pop-up_sub"
              style={{ opacity: `${!isPopUp4 ? '0' : '1'}` }}
            >
              <h3 className="pop-up_h3_sub">Lorem.</h3>
              <p className="pop-up_p_sub">
                Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                commodo culpa culpa. In adipisicing nostrud.
              </p>
            </div>
            <div
              className="pop-up2"
              style={{ opacity: `${!isPopUp1 ? '0' : '1'}` }}
            >
              <h3 className="pop-up_h3">Lorem.</h3>
              <p className="pop-up_p2">
                Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                commodo culpa culpa. In adipisicing nostrud ex cillum velit
                reprehenderit ea labore. Irure reprehenderit elit culpa
                voluptate.
              </p>
            </div>
            <div
              className="pop-up_sub2"
              style={{ opacity: `${!isPopUp2 ? '0' : '1'}` }}
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
    </>
  );
};

export default App;
