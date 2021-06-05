import logo from '../logo.svg';
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
    padding: '0 15px',
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: '10px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function Teen() {
  const {stageState, setStageState} = useStage()
  var data = require('../data.json')
  var childChoice = localStorage.getItem('childChoice');
  console.log(childChoice)
  return (
    <div className="Teen">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box border={4} bgcolor="#242424" borderColor="#d89840" color="#fcfcfc" width={4/5} borderRadius={10} className="story-box" fontWeight="fontWeightBold" mb={2}>
          <Typography align='center' variant="body1" gutterBottom>{data[childChoice].consequence}</Typography>
          <Typography align='center' variant="body1" gutterBottom>{data[childChoice].lifeupdate}</Typography>
        </Box>
        <Box>
          <CustomButton onClick={()=>{
            localStorage.setItem('teenChoice', "scientist");
            setStageState("yadult");
          }}>PHYSICIST</CustomButton>
          <CustomButton onClick={()=>{
            localStorage.setItem('teenChoice', "surgeon");
            setStageState("yadult");
          }}>SURGEON</CustomButton>
          <CustomButton onClick={()=>{
            localStorage.setItem('teenChoice', "ambassador");
            setStageState("yadult");
          }}>AMBASSADOR</CustomButton>
        </Box>
      </Box>
    </div>
  );
  // if(childChoice === "bully"){
  //   return (
  //     <div className="Teen">
  //         <Typography variant="h6" gutterBottom>{data.bully.consequence}</Typography>
  //         <Button variant="contained" color="secondary" onClick={()=>{
  //           localStorage.setItem('teenChoice', "scientist");
  //           setStageState("adult");
  //         }}>Scientist</Button>
  //         <Button variant="contained" color="secondary" onClick={()=>{
  //           localStorage.setItem('teenChoice', "surgeon");
  //           setStageState("adult");
  //         }}>Surgeon</Button>
  //         <Button variant="contained" color="secondary" onClick={()=>{
  //           localStorage.setItem('teenChoice', "ambassador");
  //           setStageState("adult");
  //         }}>Ambassador</Button>
  //     </div>
  //   );
  // }else if(childChoice === "prodigy"){
  //   return (
  //     <div className="Teen">
  //         <Typography variant="h6" gutterBottom>{data.prodigy.consequence}</Typography>
  //         <Button variant="contained" color="secondary" onClick={()=>{
  //           localStorage.setItem('teenChoice', "scientist");
  //           setStageState("adult");
  //         }}>Scientist</Button>
  //         <Button variant="contained" color="secondary" onClick={()=>{
  //           localStorage.setItem('teenChoice', "surgeon");
  //           setStageState("adult");
  //         }}>Surgeon</Button>
  //         <Button variant="contained" color="secondary" onClick={()=>{
  //           localStorage.setItem('teenChoice', "ambassador");
  //           setStageState("adult");
  //         }}>Ambassador</Button>
  //     </div>
  //   );
  // }else if(childChoice === "loser"){
  //   return (
  //     <div className="Teen">
  //         <Typography variant="h6" gutterBottom>{data.loser.consequence}</Typography>
  //         <Button variant="contained" color="secondary" onClick={()=>{
  //           localStorage.setItem('teenChoice', "scientist");
  //           setStageState("adult");
  //         }}>Scientist</Button>
  //         <Button variant="contained" color="secondary" onClick={()=>{
  //           localStorage.setItem('teenChoice', "surgeon");
  //           setStageState("adult");
  //         }}>Surgeon</Button>
  //         <Button variant="contained" color="secondary" onClick={()=>{
  //           localStorage.setItem('teenChoice', "ambassador");
  //           setStageState("adult");
  //         }}>Ambassador</Button>
  //     </div>
  //   );
  // }
  
}

export default Teen;