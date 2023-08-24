import { Box, IconButton } from '@mui/joy';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const ScrollTop = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const changeScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', changeScroll);
    return () => {
      window.removeEventListener('scroll', changeScroll);
    };
  }, []);
  

  const handleClick = () => {
      const anchor = document.getElementById('top-anchor');

      if (anchor) {
        anchor.scrollIntoView();
      }
  };
  
  return <Box
    visibility={scrollY >= 200 ? 'visible' : 'hidden'}
    sx={{ position: 'fixed', bottom: 16, right: 16 }}
    onClick={handleClick}
  >
    <IconButton aria-label="scroll back to top" color='primary' variant='solid'>
      <KeyboardArrowUp color='info' />
    </IconButton>
  </Box>;
};

export default ScrollTop;