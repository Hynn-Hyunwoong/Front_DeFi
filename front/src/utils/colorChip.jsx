const colorChip = {
  yellow: {
    background: "#FFC107",
    color: "#FFFFFF",
  },
  blue: {
    background: "#0194FF",
    hover: "#D2EDFF",
    color: "#FFFFFF",
  },
  green: {
    background: "#94CA0D",
    hover: "#D4F57E",
    color: "#FFFFFF",
  },
  grey: {
    background: "#CACCD2",
    color: "#000000",
  },
  white: {
    background: "#ffe7e7",
    color: "#0194FF",
  },
};

const size = {
  mobile: "768px",
  desktop: "1000px",
};

export const theme = {
  ...colorChip,
  mobile: `(max-width:${size.mobile})`,
  destop: `(max-width:${size.desktop})`,
};
