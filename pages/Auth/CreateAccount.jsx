import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import cls from './auth.module.scss';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../src/store/authSlice';
import { useRouter } from 'next/router';

const CreateAccount = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!username || !!email || !!phone || !!password) {
      dispatch(
        signUpUser({
          username,
          email,
          phone,
          password,
        })
      );
      setEmail('');
      setPassword('');
      setUsername('');
      setPhone('');
      router.push('/Auth');
    } else {
      alert('user data incorrect');
    }
  };

  return (
    <div className={cls.container}>
      <div className={cls.login_container}>
        <div>
          <div className={cls.title}>
            <h2>Sign up</h2>
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
                id='phone'
                type={'number'}
                label='Phone'
                value={phone}
                variant='outlined'
                onChange={(e) => setPhone(e.target.value)}
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
                <Link href={'/Auth'}>
                  <a>Already a user ?</a>
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

export default CreateAccount;
