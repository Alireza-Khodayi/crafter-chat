import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';

import Auth from './Auth';

function SignUp() {
  return (
    <Auth submitLabel='SignUp' onSubmit={async () => {}}>
      <Link to='/login' style={{ alignSelf: 'center' }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
}

export { SignUp };
