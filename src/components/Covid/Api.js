import React, { useState, useEffect } from "react";

const Api = () => {
  const [apiData, setApiData] = useState([]);
  const FetchData = async () => {
    try {
      const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
      const Data = await res.json();
      // console.log(Data[0]);
      setApiData(Data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <section className="apis">
        <div className="container">
          <div className="row">
            {apiData.map((val, ind) => {
              return (
                <div className="col-md-3 mb-30" key={ind}>
                    <div className="covidPart">
                      <ul>
                        {/* <li>{val.id}</li> */}
                        <li>{val.Nation}</li>
                        <li>{val.Year}</li>
                        <li>{val.Population}</li>
                        {/* <li>{val.status}</li> */}
                      </ul>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Api;
