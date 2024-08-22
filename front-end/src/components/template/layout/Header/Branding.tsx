import { Typography } from '@mui/material';
import { Forum } from '@mui/icons-material';
import { router } from '@/core/router';

function Branding() {
  return (
    <>
      <Forum sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant='h6'
        noWrap
        component='a'
        onClick={() => router.navigate('/')}
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          fontSize: 18,
          cursor: 'pointer',
        }}
      >
        CrafterChat
      </Typography>
    </>
  );
}

export default Branding;
