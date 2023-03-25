import React, { useState, useEffect } from "react";

const CovidDashboard = () => {
  const [covidData, setcovidData] = useState([]);

  const covDat = async () => {
        const Data = await fetch('https://data.covid19india.org/data.json');
        const Covid = await Data.json();
        setcovidData(Covid.statewise);
    
  };

  useEffect(() => {
    covDat();
  }, []);

  return (
    <>
      <section className="covid_sections">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cvd_dashbd">
                <table>
                  <thead>
                    <tr>
                      <th>STATE</th>
                      <th>CONFIRMED</th>
                      <th>RECOVERED</th>
                      <th>DEATHS</th>
                      <th>ACTIVE</th>
                      <th>UPDATED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {covidData.map((val, id) => {
                      return (
                        <tr key={id}>
                          <td>{val.state}</td>
                          <td>{val.confirmed}</td>
                          <td>{val.recovered}</td>
                          <td>{val.deaths}</td>
                          <td>{val.active}</td>
                          <td>{val.lastupdatedtime}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CovidDashboard;
