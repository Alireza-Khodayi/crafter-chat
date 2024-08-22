import { router } from '@/core/router';
import { Forum } from '@mui/icons-material';
import { Typography } from '@mui/material';

function MobileBranding() {
  return (
    <>
      <Forum sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant='h5'
        noWrap
        component='a'
        onClick={() => router.navigate('/')}
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        CrafterChat
      </Typography>
    </>
  );
}

export default MobileBranding;
