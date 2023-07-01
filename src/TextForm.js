import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        // console.log('upper case' + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const lowercase=()=>{
      let new_text = text.toLowerCase();
      setText(new_text)
    }

    const handleOnChange=(event)=>{
        // console.log("on change") 
        setText(event.target.value);
    }
    const clearText=(event)=>{
        // console.log("on change") 
        let newtext = ""
        setText(newtext);
    }
    const handleCopyClick = () => {
      navigator.clipboard.writeText(text);
      window.alert('Copied');
    }


    const handleExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const handleSpeak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleCapitalize = () => {
      let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(" ");
      setText(newText);
    }
    
    const [text, setText] = useState('')

  return (
    <>
    <div className="container" style={{color: props.mode==="light"?'black':'white'}}>
        <h1 className='mt-3 mb-2'>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className='form-control' id='myBox' value={text} style={{backgroundColor: props.mode==='dark'?'#1c252d':'white', color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="9"/>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleSpeak}>Speak 🔊</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleupclick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={lowercase}>Convert to Lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCapitalize}>Capitalize</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove White Spaces</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear Text</button>
      </div>
      <div className={`conatiner my-3 mx-3 text-${props.mode==='light'?'dark':'light'}`} style={{marginBottom:'7rem'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <h2 className={` mx-1 text-${props.mode==='light'?'dark':'light'}` }>Preview</h2>
      <p className='mx-1' style={{color: props.mode==="light"?'black':'white'}} >{text.length>0?text:'Nothing to preview'}</p>
      
      </div>
    </>
  )
}
