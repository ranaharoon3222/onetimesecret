'use client';

import { getAuth } from '@/components/Auth/getAuth';
import AccountForm from '@/components/Login/loginForm';

import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Login = () => {
  const { user } = getAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      redirect('/'); // redirect to home
    }
  }, [user]);

  return (
    <>
      <div className='flex items-center justify-center h-screen '>
        <AccountForm />
      </div>
    </>
  );
};

export default Login;
