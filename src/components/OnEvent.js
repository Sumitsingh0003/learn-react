import { React, useState } from "react";

const OnEvent = () => {
  let val = "Click me";

  const [chngeData, setChngeData] = useState(val);

  const chgData = () => {
    setChngeData("Uhff");
  };
  const dblChngData = () => {
    setChngeData("Achaa... Thik hai Samjh gya");
  };

  return (
    <>
      <button
        onClick={chgData}
        onDoubleClick={dblChngData}
      >
        {chngeData}
      </button>
    </>
  );
};

export default OnEvent;
