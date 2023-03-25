import React,{useState} from 'react'

const TitleChange = () => {

    const [state, setstate] = useState(0);
    document.title=`You Clicked Me  ${state}`;

  return (
    <>
      <button onClick={()=>{
        setstate(state+1)
      }}>Click Me {state}</button>
    </>
  )
}

export default TitleChange
