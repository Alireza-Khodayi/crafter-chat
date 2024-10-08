import client from '@/core/constants/apollo-clients';
import { useState } from 'react';

interface LoginRequest {
  email: string;
  password: string;
}
function useLogin() {
  const [error, setError] = useState<string>();

  const login = async (request: LoginRequest) => {
    const res = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!res.ok) {
      if (res.status === 401) {
        setError('Credentials are not valid.');
      } else {
        setError('Unknown error occured.');
      }
      return;
    }
    setError('');
    await client.refetchQueries({ include: 'active' });
  };

  return { login, error };
}

export { useLogin };
