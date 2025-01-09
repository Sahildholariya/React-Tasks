import React , {useState} from 'react'


import PropTypes from 'prop-types'

export default function TextForms(props) {

  const handleUpClick = () =>{
    // console.log("Upparcase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase","success")
  }
  const handleOnChange = (event) =>{
    // console.log("on change");
    setText(event.target.value);
  }
  const handleLoClick = ()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase","success")
  }
  const clear = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Clear","success")
  }
  const CamalCase = ()=>{
    let  result = text.toLowerCase();
    let  finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    setText(finalResult);
    props.showAlert("Converted To CamalCase","success")
  }

  const [text,setText] = useState('');
  return (
    <>
      <div>
      <h2 className=' my-2'>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={CamalCase}>Convert to CamalCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clear}>Clear All</button>
      </div>

      <div className="container my-4">
        <h3>Your Text Summary</h3>
        {/* <p>{text.trim().split(/\s+/).length} words and {text.length} charactors</p> */}
        {/* Regular expressiomn --> /\s+/ */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0 }).length} words and {text.length} charactors</p>
        <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length !==0 }).length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter Your Text'}</p>
      </div>
    </>
    
  )
}

TextForms.propTypes = {
  heading : PropTypes.string.isRequired
}
