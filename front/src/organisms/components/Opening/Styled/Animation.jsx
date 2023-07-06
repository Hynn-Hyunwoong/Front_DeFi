import { keyframes } from 'styled-components';

export const brushMoving = keyframes`
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0%);
    }
`;

export const fadingout = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const lumieresMovingRight = keyframes`
    0% {
        transform: translate(-120px) scaleX(3);
      }
      40% {
        transform: translate(-60px);
      }
      60% {
        transform: translate(-30px) scaleX(1);
      }
      80% {
        transform: translate(-10px);
      }
    
      100% {
        transform: translate(0);
      }
`;

export const lumieresMovingLeft = keyframes`
    0% {
        transform: translate(0);
    }
    40% {
    transform: translate(60px);
  }
  50% {
    transform: translate(10px) scaleX(1);
  }
  100% {
    transform: translate(120px) scaleX(3);
  }
`;

export const zoomIn = keyframes`
 0% {
    transform: scale(10);
  }
  100% {
    transform: scale(0.5);
  }
`;

export const showingLumieres = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;
export const faindgLumieresBox = keyframes`
0% {
      background-color: rgba(228, 9, 19, 0);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.5);
    }
`;
