import React from 'react'

const CurrentDate = () => {

    const allData = new Date().toLocaleString();

    const localDate = new Date().toLocaleDateString();
    const localeTime = new Date().toLocaleTimeString('en-US', { hour12: true, 
        hour: "numeric", 
        minute: "numeric"
    });

    const data = new Date();
    const dataTime = data.getDate();
    const datamonth = data.getMonth();
    const year = data.getFullYear();
    const min = data.getMinutes();
    const hours = data.getHours();
    const seconds = data.getSeconds();

    const header = {
        color: 'red',
        textTransform:'uppercase',
        padding:'10px 0px 0px'
    }


  return (
    <>
        <div className='p-20'>
            <h1 style={header}>Hello World {allData}</h1>
            <h2>Date is {localDate}</h2>
            <h3>Time is {localeTime}</h3>
            <p>{`Today Current Date is ${dataTime}/${datamonth}/${year}`}</p>
            <p>{`Today Current Time is ${hours}:${min}:${seconds}`}</p>
        </div>
       
    </>
  )
}

export default CurrentDate
