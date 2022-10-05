import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../src/store/authSlice';
import cls from './auth.module.scss';

const Auth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, isLoggedIn } = useSelector((state) => state.auth);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!username || !!email || !!password) {
      dispatch(
        loginUser({
          username,
          email,
          password,
        })
      );
      setEmail('');
      setPassword('');
      setUsername('');
    } else {
      alert('user data incorrect');
    }
  };

  useEffect(() => {
    if (isLoggedIn) router.push('/');
  }, [isLoggedIn]);

  return (
    <div className={cls.container}>
      <div className={cls.login_container}>
        <div>
          <div className={cls.title}>
            <h2>Sign in</h2>
          </div>
          <div>
            <form className={cls.form} onSubmit={(e) => handleSubmit(e)}>
              <TextField
                autoComplete='off'
                id='name'
                label='Name'
                fullWidth
                value={username}
                variant='outlined'
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                autoComplete='off'
                id='email'
                label='Email'
                fullWidth
                value={email}
                variant='outlined'
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                autoComplete='off'
                fullWidth
                id='pass'
                label='Password'
                value={password}
                variant='outlined'
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className={cls.links}>
                <Link href={'/Auth/CreateAccount'}>
                  <a>Need an account ?</a>
                </Link>
              </div>
              <Button
                sx={{ borderRadius: 15 }}
                type='submit'
                color='success'
                variant='contained'
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
