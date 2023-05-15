import React, {useState} from 'react';

export default function TextForm(props) {

    const removespaces=()=>{
        let newText=Text;
        newText=newText.replace(/\s{1,}/g, ' ').trim() 
        setText(newText)
    }

    const uppercase=()=>{
        
        let up=Text.toUpperCase()       
        setText(up)
        
       

    }

    const textarr=(event)=>{
      
     setText(event.target.value);
   
   
    }

    // let style={color:props.Mode==='light'?'light':'dark'}
    // console.log(style.color)

    const [Text, setText] = useState("Enter Something");
    return (
        <>
        <div className={`container text-${props.Mode==='light'?'dark':'light'}`}  > 
        <h1 > {props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} id="exampleFormControlTextarea1" rows="8" onChange={textarr} ></textarea>
            </div>
        <button className="btn btn-primary" onClick={uppercase}>Converte into Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={removespaces}>Remove Extra Spaces</button>

        </div>
        <div className={`container my-2  text-${props.Mode==='light'?'dark':'light'}`}>
           <h2> Your Summary</h2> 
           <span>{Text.split(" ").length} word and {Text.length} character</span>
        </div>
        </>
)
};


