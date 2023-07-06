import React, { useState, useEffect } from 'react';
import { AppRouter } from './routes';
import { Opening } from './organisms/components';
import './App.css';

const CenterImage = ({ imageUrl }) => (
  <img
    src={imageUrl}
    alt="center"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  />
);

const App = () => {
  const [isOpeningDone, setIsOpeningDone] = useState(false);
  const [isImageShown, setIsImageShown] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('isOpeningDone')) {
      setIsOpeningDone(true);
      setIsImageShown(true);
    } else {
      const openingTimer = setTimeout(() => {
        setIsOpeningDone(true);
        sessionStorage.setItem('isOpeningDone', true);
      }, 5500);

      const imageTimer = setTimeout(() => {
        setIsImageShown(true);
      }, 4000);

      return () => {
        clearTimeout(openingTimer);
        clearTimeout(imageTimer);
      };
    }
  }, []);

  return (
    <>
      {isOpeningDone ? null : <Opening />}
      {isImageShown && !isOpeningDone ? (
        <CenterImage imageUrl="./images/logo-solar.png" />
      ) : null}
      <div className={`appContent ${isOpeningDone ? 'visible' : 'hidden'}`}>
        <AppRouter />
      </div>
    </>
  );
};

export default App;
