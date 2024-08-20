import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import Auth from './Auth';

function Login() {
  return (
    <Auth submitLabel='Login' onSubmit={async () => {}}>
      <MUILink component={Link} to='/signup' style={{ alignSelf: 'center' }}>
        SignUp
      </MUILink>
    </Auth>
  );
}

export { Login };
