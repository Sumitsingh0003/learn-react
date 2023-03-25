import React, {useState, useEffect} from "react";

const CovidAPI = () => {

    const [data, setData] = useState([]);

    const getCovidData = async()=>{
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const getData = await res.json();
            setData(getData.statewise);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCovidData();        
    }, []);

  return (
    <>
      <section className="pt-50">
        <div className="container">
          <div className="row">

          {data.map((val, ind)=>{
            return(
              <div className="col-md-4" 
              key={ind}
              >
              <div
                className="covidPart"
                style={{ background: "green", color: "#fff" }}
              >
                <p>
                  Our Country <span>INDIA</span>
                </p>
                <h2>{val.state}</h2>
                <ul>
                  <li>{val.active}</li>
                  <li>{val.deaths}</li>
                  <li>{val.confirmed}</li>
                  <li>{val.deltaconfirmed}</li>
                  <li>{val.deltadeaths}</li>  
                  <li>{val.deltarecovered}</li>  
                  <li>{val.lastupdatedtime}</li>  
                  <li>{val.migratedother}</li>  
                  <li>{val.recovered}</li>
                  <li>{val.statecode}</li>
                  <li>{val.statenotes}</li>
                </ul>
              </div>
            </div>
            
            )
            
          })
            
          };
            

          </div>
        </div>
      </section>
    </>
  );
};

export default CovidAPI;
