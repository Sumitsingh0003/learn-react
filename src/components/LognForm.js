import {React, useState} from 'react'

const LognForm = () => {

const [formData, setFormData] = useState({
    name:'',pass:''
});

// const [valData, setValData] = useState({...formData})

const hndleInptField = (e) =>{
    return setFormData({...formData, [e.target.name]:e.target.value});
}

const submtData = (e) =>{
    e.preventDefault();
    console.log({...formData})
}

  return (
    <>
    <p>Name: <b>{formData.name} </b></p>
    <p>Password: <b>{formData.pass}</b> </p>
    
       <form className='lgnFrm p-20 mr-30' style={{border:"1px solid #ddd", borderRadius:"5px"}}>
            <input 
            type="text"
            placeholder=" Username"
            value={formData.name}
            onChange={hndleInptField}
            name="name"
            autoComplete='off'
            />
            <input 
            type="password"
            placeholder=" Password"
            value={formData.pass}
            onChange={hndleInptField}
            name="pass"
            autoComplete='off'
            />
            
            <button onClick={submtData}>Submit</button>
        </form>
    </>
  )
}

export default LognForm
