import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../src/components/Header/Header';
import { getUser, setPassword, updateUser } from '../src/store/authSlice';
import s from '../src/style/profile.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Profile = () => {
  const dispatch = useDispatch();
  const { id, user: profile, errorpass } = useSelector((state) => state.auth);

  const [picture, setImage] = useState();
  const [user, setUser] = useState({
    username: 'name',
    phone: 'phone',
    email: 'email',
    id: 'id',
  });

  const [passwordChange, setPasswordChange] = useState({
    new_password1: '',
    new_password2: '',
  });

  const handler = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlerPass = (e) => {
    setPasswordChange((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);

  useEffect(() => {
    setUser({
      username: profile?.user.username,
      phone: +profile?.user.phone,
      email: profile?.user.email,
      id: profile?.user.id,
    });
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser(user));
  };

  const handleSubmitPass = (e) => {
    e.preventDefault();

    if (passwordChange.new_password1 === passwordChange.new_password2) {
      dispatch(
        setPassword({
          new_password1: passwordChange.new_password1,
          new_password2: passwordChange.new_password2,
        })
      );
    } else {
      alert('password incorrect');
    }
  };

  return (
    <div>
      <Header />

      <div className={s.profile}>
        <div>
          <form className={s.profile_flex} onSubmit={(e) => handleSubmit(e)}>
            <div className={s.profile_info}>
              <div className={s.image_block}>
                <label className={s.label}>
                  Upload image
                  <input
                    type='file'
                    className={s.inp}
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <div className={s.imageBlock}>
                    {picture && (
                      <div>
                        <img
                          className={s.imageBlock_img}
                          src={URL.createObjectURL(picture)}
                          alt='pic'
                        />
                      </div>
                    )}
                  </div>
                </label>
                {picture && (
                  <button onClick={() => setImage()} className={s.clear}>
                    X
                  </button>
                )}
              </div>
              <TextField
                value={user.username}
                label='username'
                name='username'
                onChange={(e) => handler(e)}
              />
            </div>

            <div className={s.profile_contacts}>
              <div className={s.fields}>
                <TextField
                  value={user.email}
                  label='email'
                  name='email'
                  onChange={(e) => handler(e)}
                />

                <TextField
                  value={user.phone}
                  type='number'
                  label='phone'
                  name='phone'
                  onChange={(e) => handler(e)}
                />
              </div>
              <button className={s.profile_btn}>Редактировать</button>
            </div>
          </form>
        </div>
        <div className={s.accordion_block}>
          <Accordion>
            <AccordionSummary
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Change password</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form onSubmit={(e) => handleSubmitPass(e)} className={s.form}>
                <TextField
                  value={passwordChange.new_password1}
                  label='new password'
                  name='new_password1'
                  fullWidth
                  onChange={(e) => handlerPass(e)}
                />
                <TextField
                  value={passwordChange.new_password2}
                  label='new password'
                  name='new_password2'
                  fullWidth
                  onChange={(e) => handlerPass(e)}
                />

                <Button
                  fullWidth
                  type='submit'
                  sx={{ marginTop: '20px' }}
                  variant='outlined'
                  className={s.button_pass}
                >
                  Submit
                </Button>
              </form>
              <div>
                {errorpass.new_password2?.map((item) => item) ||
                  errorpass.new_password1?.map((item) => item)}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Profile;
