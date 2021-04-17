// react
import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
import {
  viewportHeightChangeEvent,
  viewportWidthChangeEvent,
} from "../store/ViewportSlice";

type OwnProps = {
  children: React.ReactNode;
};

type DispatchFromProps = {
  viewportHeightChangeEvent: (height: number) => void;
  viewportWidthChangeEvent: (width: number) => void;
};

type Props = OwnProps & DispatchFromProps;

const ViewportWatcher: React.FC<Props> = ({
  children,
  viewportHeightChangeEvent,
  viewportWidthChangeEvent,
}: Props) => {
  // handlers
  const handleViewportResize = (width: number, height: number) => {
    viewportWidthChangeEvent(width);
    viewportHeightChangeEvent(height);
  };

  // lifecycle, componentDidMount
  useEffect(() => {
    // add listener when component mounts
    window.addEventListener("resize", () => {
      handleViewportResize(window.innerWidth, window.innerHeight);
    });
    // remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", () => {
        handleViewportResize(window.innerWidth, window.innerHeight);
      });
    };
  }, []);

  return <div>{children}</div>;
};

const mapDispatchToProps: DispatchFromProps = {
  viewportHeightChangeEvent,
  viewportWidthChangeEvent,
};

export default connect(null, mapDispatchToProps)(ViewportWatcher);
