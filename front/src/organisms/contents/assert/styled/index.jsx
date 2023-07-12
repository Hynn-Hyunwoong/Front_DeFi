import styled from 'styled-components';

const res = {
  mobile: '@media(max-width: 768px)',
};

export const ContentWrap = styled.div`
  width: 80rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  margin: 20px auto;

  ${res.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 100%;
  }
`;

export const MyPageWrapper = styled.div`
  width: 80rem;
  margin: 20px auto;

  ${res.mobile} {
    width: 100%;
    margin: 20px auto;
  }
`;

export const TextBold = styled.strong`
  color: ${(props) => props.color};
`;

export const Card = styled.div`
  padding: 2.5rem 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  max-width: 500px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
  margin: 1rem;
  position: relative;
  transform-style: preserve-3d;
  overflow: hidden;
`;

export const Img = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  img {
    max-width: 64px;
    margin-left: 2rem;
    border-radius: 50%;
    width: 4rem;
    min-width: 1rem;
    max-height: 64px;
  }
  div {
    font-size: 0.8rem;
  }
`;

export const Logo = styled.div``;

export const Infos = styled.div`
  margin-left: 1rem;
  h2 {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 0.8rem;
    color: #333;
  }
`;

export const Text = styled.p`
  font-size: 0.9rem;
  margin: 1rem;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 1rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  button {
    border: none;
  }
`;

export const GraphWrap = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  gap: 10px;
  position: absolute;
  width: 70%;
  height: 200px;
  right: -10%;
  top: 20px;
  bottom: 5px;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px; // Switch 길이 조절
  height: 25px; // Switch 높이 조절
  margin-left: 60%; // Adjust to move to the right

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
  }

  .slider:after {
    position: absolute;
    content: 'USD';
    color: blue;
    display: flex;
    right: 7px;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    transition: 1s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider:after {
    content: 'KRW';
    color: white;
    display: flex;
    right: 26px;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(36px); // adjusted to match new switch length
  }

  .slider.round {
    border-radius: 25px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .slider.round:after {
    border-radius: 50%;
  }
`;
