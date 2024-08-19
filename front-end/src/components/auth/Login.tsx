import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import Auth from './Auth';

function Login() {
  return (
    <Auth submitLabel='Login' onSubmit={async () => {}}>
      <Link to='/signup' style={{ alignSelf: 'center' }}>
        <MUILink>SignUp</MUILink>
      </Link>
    </Auth>
  );
}

export { Login };
