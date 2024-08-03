'use client';

import React from 'react';
import TextArea from '@/components/TextArea/textArea';
import { client } from '@/lib/directus';
import { readItems } from '@directus/sdk';
import isAuth from '@/components/Auth/auth';

const Home = () => {
  // let secrets;
  // try {
  //   secrets = await client.request(
  //     readItems('secrets', {
  //       fields: ['*'],
  //     })
  //   );

  //   console.log(secrets);
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div>
      <TextArea />
    </div>
  );
};

export default isAuth(Home);
