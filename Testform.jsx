import React,{useState} from "react";

const Testform = (props) => {
    const[text, settext]=useState("")
    const handleChange=()=>{
        // let newtext=text.toUpperCase()
        settext(text.toUpperCase())
    }
    const handleOnChange=(event)=>{
       settext(event.target.value)
    }
    const lowerchange=() =>{
        settext(text.toLowerCase())
    }
    const refresh=()=>{
        settext("")
       
    }

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text} onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-outline-danger mx-2" onClick={handleChange}>Convert to upper case</button>
      <button className="btn btn-outline-danger mx-2" onClick={lowerchange}>Convert to Lower case</button>
      <button className="btn btn-outline-danger mx-2" onClick={refresh}>Cleartext</button>
    </div>
    <div className="container">
        <h1>Text summary</h1>
        <p>{text.split(" ").length}words and charcter{text.length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
};

export default Testform;
