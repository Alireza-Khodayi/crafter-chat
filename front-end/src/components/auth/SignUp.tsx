import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import Auth from './Auth';
import { useCreateUser } from '@/hooks/useCreateUser';
import { useState } from 'react';
import { extractErrorMessage } from '@/core/utilities/Errors';

interface SignUpInput {
  email: string;
  password: string;
}

function SignUp() {
  const [createUser] = useCreateUser();
  const [error, setError] = useState('');
  async function handleSignUp(signUpInput: SignUpInput) {
    try {
      await createUser({
        variables: {
          createUserInput: signUpInput,
        },
      });
      setError('');
    } catch (err) {
      const errorMessage = extractErrorMessage(err);
      if (errorMessage) {
        setError(errorMessage);
        return;
      }
      setError('Unknown error occured.');
    }
  }

  return (
    <Auth submitLabel='SignUp' onSubmit={handleSignUp} error={error}>
      <MUILink component={Link} to='/login' style={{ alignSelf: 'center' }}>
        Login
      </MUILink>
    </Auth>
  );
}

export { SignUp };
