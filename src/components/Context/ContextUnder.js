import React,{useContext} from 'react'
import {contextFName, contextLName} from './ContextMain'

const ContextUnder = () => {

    const fname = useContext(contextFName);
    const lstname = useContext(contextLName);

  return (
    <>
      <contextFName.Consumer >
        {(name)=>{
            return (
                <contextLName.Consumer >
                    {(lname)=>{
                        return <h2>Hello bhai {name} {lname}</h2> 
                    }}
                </contextLName.Consumer>
            )           
        }}
      </contextFName.Consumer>
      
      <h3>Or Bhai kya hal {fname} {lstname}</h3>
      </>
    )
}

export default ContextUnder
