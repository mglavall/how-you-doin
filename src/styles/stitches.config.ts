import { slate, slateDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, css, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
      primary: "AgrandirGrand",
      secondary: "AkzidenzGrotesk",
    },
    colors: {
      ...slate,
      primary: "#000",
      secondary: "#0b0b0b",
      tertiary: "#903749",
      alternative: "#53354a",
      backgroundColor: "#eaf0cb",
      grey100: "$primary",
      mood1: "#3D348B",
      mood2: "#5A56BC",
      mood3: "#7678ED",
      mood4: "#B7B8F6",
      mood5: "#fce6bb",
      mood6: "#F7B801",
      mood7: "#F18701",
      mood8: "#F27103",
      mood9: "#F75800",
      mood10: "#f22e05",
      moodNone: "$slate3",
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
    radii: {
      1: "2px",
      2: "4px",
      3: "6px"
    }
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



