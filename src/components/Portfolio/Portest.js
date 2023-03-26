import React,{useState} from 'react'
import PortestData from "./PortData"

const Portest = () => {
    const [state, setstate] = useState(PortestData);

    const sendCat = (cat) =>{
        const catEelem = PortestData.filter((elem)=>{
            return elem.cat === cat
        })
        setstate(catEelem)

        if(cat==="Show All"){
            setstate(PortestData)
        }
    }

    const PortFolioData = ["Show All", ...new Set(PortestData.map((elem)=> elem.cat))]

    console.log("Category", PortFolioData)


    // const Data = new Set(["1", "2", "1", "3", "2", "1", "3", "2", "3", 3])
    // console.log(Data)

  return (
    <>
      <div className="container pt-50 pb-50">
        <div className="butns">

        {PortFolioData.map((btnVal, ind)=>{
            return(<button className='port_btn' key={ind} onClick={()=>sendCat(btnVal)}> {btnVal}</button> )
        })}
            {/* <button className='port_btn' onClick={()=>setstate(PortestData)}> Show All</button>
            <button className='port_btn' onClick={()=>sendCat('girl')}> Girl</button>
            <button className='port_btn' onClick={()=>sendCat('man')}> Men</button>
            <button className='port_btn' onClick={()=>sendCat('car')}> Car</button>
            <button className='port_btn' onClick={()=>sendCat('nature')}> Nature</button> */}
        </div>

        <div className="row">
        {state.map((val, indx)=>{
            return (
                <div className="col-md-3 mb-10" key={indx} >
                    <div className="portfolio_box">
                        <div className="port_img">
                            <img src={val.ImgSrc} alt='' />
                        </div>
                        <div className="portCont">
                            <h3>{val.name}</h3>
                            <p>Category :- <b style={{textTransform:"capitalize"}}>{val.cat}</b></p>
                            
                        </div>
                    </div>
                </div>
            )
        })}
        
        </div>

    </div>
    </>
  )
}

export default Portest
