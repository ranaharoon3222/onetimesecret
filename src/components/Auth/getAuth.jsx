import { client } from '@/lib/directus';
import { readMe } from '@directus/sdk';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export const getAuth = () => {
  const [user, setUser] = useState(null);

  const router = useRouter();

  const handleLogout = async () => {
    await client.logout();
    setUser(null);
    router.push('/login');
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await client.request(
          readMe({
            fields: ['*'],
          })
        );
        setUser(result);
      } catch (error) {
        console.log(error);
        setUser(null);
      }
    };
    getUser();
  }, []);

  return { user, handleLogout };
};
