import React,{useEffect, useState} from 'react'

const FirstCovid = () => {
    const [state, setState] = useState([]);

    const coviData = async()=>{
      try {
        const res = await fetch('https://data.covid19india.org/data.json');
          const data = await res.json();
          setState(data.statewise[0]);           
       }
      catch (error) {
        console.log(error)
      }
    }
    
    useEffect(() => {
      coviData();
    }, []);
  return (
    <>
       <section className='pt-50'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='covidPart' style={{background:"green", color:"#fff"}}>
                <p>Our Country <span>INDIA</span></p>
                <h2>{state.state}</h2>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='covidPart' style={{background:"orange"}}>
                <p>Total <span>Recovered</span></p>
                <h2>{state.recovered}</h2>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='covidPart' style={{background:"yellow"}}>
                <p>Total <span>Confirmed</span></p>
                <h2>{state.confirmed}</h2>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='covidPart' style={{background:"pink", color:"#fff"}}>
                <p>Total <span>Deaths</span></p>
                <h2>{state.deaths}</h2>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='covidPart' style={{background:"blue", color:"#fff"}}>
                <p>Total <span>Active</span></p>
                <h2>{state.active}</h2>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='covidPart' style={{background:"gray", color:"#fff"}}>
                <p>Last <span>Updates</span></p>
                <h2>{state.lastupdatedtime}</h2>
              </div>
            </div>
          </div>
        </div>
     </section>
    </>
  )
}

export default FirstCovid
