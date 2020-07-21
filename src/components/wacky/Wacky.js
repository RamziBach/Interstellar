import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

import circle1 from '../../img/circle-1.svg';
import circle2 from '../../img/circle-2.svg';
import circle3 from '../../img/circle-3.svg';
import circle4 from '../../img/circle-4.svg';
import circle5 from '../../img/circle-5.svg';
import circle6 from '../../img/circle-6.svg';
import circle7 from '../../img/circle-7.svg';
import circle8 from '../../img/circle-8.svg';
import circle9 from '../../img/circle-9.svg';
import circle10 from '../../img/circle-10.svg';
import close from '../../img/close.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans0 = (x, y) => `translate3d(${x / 90}px, ${y / 90}px, 0)`;
const trans1 = (x, y) => `translate3d(${x / 40}px, ${y / 40}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 20}px,${y / 20}px, 0)`;
const trans3 = (x, y) => `translate3d(${x / 15}px,${y / 15}px, 0)`;
const trans4 = (x, y) => `translate3d(${x / 10}px,${y / 10}px, 0)`;

const Wacky = () => {
  const [isPulsing1, setIsPulsing1] = useState(true);
  const [isPulsing2, setIsPulsing2] = useState(null);
  const [isPulsing3, setIsPulsing3] = useState(null);
  const [isPulsing4, setIsPulsing4] = useState(null);
  const [isPopUp1, setIsPopUp1] = useState(false);
  const [isPopUp2, setIsPopUp2] = useState(false);
  const [isPopUp3, setIsPopUp3] = useState(false);
  const [isPopUp4, setIsPopUp4] = useState(false);

  const planet1Ref = useRef(null);
  const planet2Ref = useRef(null);
  const planet3Ref = useRef(null);
  const planet4Ref = useRef(null);

  const popUpRef = useRef(null);
  const popUpSubRef = useRef(null);
  const popUp2Ref = useRef(null);
  const popUpSubRef2 = useRef(null);

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 20, tension: 550, friction: 140 },
  }));

  useEffect(() => {
    let mountTimer1 = setTimeout(() => {
      setIsPopUp1(true);
      setIsPulsing1(false);
      setIsPulsing4(true);
    }, 2000);
    let mountTimer2 = setTimeout(() => {
      setIsPopUp4(true);
      setIsPulsing4(false);
      setIsPulsing3(true);
    }, 10000);
    let mountTimer3 = setTimeout(() => {
      setIsPopUp3(true);
      setIsPulsing3(false);
      setIsPulsing2(true);
    }, 18000);
    let mountTimer4 = setTimeout(() => {
      setIsPopUp2(true);
      setIsPulsing2(false);
    }, 26000);
    planet1Ref.current.addEventListener('mouseenter', () => {
      window.clearTimeout(mountTimer1);
      window.clearTimeout(mountTimer2);
      window.clearTimeout(mountTimer3);
      window.clearTimeout(mountTimer4);
    });
    planet2Ref.current.addEventListener('mouseenter', () => {
      window.clearTimeout(mountTimer1);
      window.clearTimeout(mountTimer2);
      window.clearTimeout(mountTimer3);
      window.clearTimeout(mountTimer4);
    });
    planet3Ref.current.addEventListener('mouseenter', () => {
      window.clearTimeout(mountTimer1);
      window.clearTimeout(mountTimer2);
      window.clearTimeout(mountTimer3);
      window.clearTimeout(mountTimer4);
    });
    planet4Ref.current.addEventListener('mouseenter', () => {
      window.clearTimeout(mountTimer1);
      window.clearTimeout(mountTimer2);
      window.clearTimeout(mountTimer3);
      window.clearTimeout(mountTimer4);
    });
  }, []);

  useEffect(() => {
    const isNotPulsing =
      !isPulsing1 && !isPulsing2 && !isPulsing3 && !isPulsing4;
    const isNotPopUp = !isPopUp1 && !isPopUp2 && !isPopUp3 && !isPopUp4;
    if (isNotPulsing && isNotPopUp) setIsPulsing1(true);
    if (isPopUp1) {
      let timer1 = setTimeout(() => {
        setIsPopUp1(false);
      }, 10000);
      planet1Ref.current.addEventListener('mousemove', () => {
        window.clearTimeout(timer1);
        timer1 = setTimeout(() => {
          setIsPopUp1(false);
        }, 10000);
      });
      popUp2Ref.current.addEventListener('mousemove', () => {
        window.clearTimeout(timer1);
        timer1 = setTimeout(() => {
          setIsPopUp1(false);
        }, 10000);
      });
    }
    if (isPopUp2) {
      let timer2 = setTimeout(() => {
        setIsPopUp2(false);
      }, 10000);
      planet2Ref.current.addEventListener('mousemove', () => {
        window.clearTimeout(timer2);
        timer2 = setTimeout(() => {
          setIsPopUp2(false);
        }, 10000);
      });
      popUpSubRef2.current.addEventListener('mousemove', () => {
        window.clearTimeout(timer2);
        timer2 = setTimeout(() => {
          setIsPopUp2(false);
        }, 10000);
      });
    }
    if (isPopUp3) {
      let timer3 = setTimeout(() => {
        setIsPopUp3(false);
      }, 10000);
      planet3Ref.current.addEventListener('mousemove', () => {
        window.clearTimeout(timer3);
        timer3 = setTimeout(() => {
          setIsPopUp3(false);
        }, 10000);
      });
      popUpRef.current.addEventListener('mousemove', () => {
        window.clearTimeout(timer3);
        timer3 = setTimeout(() => {
          setIsPopUp3(false);
        }, 10000);
      });
    }
    if (isPopUp4) {
      let timer4 = setTimeout(() => {
        setIsPopUp4(false);
      }, 10000);
      planet4Ref.current.addEventListener('mousemove', () => {
        window.clearTimeout(timer4);
        timer4 = setTimeout(() => {
          setIsPopUp4(false);
        }, 10000);
      });
      popUpSubRef.current.addEventListener('mousemove', () => {
        window.clearTimeout(timer4);
        timer4 = setTimeout(() => {
          setIsPopUp4(false);
        }, 10000);
      });
    }
    return () => {
      planet1Ref.current.removeEventListener('mousemove', () => {});
      planet2Ref.current.removeEventListener('mousemove', () => {});
      planet3Ref.current.removeEventListener('mousemove', () => {});
      planet4Ref.current.removeEventListener('mousemove', () => {});
      popUpRef.current.removeEventListener('mousemove', () => {});
      popUp2Ref.current.removeEventListener('mousemove', () => {});
      popUpSubRef.current.removeEventListener('mousemove', () => {});
      popUpSubRef2.current.removeEventListener('mousemove', () => {});
    };
  }, [
    isPulsing1,
    isPulsing2,
    isPulsing3,
    isPulsing4,
    isPopUp1,
    isPopUp2,
    isPopUp3,
    isPopUp4,
  ]);

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
              className="line-container pop-up-opacity"
              style={{
                opacity: `${isPopUp1 ? '1' : '0'}`,
                transform: props.xy.interpolate(trans4),
              }}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </animated.div>

            <animated.div
              className="line-container2 pop-up-opacity"
              style={{
                opacity: `${isPopUp2 ? '1' : '0'}`,
                transform: props.xy.interpolate(trans1),
              }}
            >
              <div className="line2-1"></div>
              <div className="line2-2"></div>
              <div className="line2-3"></div>
            </animated.div>

            <animated.div
              className="line-container3 pop-up-opacity"
              style={{
                opacity: `${isPopUp3 ? '1' : '0'}`,
                transform: props.xy.interpolate(trans2),
              }}
            >
              <div className="line3-1"></div>
              <div className="line3-2"></div>
              <div className="line3-3"></div>
            </animated.div>

            <animated.div
              className="line-container4 pop-up-opacity"
              style={{
                opacity: `${isPopUp4 ? '1' : '0'}`,
                transform: props.xy.interpolate(trans3),
              }}
            >
              <div className="line4-1"></div>
              <div className="line4-2"></div>
              <div className="line4-3"></div>
            </animated.div>

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
                ref={planet1Ref}
                className="planet planet1"
                onMouseEnter={() => {
                  if (isPulsing1) {
                    setIsPopUp1(true);
                    setIsPulsing1(false);
                    setIsPulsing4(true);
                  }
                }}
                // onMouseLeave={() => {
                //   if (isPulsing1) {
                //     // setIsPopUp1(false);
                //     setIsPulsing1(false);
                //     setIsPulsing4(true);
                //   }
                // }}
                style={{ transform: props.xy.interpolate(trans4) }}
              >
                {isPulsing1 && <div className="ring pulsate"></div>}
              </animated.li>
              <animated.li
                ref={planet2Ref}
                className={`planet planet2`}
                onMouseEnter={() => {
                  if (isPulsing2) {
                    setIsPopUp2(true);
                    setIsPulsing2(false);
                  }
                }}
                // onMouseLeave={() => {
                //   if (isPulsing2) {
                //     // setIsPopUp2(false);
                //     setIsPulsing2(false);
                //     // setIsPulsing1(true);
                //   }
                // }}
                style={{ transform: props.xy.interpolate(trans1) }}
              >
                {isPulsing2 && <div className="ring2 pulsate"></div>}
              </animated.li>
              <animated.li
                ref={planet3Ref}
                className={`planet planet3`}
                onMouseEnter={() => {
                  if (isPulsing3) {
                    setIsPopUp3(true);
                    setIsPulsing3(false);
                    setIsPulsing2(true);
                  }
                }}
                // onMouseLeave={() => {
                //   if (isPulsing3) {
                //     // setIsPopUp3(false);
                //     setIsPulsing3(false);
                //     setIsPulsing2(true);
                //   }
                // }}
                style={{ transform: props.xy.interpolate(trans2) }}
              >
                {isPulsing3 && <div className="ring3 pulsate"></div>}
              </animated.li>
              <animated.li
                ref={planet4Ref}
                className={`planet planet4`}
                onMouseEnter={() => {
                  if (isPulsing4) {
                    setIsPopUp4(true);
                    setIsPulsing4(false);
                    setIsPulsing3(true);
                  }
                }}
                // onMouseLeave={() => {
                //   if (isPulsing4) {
                //     // setIsPopUp4(false);
                //     setIsPulsing4(false);
                //     setIsPulsing3(true);
                //   }
                // }}
                style={{ transform: props.xy.interpolate(trans3) }}
              >
                {isPulsing4 && <div className="ring4 pulsate"></div>}
              </animated.li>
            </ul>

            <animated.div
              ref={popUpRef}
              className="pop-up"
              style={{
                opacity: `${!isPopUp3 ? '0' : '1'}`,
                transform: props.xy.interpolate(trans2),
              }}
            >
              <div
                className="pop-up-opacity"
                // style={{ opacity: `${isPulsing3 ? '1' : '0'}` }}
              >
                <div className="pop-up_header-container">
                  <h3 className="pop-up_h3">Lorem.</h3>
                  <button
                    onClick={() => {
                      setIsPopUp3(false);
                    }}
                  >
                    <img className="close" src={close} alt="close" />
                  </button>
                </div>
                <p className="pop-up_p">
                  Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                  commodo culpa culpa. In adipisicing nostrud ex cillum velit
                  reprehenderit ea labore. Irure reprehenderit elit culpa
                  voluptate.
                </p>
              </div>
            </animated.div>
            <animated.div
              ref={popUpSubRef}
              className="pop-up_sub"
              style={{
                opacity: `${!isPopUp4 ? '0' : '1'}`,
                transform: props.xy.interpolate(trans3),
              }}
            >
              <div
                className="pop-up-opacity"
                style={
                  {
                    // opacity: `${isPulsing4 ? '1' : '0'}`,
                  }
                }
              >
                <div className="pop-up_header-container">
                  <h3 className="pop-up_h3_sub">Lorem.</h3>
                  <button
                    onClick={() => {
                      setIsPopUp4(false);
                    }}
                  >
                    <img className="close" src={close} alt="close" />
                  </button>
                </div>
                <p className="pop-up_p_sub">
                  Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                  commodo culpa culpa. In adipisicing nostrud.
                </p>
              </div>
            </animated.div>
            <animated.div
              ref={popUp2Ref}
              className="pop-up2"
              style={{
                opacity: `${!isPopUp1 ? '0' : '1'}`,
                transform: props.xy.interpolate(trans4),
              }}
            >
              <div
                className="pop-up-opacity"
                // style={{ opacity: `${isPulsing1 ? '1' : '0'}` }}
              >
                <div className="pop-up_header-container">
                  <h3 className="pop-up_h3">Lorem.</h3>
                  <button
                    onClick={() => {
                      setIsPopUp1(false);
                    }}
                  >
                    <img className="close" src={close} alt="close" />
                  </button>
                </div>
                <p className="pop-up_p2">
                  Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                  commodo culpa culpa. In adipisicing nostrud ex cillum velit
                  reprehenderit ea labore. Irure reprehenderit elit culpa
                  voluptate.
                </p>
              </div>
            </animated.div>
            <animated.div
              ref={popUpSubRef2}
              className="pop-up_sub2"
              style={{
                opacity: `${!isPopUp2 ? '0' : '1'}`,
                transform: props.xy.interpolate(trans1),
              }}
            >
              <div
                className="pop-up-opacity"
                // style={{ opacity: `${isPulsing2 ? '1' : '0'}` }}
              >
                <div className="pop-up_header-container">
                  <h3 className="pop-up_h3_sub">Lorem.</h3>
                  <button
                    onClick={() => {
                      setIsPopUp2(false);
                    }}
                  >
                    <img className="close" src={close} alt="close" />
                  </button>
                </div>
                <p className="pop-up_p_sub2">
                  Laboris veniam velit Lorem nisi est Lorem eu labore culpa est
                  commodo culpa culpa. In adipisicing nostrud.
                </p>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wacky;
