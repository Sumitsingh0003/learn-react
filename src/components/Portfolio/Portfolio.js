import React, { useState } from "react";
import PortData from "./PortData";

const Portfolio = () => {

  const [filtData, setFiltData] = useState(PortData);

  const handleBtn = (catElem) => {
    const oldData = PortData.filter((curDat) => {
      return curDat.cat === catElem;
    });

    setFiltData(oldData);
    if(catElem === "Show All"){
        setFiltData(PortData)
      }
  };

  const catData = ["Show All", ...new Set(PortData.map((catVal) => catVal.cat))]

  return (
    <>
      <div className="container pt-50 pb-50">
        <div className="butns">
          {catData.map((val, id) => {
            return (
              <button
                className="port_btn"
                key={id}
                onClick={() => handleBtn(val)}
              >
                {val}
              </button>
            );
          })}

        </div>
        <div className="row">
          {filtData.map((val) => {
            const { id, name, ImgSrc, desc } = val;
            return (
              <div className="col-md-3 mb-10" key={id}>
                <div className="portfolio_box">
                  <div className="port_img">
                    <img src={ImgSrc} alt={name} />
                  </div>
                  <div className="portCont">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
