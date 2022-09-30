import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import cls from './auth.module.scss';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || password) {
      console.log(email, password);
      setEmail('');
      setPassword('');
      setName('');
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
                value={name}
                variant='outlined'
                onChange={(e) => setName(e.target.value)}
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
                type={'number'}
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
