import React from 'react'
import CovidAPI from '../components/Covid/CovidAPI'; 
import FirstCovid from '../components/Covid/FirstCovid';
import Api from '../components/Covid/Api';

const AllApiData = () => {
  return (
    <>
        <Api/>
        <CovidAPI/>
        <FirstCovid/>
    </>
  )
}

export default AllApiData
