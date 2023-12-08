import { MantineColorsTuple, createTheme } from "@mantine/core";

const darkRed: MantineColorsTuple = [
  "#ffefef",
  "#f1dddd",
  "#dfb9b9",
  "#ce9392",
  "#c17272",
  "#b85e5d",
  "#b55251",
  "#9f4343",
  "#8f3a3a",
  "#7e2f30",
];

const lightRed: MantineColorsTuple = [
  "#ffebeb",
  "#fbd8d8",
  "#edb0b0",
  "#df8485",
  "#d56060",
  "#ce4949",
  "#cc3c3c",
  "#b52e2f",
  "#a22628",
  "#8f1c21",
];

const theme = createTheme({
  colors: {
    "dark-red": darkRed,
    "light-red": lightRed,
  },
});

export default theme;
