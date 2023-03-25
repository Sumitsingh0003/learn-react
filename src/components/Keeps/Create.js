import React, { useState } from "react";

const Create = () => {
  const [obj, setObj] = useState({
    title: "",
    content: "",
  });
  const [field, setField] = useState([]);

  const hndleInputField = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  const createData = () => {
    const {title, content } = obj;

    if( !title || !content ){
        alert("Fil the Data ");
    }else{
        setField([...field, obj]);
        setObj({ title: "", content: "" });
    }   
  };

  const deleteData = (id) => {
    setField((current) => {
      return current.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="listData">
          {field.map((val, index) => {
            return (
              <div key={index} id={index}>
                <div className="list_bx">
                  <h3>{val.title}</h3>
                  <p>{val.content}</p>
                  <button className="dlt_btn" onClick={() => deleteData(index)}>
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-64-512.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />

          <input
            type="text"
            placeholder="Tittle"
            onChange={hndleInputField}
            value={obj.title}
            name="title"
          />

          <br />
          <textarea
            placeholder="Content"
            onChange={hndleInputField}
            value={obj.content}
            name="content"
          ></textarea>

          <br />
          <button onClick={createData}> + </button>
        </div>
      </div>
    </>
  );
};

export default Create;
