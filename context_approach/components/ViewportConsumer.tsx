// react
import React, { useContext } from "react";

// context
import { ViewportContext } from "./ViewportWatcher";

const ViewportConsumer: React.FC = () => {
  const {
    width,
    height,
    extraSmall,
    small,
    medium,
    large,
    extraLarge,
  } = useContext(ViewportContext);

  return (
    <div>
      <div>{width}</div>
      <div>{height}</div>
      <div>{`extraLarge ${extraLarge}`}</div>
      <div>{`large ${large}`}</div>
      <div>{`medium ${medium}`}</div>
      <div>{`small ${small}`}</div>
      <div>{`extraSmall ${extraSmall}`}</div>
    </div>
  );
};

export default ViewportConsumer;
