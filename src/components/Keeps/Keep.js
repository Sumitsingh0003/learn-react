import React,{useState} from "react";
// import fireDb from "../../Firebase";

const Keep = () => {

    const [listData, setListData] = useState({title:'', content:''});
    const [arrData, setArrData] = useState([]); 
    const inptFidlHandle =(e) =>{
        setListData({...listData, [e.target.name]:e.target.value})
    }

    const submtData = () =>{
        const {title, content} = listData;
        if(!title || !content){            
            alert('Fill the Data');
        }else{
            setArrData([...arrData, listData]);
            // fireDb.child("contact").push(listData, (err) =>{
            //     if(err){
            //      console.log(err)
            //     } else {  
            //       console.log("Contact Add Succeccfull ")
            //     }
            //   });
            setListData({title:'', content:''});
        }        
    }

    const deletData =(id)=>{

        // const a = arrData.filter((item,index)=>{
        //     return index === id
        // })
        // setArrData(a)
        // console.log("asa",a)
        setArrData((olddat)=>{ return olddat.filter((arData, ind) => {
                return ind !== id;
            })
        })
       
    }



    return (
        <>
            <div className="ToDoItems">
                <div className="main_div">
                    <div className="listData">
                    {arrData.map((val, ind)=>{
                        return <div key={ind}>
                        <div className="list_bx">
                            <div className="todocontent">
                                <h3>{val.title}</h3>
                                <p>{val.content}</p>
                            </div>
                            <button className="dlt_btn" onClick={(e)=>deletData(ind)}>
                                <img src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-64-512.png" alt="" />
                            </button>
                        </div>
                        </div>
                        
                    })}
                    </div>
                    <div className="center_div">
                        <br /><h1> Google Keep </h1><br />
                        <input type="text" placeholder="Tittle" onChange={inptFidlHandle} value={listData.title} name="title" 

                        /><br />
                        <textarea placeholder="Content" onChange={inptFidlHandle} value={listData.content} name="content"></textarea><br />
                        <button onClick={submtData}> + </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Keep