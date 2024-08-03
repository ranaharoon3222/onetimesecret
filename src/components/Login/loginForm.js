import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AccountForm = () => {
  return (
    <Card className='max-w-sm mx-auto'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          {/* <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='m@example.com'
              required
            />
          </div> */}
          {/* <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Password</Label>
              <Link href='#' className='inline-block ml-auto text-sm underline'>
                Forgot your password?
              </Link>
            </div>
            <Input id='password' type='password' required />
          </div> */}
          {/* <Button type='submit' className='w-full'>
            Login
          </Button> */}
          <Button variant='outline' className='w-full'>
            <a
              href={`https://one-api.13.77.2.205.sslip.io/auth/login/github?redirect=${process.env.NEXT_PUBLIC_URL}`}
            >
              Continue with Github
            </a>
          </Button>
        </div>
        {/* <div className='mt-4 text-sm text-center'>
          Don&apos;t have an account?{' '}
          <Link href='#' className='underline'>
            Sign up
          </Link>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default AccountForm;
