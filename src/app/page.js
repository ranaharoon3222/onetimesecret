'use client';

import React from 'react';
import TextArea from '@/components/TextArea/textArea';
import { client } from '@/lib/directus';
import { readItems } from '@directus/sdk';
import isAuth from '@/components/Auth/auth';

const Home = () => {
  return (
    <div>
      <TextArea />
    </div>
  );
};

export default isAuth(Home);
