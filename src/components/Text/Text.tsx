import { styled } from "../../styles/stitches.config";

const Text = styled("span", {
  color: "$primary",
  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      7: {
        fontSize: "$7",
      },
    },
    fontWeight: {
      800: {
        fontWeight: 800,
      },
      400: {
        fontWeight: 400,
      },
    },
    fontFamily: {
      primary: { fontFamily: "$primary" },
      secondary: { fontFamily: "$secondary" },
    },
  },
});

Text.defaultProps = {
  fontFamily: "$primary",
};

export default Text;
