import React, { useState } from "react";

const Accordion = () => {
  const accordionData = [
    {
      heading: "Lorem ipsum",
      discription:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      heading: "Dummy Text",
      discription:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      heading: "Local Content",
      discription:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
  ];

  const [acccShow, setAcccShow] = useState(false);

  const openData = (id) => {
    if (acccShow === id) {
      setAcccShow(false);
    } else {
      setAcccShow(id);
    }
  };

  return (
    <>
      <div className="main_inc">
        <div className="main_inc_sec accordions">
          <ul className="acrdn_list">
            {accordionData.map((vals, ind) => {
              return (
                <li key={ind} id={ind}>
                  <button onClick={() => openData(ind)}>
                    {vals.heading} <span>{acccShow === ind ? "➖" : "➕"}</span>
                  </button>
                  {acccShow === ind && (
                    <div className="acrdn_cntBx">{vals.discription}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Accordion;
