import styled from 'styled-components';
import {
  zoomIn,
  showingLumieres,
  lumieresMovingLeft,
  lumieresMovingRight,
  brushMoving,
} from './Animation';

export const Wrap = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 1080px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(171, 242, 0, 0.05);
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    display: block;
    background-color: #000000;
    width: 10%;
    height: 30%;
    left: -25%;
    bottom: -27%;
    border-radius: 50%;
    z-index: 5;
    transform-origin: left center;
    background-size: 4000px;
    background-position: -1950px 0;
  }
`;

export const Intro = styled.div`
  display: block;
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  animation-name: ${zoomIn};
  animation-delay: 0s;
  animation-duration: 3.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  background-size: 4000px;
  background-position: -1950px 0;
  transform-origin: 30% center;
`;

export const FurAWrap = styled.div`
  width: 19.5%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0);
  left: 22.4%;
  top: 0;
  transform: rotate(180deg);
  animation-name: ${showingLumieres};
  animation-duration: 2s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  position: absolute;
`;

export const FunAPaired = styled.div`
  animation-name: ${brushMoving};
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
  /** This code origin #container Intro[letter='S'] .helper-1 .effect-brush [class*='fur-'] */
  bottom: 0;
  height: 40%;
  position: absolute;
  width: 100%;
  height: 300%;
  top: 0;
  overflow: hidden;

  ::before {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 70%;
  }
`;

export const FurBWrap = styled.div`
  width: 19.5%;
  color: rgba(0, 0, 0, 0);
  height: 100%;
  left: 57.8%;
  top: 0;
  transform: rotate(180deg);
  overflow: hidden;
  position: absolute;
`;

export const FunBPaired = styled.div`
  animation-name: ${brushMoving};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  position: absolute;
  width: 100%;
  height: 300%;
  top: 0;
  overflow: hidden;
  ::before {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 70%;
  }
`;

export const FunCwrap = styled.div`
  width: 19%;
  height: 150%;
  left: 40.5%;
  top: -25%;
  transform: rotate(-19.5deg);
  color: rgba(0, 0, 0, 0);
  overflow: hidden;
  position: absolute;
`;

export const FunCPaired = styled.div`
  animation-name: ${brushMoving};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  position: absolute;
  width: 100%;
  height: 300%;
  top: 0;
  overflow: hidden;
  ::before {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 70%;
  }
`;

export const EffectLumieres = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation-name: ${showingLumieres};
  animation-duration: 2s;
  animation-delay: 1.6s;
  animation-fill-mode: forwards;
`;

export const Fun1 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun2 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun3 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun4 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun5 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun6 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun7 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun8 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun9 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun10 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun11 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun12 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun13 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun14 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun15 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun16 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun17 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun18 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun19 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun20 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun21 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun22 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun23 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun24 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun25 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun26 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun27 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun28 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun29 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun30 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;
export const Fun31 = styled.span`
  display: block;
  position: absolute;
  bottom: 10%;
  height: 30%;
`;

export const Lamp1 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #abf200;
  left: 0.7%;
  width: 1%;
  animation-delay: 0.08s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 68%;
    animation-delay: 0.02s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;

export const Lamp2 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ffde01;
  left: 2.2%;
  width: 1.4%;
  animation-delay: 0.52s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    left: 149%;
    animation-delay: 2s;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;

export const Lamp3 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #bbfa00;
  left: 5.8%;
  width: 2.1%;
  animation-delay: 0.96s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 172%;
    animation-delay: 1.07s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;

export const Lamp4 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #b3f600;
  left: 10.1%;
  width: 2%;
  animation-delay: 1.59s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 44%;
    animation-delay: 0.77s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;

export const Lamp5 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #c3ff00;
  left: 12.9%;
  width: 1.4%;
  animation-delay: 1.08s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 95%;
    animation-delay: 0.48s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;

export const Lamp6 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ff9600;
  left: 15.3%;
  width: 2.8%;
  animation-delay: 0.63s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 95%;
    animation-delay: 0.48s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;

export const Lamp7 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #0084ff;
  left: 21.2%;
  width: 2.5%;
  animation-delay: 1.04s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 195%;
    animation-delay: 0.68s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;

