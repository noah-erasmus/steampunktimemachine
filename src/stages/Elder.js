import logo from '../logo.svg';
import { Button, Typography, Box } from '@material-ui/core';
import { useStage } from '../StageContext';

function Elder() {
  const {stageState, setStageState} = useStage()
  var data = require('../data.json')
  var childChoice = localStorage.getItem('childChoice');
  var teenChoice = localStorage.getItem('teenChoice');
  var yadultChoice = localStorage.getItem('yadultChoice');
  var adultChoice = localStorage.getItem('adultChoice');
  return (
    <div className="YoungAdult">
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <Box border={4} bgcolor="#242424" borderColor="#d89840" color="#fcfcfc" width={4/5} borderRadius={10} className="story-box" fontWeight="fontWeightBold">
          <Typography variant="body1" align="center" gutterBottom>{data[childChoice][teenChoice][yadultChoice][adultChoice].ending}</Typography>
        </Box>
      </Box>
    </div>
  );
  
}

export default Elder;