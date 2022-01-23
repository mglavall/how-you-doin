import { createCss } from "@stitches/react";

export const { styled, css } = createCss({
  theme: {
    fonts: {
      system: "system-ui",
      primary: "AgrandirGrand",
      secondary: "AkzidenzGrotesk",
    },
    colors: {
      primary: "#000",
      secondary: "#0b0b0b",
      tertiary: "#903749",
      alternative: "#53354a",
      backgroundColor: "#0b0b0b",
    },
    fontSizes: {
      1: "14px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "56px",
      7: "70px",
    },
    space: {
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "56px",
      7: "70px",
    },
  },
  utils: {
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    size: (config) => (value) => ({
      width: value,
      height: value,
    }),
    linearGradient: (config) => (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    br: (config) => (value) => ({
      borderRadius: value,
    }),
  },
});
