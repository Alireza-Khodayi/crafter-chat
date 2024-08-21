import { useGetMe } from '@/hooks/useGetMe';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAuthProps {
  submitLabel: string;
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
  error?: string;
}

function Auth({ onSubmit, submitLabel, children, error }: IAuthProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { data } = useGetMe();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (data) {
        navigate('/');
      }
    },
    [data, navigate],
  );

  return (
    <Stack
      spacing={3}
      sx={{
        height: '100vh',
        maxWidth: {
          xs: '70%',
          md: '30%',
        },
        margin: '0 auto',
        justifyContent: 'center',
      }}
    >
      <TextField
        type='email'
        label='Email'
        variant='outlined'
        value={email}
        onChange={e => setEmail(e.target.value)}
        error={!!error}
        helperText={error}
      />
      <TextField
        type={showPassword ? 'text' : 'password'}
        label='Password'
        variant='outlined'
        value={password}
        onChange={e => setPassword(e.target.value)}
        error={!!error}
        helperText={error}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={() => setShowPassword(show => !show)}
                onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                }}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant='contained' onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
}

export default Auth;
