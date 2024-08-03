'use client';

import { client } from '@/lib/directus';
import React, { useEffect } from 'react';
import { getAuth } from '@/components/Auth/getAuth';
import { readMe } from '@directus/sdk';
import { useRouter } from 'next/navigation';

export default function isAuth(Component) {
  return function IsAuth(props) {
    const { user } = getAuth();
    const router = useRouter();

    useEffect(() => {
      const getUser = async () => {
        try {
          const result = await client.request(
            readMe({
              fields: ['*'],
            })
          );
        } catch (error) {
          // console.log(error);
          router.push('/login');
        }
      };

      getUser();
    }, [user]);

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}
