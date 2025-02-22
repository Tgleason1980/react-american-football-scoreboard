import React from "react";
import "./App.css";

const BottomRow = (props) => {


  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{props.downs}</div>
        {/* <button className="homeButtons__touchdown" onClick={()=>setDowns(downs + 1)}>Downs Up</button> */}
        {/* <button className="homeButtons__fieldGoal" onClick={()=>setDowns(downs - 1)}>Downs Down</button> */}
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{props.quarter}</div>
        {/* <button className="homeButtons__touchdown" onClick={()=>setQuarter(quarter + 1)}>Quarter Up</button> */}
        {/* <button className="homeButtons__fieldGoal" onClick={()=>setQuarter(quarter - 1)}>Quarter Down</button> */}
      </div>
    </div>
  );
};

export default BottomRow;