export const Lamp8 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #f84006;
  left: 25%;
  width: 2.5%;
  animation-delay: 1.93s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 109%;
    animation-delay: 0.57s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;

export const Lamp9 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ccff33;
  left: 30.5%;
  width: 3%;
  animation-delay: 0.7s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 71%;
    animation-delay: 0.15s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;

export const Lamp10 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ddff99;
  left: 36.3%;
  width: 3%;
  animation-delay: 1.75s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 170%;
    animation-delay: 0.4s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;

export const Lamp11 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #e5ffcc;
  left: 41%;
  width: 2.2%;
  animation-delay: 1.89s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;

    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
    left: 5%;
    animation-delay: 0.55s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;

export const Lamp12 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #01ffff;
  left: 44.2%;
  width: 2.6%;
  animation-delay: 1.94s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 157%;
    animation-delay: 0.29s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;
export const Lamp13 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ffc601;
  left: 51.7%;
  width: 0.5%;
  animation-delay: 1.12s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 81%;
    animation-delay: 0.89s;
  }
`;
export const Lamp14 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ffc601;
  left: 52.1%;
  width: 1.8%;
  animation-delay: 0.57s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 149%;
    animation-delay: 0.18s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;

export const Lamp15 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #0078fe;
  left: 53.8%;
  width: 2.3%;
  animation-delay: 0.88s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 185%;
    animation-delay: 1.08s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;

export const Lamp16 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #0080ff;
  left: 57.2%;
  width: 2%;
  animation-delay: 0.25s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 11%;
    animation-delay: 1.38s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;
export const Lamp17 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ffae01;
  left: 62.3%;
  width: 2.9%;
  animation-delay: 0.71s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 191%;
    animation-delay: 1.57s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;
export const Lamp18 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #eeffff;
  left: 65.8%;
  width: 1.7%;
  animation-delay: 1.99s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 57%;
    animation-delay: 1.88s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;
export const Lamp19 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #a601f4;
  left: 72.8%;
  width: 0.8%;
  animation-delay: 0.48s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 167%;
    animation-delay: 0.04s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;
export const Lamp20 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #f6ffff;
  left: 74.3%;
  width: 2%;
  animation-delay: 0.96s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 114%;
    animation-delay: 1.09s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;
export const Lamp21 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ff00bf;
  left: 79.8%;
  width: 2%;
  animation-delay: 0.22s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 189%;
    animation-delay: 1.71s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;
export const Lamp22 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #04fd8f;
  left: 78.2%;
  width: 2%;
  animation-delay: 1.09s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 177%;
    animation-delay: 0.08s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;
export const Lamp23 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #01ffff;
  left: 78.5%;
  width: 2%;
  animation-delay: 1.05s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 145%;
    animation-delay: 1.75s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;
export const Lamp24 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #a201ff;
  left: 85.3%;
  width: 1.1%;
  animation-delay: 1.95s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 31%;
    animation-delay: 1.3s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;
export const Lamp25 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ddff99;
  left: 86.9%;
  width: 1.1%;
  animation-delay: 1.52s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 102%;
    animation-delay: 1.74s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;
export const Lamp26 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #0078fe;
  left: 88.8%;
  width: 2%;
  animation-delay: 1.63s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 151%;
    animation-delay: 1.95s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;
export const Lamp27 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #ddff66;
  left: 92.4%;
  width: 2.4%;
  animation-delay: 0.93s;
  animation-name: ${lumieresMovingLeft};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 28%;
    animation-delay: 1.93s;
    animation-name: ${lumieresMovingLeft};
    animation-duration: 5s;
  }
`;
export const Lamp28 = styled.span`
  position: absolute;
  display: block;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);
  background: #06f98c;
  left: 96.2%;
  width: 2.1%;
  animation-delay: 1.28s;
  animation-name: ${lumieresMovingRight};
  animation-duration: 5s;
  animation-fill-mode: forwards;

  ::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(228, 9, 19, 0.75);

    left: 73%;
    animation-delay: 1.65s;
    animation-name: ${lumieresMovingRight};
    animation-duration: 5s;
  }
`;
