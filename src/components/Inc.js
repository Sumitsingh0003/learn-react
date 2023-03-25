import {React, useState} from 'react'

const Inc = () => {
const [incVal, setIncVal] = useState(0);

const IncValue = () =>{
    setIncVal(incVal+1);
 }


 let TheDate = new Date().toLocaleTimeString();
 const [date, setDate] = useState(TheDate);

 const getDate = () =>{
    TheDate = new Date().toLocaleTimeString();
    setDate(TheDate);
 };

 setInterval(getDate, 1000);

  return (
    <>
    <div className='p-20'>
        <button onClick={IncValue}> Inc Val </button>
        <p>{incVal}</p>

        {/* <button onClick={getDate}>Get Date</button> */}
        <h2>{date}</h2>
    </div>
      
    </>
  )
}

export default Inc;
