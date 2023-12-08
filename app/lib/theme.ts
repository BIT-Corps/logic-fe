import { createTheme } from "@mantine/core";
import { darkRed, lightRed } from "./colors";

const theme = createTheme({
  colors: {
    "dark-red": darkRed,
    "light-red": lightRed,
  },
});

export default theme;
