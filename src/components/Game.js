import React from "react";

const GameBknd = () =>{
    const x = "one";
    const y = "one";
    const z = "one";

    if(x===y && y===z){ //both conditions are true then go to return value and not so go to else value
        return (
            <>
                <h1>matched</h1>
            </>           
            )
    }
    else{
          console.log("not matched")      
    }

}

const GameBknd2 = () =>{
  const x = "one";
  const y = "two";
  const z = "one";

  if(x===y && y===z){
      return (
          <>
              <h1>matched</h1>
          </>           
          )
  }
  else{
        console.log("not matched")
        return (<h1>Not matched</h1>)
  }

}

const GameBknd3 = (props) =>{
const{ x, y, z} = props;

  if(x===y && y===z){
      return (
          <>
            <h1>Matching</h1>
          </>           
          )
  }
  else{
        return (<h1>Not matched</h1>)
  }

}


const Game = () => {
    return (
    <>
      <h1>Game</h1>
      <GameBknd />
      <GameBknd2 />
      <GameBknd3 x='one' y='one' z='one'/>
    </>
  );
};

export default Game;
