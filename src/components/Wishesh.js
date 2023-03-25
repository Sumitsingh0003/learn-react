import React from "react";

const Wishesh = () => {
  let crntDate = new Date();
  crntDate = crntDate.getHours();
  let msg = "";
  const cssStyle = {color: "",};

  const bxCOlor = {
    background: "gray",
    borderRadius: "10px",
    border: "1px solid #ddd",
    color: "#fff",
    fonrSize: "30px",
    fontWeight: "600",
  };

  if (crntDate >= 3 && crntDate < 12) {
    msg = "Good Morning";
    cssStyle.color = "green";
  } else if (crntDate >= 12 && crntDate < 17) {
    msg = "Good Afternoon";
    cssStyle.color = 'yellow'
  } else if(crntDate >= 17 && crntDate < 22 ) {
    msg = " Good Evening";
    cssStyle.color = 'skyblue'
  }
  else{
    msg = 'Good Night'
    cssStyle.color = 'black'
  }

  return (
    <>
      <div className="p-50" style={bxCOlor}>
        <h3>
          Kaise ho aap log <span style={cssStyle}>{msg}</span> : Hello i am fine
        </h3>
      </div>
    </>
  );
};

export default Wishesh;
