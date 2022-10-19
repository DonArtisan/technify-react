import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      paypal: "#FFB800",
      bgBeige: {
        default: "#F5F7FF",
        _dark: "#F5F7FF",
      },
      bgPrimary: {
        default: "#0156FF",
        _dark: "#0156FF",
      },
      bgSecondary: {
        default: "#020203",
      },
    },
  },
});
