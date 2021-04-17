// react
import React, { useState, useEffect } from "react";
// utils
import { calcBreakpoints } from "../utils";
// types
import { ViewportContextType, ViewportBreakpoints } from "../types";

type Props = {
  children: React.ReactNode;
};

export const ViewportContext = React.createContext<ViewportContextType>({
  width: window.innerWidth,
  height: window.innerHeight,
  ...calcBreakpoints(window.innerWidth),
});

const ViewportWatcher: React.FC<Props> = ({ children }: Props) => {
  // state
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState<number>(
    window.innerHeight
  );
  const [
    viewportBreakpoints,
    setViewportBreakpoints,
  ] = useState<ViewportBreakpoints>(calcBreakpoints(window.innerWidth));

  // handlers
  const handleViewportResize = (width: number, height: number) => {
    setViewportWidth(width);
    setViewportBreakpoints(calcBreakpoints(width));
    setViewportHeight(height);
  };

  // lifecycle, componenDidMount
  useEffect(() => {
    // add listener when component mounts
    window.addEventListener("resize", () => {
      handleViewportResize(window.innerWidth, window.innerHeight);
    });
    // remove listener if component is unmounted
    return () => {
      window.removeEventListener("resize", () => {
        handleViewportResize(window.innerWidth, window.innerHeight);
      });
    };
  }, []);

  return (
    <ViewportContext.Provider
      value={{
        width: viewportWidth,
        height: viewportHeight,
        ...viewportBreakpoints,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportWatcher;
