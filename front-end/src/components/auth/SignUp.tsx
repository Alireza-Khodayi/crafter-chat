import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import Auth from './Auth';
import { useCreateUser } from '@/hooks/useCreateUser';

interface SignUpInput {
  email: string;
  password: string;
}

function SignUp() {
  const [createUser] = useCreateUser();

  async function handleSignUp({ email, password }: SignUpInput) {
    await createUser({
      variables: {
        createUserInput: {
          email,
          password,
        },
      },
    });
  }

  return (
    <Auth submitLabel='SignUp' onSubmit={handleSignUp}>
      <MUILink component={Link} to='/login' style={{ alignSelf: 'center' }}>
        Login
      </MUILink>
    </Auth>
  );
}

export { SignUp };
