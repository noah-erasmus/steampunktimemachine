import logo from '../logo.svg';
import { Button, Typography, Box } from '@material-ui/core';
import { useStage } from '../StageContext';
import "../main.css";
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

function Adult() {
  const {stageState, setStageState} = useStage()
  var data = require('../data.json')
  var childChoice = localStorage.getItem('childChoice');
  var teenChoice = localStorage.getItem('teenChoice');
  var yadultChoice = localStorage.getItem('yadultChoice');
  console.log(yadultChoice)
  return (
    <div className="YoungAdult">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box border={4} bgcolor="#242424" borderColor="#d89840" color="#fcfcfc" width={4/5} borderRadius={10} className="story-box" fontWeight="fontWeightBold">
          <Typography align="center" className="box-text" variant="body1" gutterBottom>{data[childChoice][teenChoice][yadultChoice].consequence}</Typography>
          <Typography align="center" variant="body1" gutterBottom>{data[childChoice][teenChoice][yadultChoice].lifeupdate}</Typography>
        </Box>
        <Box>
          <CustomButton onClick={()=>{
            localStorage.setItem('adultChoice', "family");
            setStageState("elder");
          }}>FAMILY</CustomButton>
          <CustomButton onClick={()=>{
            localStorage.setItem('adultChoice', "work");
            setStageState("elder");
          }}>WORK</CustomButton>
        </Box>
      </Box>
        
        
    </div>
  );
  
}

export default Adult;