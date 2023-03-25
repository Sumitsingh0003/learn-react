import { React, useState } from "react";

const FormHandle = () => {
  const [inptData, setInptData] = useState();
  const [intData, setIntData] = useState();

  const chngData = (e) => {
    setInptData(e.target.value);
  };

  const sbmtData = (e) => {
    e.preventDefault();
    setIntData(inptData);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
        <p>{inptData}</p>
          <input
            placeholder="Enter Name"
            value={inptData}
            type="text"
            onChange={chngData}
            autoComplete='off'
          />
          
          <button onClick={sbmtData}>Data Sumit</button>
          <h1>{intData}</h1>
        </div>
      </div>
    </>
  );
};

export default FormHandle;
