import React, { createContext } from "react";
import ContextUnder from "./ContextUnder";

const contextFName = createContext();
const contextLName = createContext();

const ContextMain = () => {
  return (
    <>
      <contextFName.Provider value={"Sattu"}>
        <contextLName.Provider value={"Supari"}>
          <ContextUnder />
        </contextLName.Provider>
      </contextFName.Provider>
    </>
  );
};

export default ContextMain;
export { contextFName, contextLName };
