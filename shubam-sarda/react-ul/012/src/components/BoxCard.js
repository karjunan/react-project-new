import { useState } from "react";

export const BoxCard = ({ result, children }) => {
  let [show, setShow] = useState(true);

  return (
    <div className={show ? "" : "hidden"}>
      <div className={`box ${result}`}>{children}</div>
      <button onClick={() => setShow(!show)} className="trigger">
        hide
      </button>
    </div>
  );
};
