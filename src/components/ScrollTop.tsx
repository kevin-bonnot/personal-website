import { Box, IconButton } from '@mui/joy';
import { KeyboardArrowUp } from '@mui/icons-material';

const ScrollTop = () => {

  const handleClick = () => {
      const anchor = document.getElementById('top-anchor');

      if (anchor) {
        anchor.scrollIntoView();
      }
  };
  
  return <Box
    sx={{ position: 'fixed', bottom: 16, right: 16 }}
    onClick={handleClick}
  >
    <IconButton aria-label="scroll back to top" color='primary' variant='solid'>
      <KeyboardArrowUp color='info' />
    </IconButton>
  </Box>;
};

export default ScrollTop;