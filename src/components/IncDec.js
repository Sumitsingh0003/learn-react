import React,{useState} from 'react'

const IncDec = () => {

    const [state, setstate] = useState(0);

    const incVal = () => {
        setstate(state+1);        
    }
    const dicVal = () => {
        if(state>0){
            setstate(state-1);
        }else{
            alert('Value is Enough')
        }
       
    }

  return (
    <>
      <div className='main_inc'>
        <div className='main_inc_sec'>
            <h2>{state}</h2>
            <div className='incBtn'>
                <button onClick={dicVal}>Decrement</button>
                <button onClick={incVal}>Increment</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default IncDec
