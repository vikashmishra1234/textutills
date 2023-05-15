import React, { useState } from 'react'

import Navbar from './components/Navbar';
 import TextForm from './components/TextAnalyze';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {

  const toggleMode = () => {
    console.log("function is running")
    if (Mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "black"
    }
  }


  const [Mode, setMode] = useState("light")



  return (
    <>
       <Navbar toggleMode={toggleMode} Mode={Mode} />
       <TextForm heading={"Enter Something To Analayze"} Mode={Mode}/>

    {/* <Router>
      <Navbar toggleMode={toggleMode} Mode={Mode} />
      <Routes>
       
      <Route exact path="/"  element={<TextForm heading={"Enter Something To Analayze"} Mode={Mode}/>} />

      <Route exact path="/About"  element={<About/>} />
          
          
        </Routes>
        </Router> */}
        </>
    
)};

        export default App;
