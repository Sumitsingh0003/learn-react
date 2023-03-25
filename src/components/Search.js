import React, { useState } from "react";

const Search = () => {
  const [image, setImage] = useState("");

  const imageData = `https://source.unsplash.com/400x300/?${image}`;

  const handleInpt = (e) => {
    setImage(e.target.value);
  };

  return (
    <>
      <div className="mainSrchBox">
        <input
          type="text"
          onChange={handleInpt}
          value={image}
          className="field"
          placeholder="Enter Search here.."
        />

        {image === "" ? null : <img src={imageData} alt="Images" />}
      </div>
    </>
  );
};

export default Search;
