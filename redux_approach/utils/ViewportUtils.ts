import { ViewportBreakpoints } from "../types";

export const calcBreakpoints = (width: number): ViewportBreakpoints => {
  let currentBreakpoint: ViewportBreakpoints = {
    small: false,
    extraSmall: false,
    medium: false,
    large: false,
    extraLarge: false,
  };

  // set breakpoint values here
  // these values are the MUI standard
  const extraSmall: number = 600;
  const small: number = 960;
  const medium: number = 1280;
  const large: number = 1920;

  if (width >= 0 && width <= extraSmall) currentBreakpoint.extraSmall = true;
  else if (width > extraSmall && width <= small) currentBreakpoint.small = true;
  else if (width > small && width <= medium) currentBreakpoint.medium = true;
  else if (width > medium && width <= large) currentBreakpoint.large = true;
  else if (width > large) currentBreakpoint.extraLarge = true;
  else currentBreakpoint.extraSmall = true;
  return currentBreakpoint;
};
