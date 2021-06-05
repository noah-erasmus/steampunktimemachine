import logo from './logo.svg';
import './App.css';
import { Button, Divider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Start from './stages/Start'
import Teen from './stages/Teen';
import Child from './stages/Child';
import YoungAdult from './stages/YoungAdult';
import Adult from './stages/Adult';
import Elder from './stages/Elder';
import { render } from 'react-dom';
import { useStage } from './StageContext';
import background from './assets/steam_bg.png';
import "./main.css";
import { withStyles } from "@material-ui/core/styles";

const CustomButton = withStyles({
  root: {
    borderRadius: 100,
    border: 'solid 5px #B57D05',
    color: 'black',
    background: 'linear-gradient(180deg, #F6AC08 30%, #c58a06 90%)',
    height: 50,
    padding: '0 30px',
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: '10px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const CustomButtonReset = withStyles({
  root: {
    borderRadius: 100,
    border: 'solid 5px #800000',
    color: 'black',
    background: 'linear-gradient(180deg, #cf142b 30%, #a61022 90%)',
    height: 50,
    padding: '0 30px',
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: '10px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function TimeMachine() {
  const {stageState, setStageState} = useStage()
  const stage = useStage();
  if(stageState === "start"){
    return(
      <div className="start_page backgroundImg" style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <Start/>
        <CustomButton style={{width:'200px'}} onClick={() => setStageState("child")}>START</CustomButton>
      </div>
    )
  }else if(stageState == "child"){
    return(
      <div className="child_page backgroundImg" style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems:'center'}}>
        <Child/>
        <CustomButtonReset style={{width:'100px'}} onClick={() => setStageState("start")}>RESET</CustomButtonReset>
      </div>
    )
  }else if(stageState == "teen"){
    return(
      <div className="teen_page backgroundImg" style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems:'center'}}>
        <Teen/>
        <CustomButtonReset style={{width:'100px'}} onClick={()=>{
          localStorage.setItem('childChoice', "");
          localStorage.setItem('teenChoice', "");
          localStorage.setItem('yadultChoice', "");
          localStorage.setItem('adultChoice', "");
          setStageState("start");
        }}>RESET</CustomButtonReset>
      </div>
    )
  }else if(stageState == "yadult"){
    return(
      <div className="yadult_page backgroundImg" style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems:'center'}}>
        <YoungAdult/>
        <CustomButtonReset onClick={()=>{
          localStorage.setItem('childChoice', "");
          localStorage.setItem('teenChoice', "");
          localStorage.setItem('yadultChoice', "");
          localStorage.setItem('adultChoice', "");
          setStageState("start");
        }}>RESET</CustomButtonReset>
      </div>
    )
  }else if(stageState == "adult"){
    return(
      <div className="adult_page backgroundImg" style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems:'center'}}>
        <Adult/>
        <CustomButtonReset onClick={()=>{
          localStorage.setItem('childChoice', "");
          localStorage.setItem('teenChoice', "");
          localStorage.setItem('yadultChoice', "");
          localStorage.setItem('adultChoice', "");
          setStageState("start");
        }}>RESET</CustomButtonReset>
      </div>
    )
  }else if(stageState == "elder"){
    return(
      <div className="elder_page backgroundImg" style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems:'center'}}>
        <Elder/>
        <CustomButtonReset onClick={()=>{
          localStorage.setItem('childChoice', "");
          localStorage.setItem('teenChoice', "");
          localStorage.setItem('yadultChoice', "");
          localStorage.setItem('adultChoice', "");
          setStageState("start");
        }}>RESET</CustomButtonReset>
      </div>
    )
  }else{
    console.log(stageState)
    return(
      <div className="start_page">
        poo
      </div>
    )
  }
}

export default TimeMachine;