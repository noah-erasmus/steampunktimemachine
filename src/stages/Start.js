import logo from '../logo.svg';
import { Button, Typography, Box } from '@material-ui/core';

function Start() {
  return (
    <div className="App stage-container">
      <Box style={{color: '#B57D05'}} display="flex" alignItems="center" flexDirection="column" mb={2}>
        <Box border={4} bgcolor="#242424" borderColor="#d89840" color="#fcfcfc" width={4/5} borderRadius={10} className="story-box" fontWeight="fontWeightBold">
          <Typography variant="body1" gutterBottom>Press START to relive your life.</Typography>
        </Box>
      </Box>
        
    </div>
  );
}

export default Start;