import React from "react";
import "./App.css";

const Buttons = (props) => {

  
    return (
      <div className="buttons">
        <div>
           <button className="homeButtons__touchdown" onClick={()=>props.setDowns(props.downs + 1)}>Downs Up</button> 
           <button className="homeButtons__fieldGoal" onClick={()=>props.setDowns(props.downs - 1)}>Downs Down</button> 
        </div>
        <div>
          <button className="homeButtons__touchdown" onClick={()=>props.setQuarter(props.quarter + 1)}>Quarter Up</button> 
          <button className="homeButtons__fieldGoal" onClick={()=>props.setQuarter(props.quarter - 1)}>Quarter Down</button>
        </div>
    </div>
    );
  };
  
  export default Buttons;
  