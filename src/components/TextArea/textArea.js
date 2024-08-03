'use client';

import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { createItem } from '@directus/sdk';
import { client } from '@/lib/directus';
import { useRouter } from 'next/navigation';

const TextArea = () => {
  const router = useRouter();
  const [pass, setPass] = useState('');
  const [text, setText] = useState('');
  const [showPass, setShowPass] = useState(false);

  const [lifetime, setLifetime] = useState('3 days');

  const generateRandomPassword = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 12;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPass(result);
    return result;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await client.request(
      createItem('secrets', {
        status: 'published',
        secret: text,
        password: pass,
        lifetime: lifetime,
      })
    );

    router.push('/secret/' + result.id);
  };

  const lifeTimeValues = [
    {
      label: '3 days',
      value: '3 days',
    },
    {
      label: '7 days',
      value: '7 days',
    },
    {
      label: '14 days',
      value: '14 days',
    },
    {
      label: '12 hours',
      value: '12 hours',
    },
    {
      label: '4 hours',
      value: '4 hours',
    },
    {
      label: '1 hours',
      value: '1 hours',
    },
    {
      label: '30 mins',
      value: '30 mins',
    },
    {
      label: '5 mins',
      value: '5 mins',
    },
  ];

  return (
    <div>
      <div className='max-w-[600px] mx-auto mt-10'>
        <h1 className='mb-5 text-3xl font-bold leading-tight text-center '>
          Paste a password, secret message or private link below.{' '}
        </h1>
        <p className='mb-10 text-center'>
          Keep sensitive info out of your email and chat logs.
        </p>
        <form onSubmit={handleSubmit}>
          <Textarea
            className='bg-black/5 min-h-52'
            placeholder='Seceret content goes here...'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          <div>
            <h3 className='mt-10 mb-4 font-bold'>Privacy Options</h3>
            <div className='border rounded p-7 bg-black/5 border-primary_1'>
              <Label htmlFor='pass' className='inline-block mb-3 '>
                Pass Phrase
              </Label>
              <div className='relative'>
                <Input
                  id='pass'
                  type={showPass ? 'text' : 'password'}
                  placeholder='A word or phrase That’s difficult to guess '
                  className='h-14 bg-primary_2'
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                {showPass ? (
                  <EyeIcon
                    onClick={() => setShowPass(!showPass)}
                    className='absolute -translate-y-1/2 cursor-pointer right-3 top-1/2'
                  />
                ) : (
                  <EyeOffIcon
                    onClick={() => setShowPass(!showPass)}
                    className='absolute -translate-y-1/2 cursor-pointer right-3 top-1/2'
                  />
                )}
              </div>

              <Label htmlFor='pass' className='inline-block mt-5 mb-3 ml-1'>
                Lifetime
              </Label>
              <Select
                value={lifetime}
                onValueChange={(value) => setLifetime(value)}
                className='bg-primary_2'
              >
                <SelectTrigger className='w-full py-6 bg-primary_2'>
                  <SelectValue placeholder='Lifetime' />
                </SelectTrigger>
                <SelectContent>
                  {lifeTimeValues.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className='mt-10'>
                <Button type='submit' className='w-full py-5 bg-primary_1'>
                  Create a Secret link
                </Button>
                <p className='my-2 font-medium text-center'>OR</p>
                <Button
                  onClick={generateRandomPassword}
                  type='button'
                  className='w-full py-5 capitalize bg-primary_1'
                >
                  generate a random password
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TextArea;
