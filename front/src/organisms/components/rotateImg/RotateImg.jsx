import { RotateImgBody, ImgStyled } from './styled';

export const RotateImg = () => {
  const coinImg = ['logo-arbitrum', 'logo-ethereum', 'logo-tether'];

  const renderItem = (item) => {
    return item.map((v) => (
      <div className="logoImage" key={v}>
        <ImgStyled src={`images/${v}.png`} alt={v} />
      </div>
    ));
  };

  return (
    <RotateImgBody>
      <div className="container">
        <div className="carousel">
          {renderItem(coinImg)}
          {renderItem(coinImg)}
          {renderItem(coinImg)}
        </div>
      </div>
    </RotateImgBody>
  );
};
