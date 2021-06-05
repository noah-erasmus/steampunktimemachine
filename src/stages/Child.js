import logo from '../logo.svg';
import React, { useState } from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { useStage } from '../StageContext';
import { withStyles } from "@material-ui/core/styles";

const CustomButton = withStyles({
  root: {
    borderRadius: 100,
    border: 'solid 5px #B57D05',
    color: 'black',
    background: 'linear-gradient(180deg, #F6AC08 30%, #c58a06 90%)',
    height: 50,
    padding: '0 20px',
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: '10px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function Child() {
  const {stageState, setStageState} = useStage()
  var data = require('../data.json')
  return (
    <div className="Child">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box border={4} bgcolor="#242424" borderColor="#d89840" color="#fcfcfc" width={4/5} borderRadius={10} className="story-box" fontWeight="fontWeightBold" mb={2}>
        <Typography id="child_consequences" align='center' variant="body1" gutterBottom>{data.lifeupdate}</Typography>
        </Box>
        <Box>
          <CustomButton onClick={()=>{
              localStorage.setItem('childChoice', "bully");
              setStageState("teen");
            }}>
              LUCIUS
            </CustomButton>
            <CustomButton onClick={()=>{
              localStorage.setItem('childChoice', "prodigy");
              setStageState("teen");
            }}>
              ZEKE
            </CustomButton>
            <CustomButton onClick={()=>{
              localStorage.setItem('childChoice', "loser");
              setStageState("teen");
            }}>
              ELIJAH
          </CustomButton>
        </Box>
      </Box>
    </div>
  );
}

export default Child;