import logo from '../logo.svg';
import { Button, Typography, Box } from '@material-ui/core';
import { useStage } from '../StageContext';
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";

const italianno = {
  fontFamily: 'Italianno',
  fontStyle: 'regular',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
    ../Fonts/Italianno-Regular.ttf
  `
 };

 const theme = createMuiTheme({
  typography:{
      fontFamily: ['"Open Sans"', 'Italianno', 'Roboto'].join(','),
      body1:{
          fontFamily:"Italianno",
      }
  },
  overrides:{
      MuiCssBaseline:{
          '@global':{
              '@font-face':[italianno],
          }
      }
  }
})
// background: 'linear-gradient(0deg, #F6AC08, #c58a06',
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

function YoungAdult() {
  const {stageState, setStageState} = useStage()
  var data = require('../data.json')
  var childChoice = localStorage.getItem('childChoice');
  var teenChoice = localStorage.getItem('teenChoice');
  console.log(teenChoice)
  return (
    <div className="YoungAdult stage-container">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box border={4} bgcolor="#242424" borderColor="#d89840" color="#fcfcfc" width={4/5} borderRadius={10} className="story-box" fontWeight="fontWeightBold">
          <Typography variant="body1" align="center" gutterBottom fontFamily={italianno}>{data[childChoice][teenChoice].consequence}</Typography>
          <Typography variant="body1" align="center" gutterBottom>{data[childChoice][teenChoice].lifeupdate}</Typography>
        </Box>
        <Box>
          <CustomButton onClick={()=>{
            localStorage.setItem('yadultChoice', "friend");
            setStageState("adult");
          }}>FRIEND</CustomButton>
          <CustomButton onClick={()=>{
            localStorage.setItem('yadultChoice', "wife");
            setStageState("adult");
          }}>WIFE</CustomButton>
        </Box>
      </Box>
      
    </div>
  );
  
}

export default YoungAdult;