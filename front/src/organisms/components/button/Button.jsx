import { ButtonStyled } from "./styled";

export const Button = ({ children, colors, width, height, size, onClick }) => {
  // const width = basic && "150px";
  // const height = basic && "40px";

  return (
    <ButtonStyled
      width={width}
      height={height}
      colors={colors}
      size={size}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};
