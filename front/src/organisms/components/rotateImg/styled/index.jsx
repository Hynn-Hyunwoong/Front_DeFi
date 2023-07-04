import styled from 'styled-components';

export const ImgStyled = styled.img`
  height: 200px;
  width: auto;

  &:hover {
    transform: scale(1.5);
  }

  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const RotateImgBody = styled.div`
  text-align: center;
  margin: 3rem auto;
  height: 340px;

  & > .container {
    position: relative;
    width: 320px;
    margin: 0 auto;
    perspective: 1300px;
  }

  & > .container > .carousel {
    position: absolute;
    width: 80%;
    height: 100%;
    transform-style: preserve-3d;
    animation: rotate360 60s infinite forwards linear;
  }

  & > .container > .carousel > .logoImage {
    position: absolute;
    width: 300px;
    height: auto;
    top: 20px;
    left: 10px;
    right: 10px;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;

    &:nth-child(1) {
      transform: rotateY(0deg) translateZ(350px);
    }
    &:nth-child(2) {
      transform: rotateY(40deg) translateZ(320px);
    }
    &:nth-child(3) {
      transform: rotateY(80deg) translateZ(350px);
    }
    &:nth-child(4) {
      transform: rotateY(120deg) translateZ(320px);
    }
    &:nth-child(5) {
      transform: rotateY(160deg) translateZ(350px);
    }
    &:nth-child(6) {
      transform: rotateY(200deg) translateZ(320px);
    }
    &:nth-child(7) {
      transform: rotateY(240deg) translateZ(350px);
    }
    &:nth-child(8) {
      transform: rotateY(280deg) translateZ(320px);
    }
    &:nth-child(9) {
      transform: rotateY(320deg) translateZ(350px);
    }
  }

  @media (max-width: 768px) {
    height: 200px;

    & > .container {
      width: 80%;
    }

    & > .container > .carousel > .logoImage {
      width: 50%;
      top: 0px;
    }
  }

  @keyframes rotate360 {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(-360deg);
    }
  }
`;
