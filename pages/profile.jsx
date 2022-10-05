import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../src/components/Header/Header';
import { getUser, updateUser } from '../src/store/authSlice';
import s from '../src/style/profile.module.scss';

const Profile = () => {
  const dispatch = useDispatch();
  const { id, user: profile } = useSelector((state) => state.auth);

  const [picture, setImage] = useState();
  const [user, setUser] = useState({
    name: 'Default name',
    number: 'Default phone',
    email: 'Default email',
    id: 'Default id',
  });

  const handler = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(getUser(id));
    setUser({
      name: profile?.username,
      number: profile?.phone,
      email: profile?.email,
      id: profile?.id,
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('username', user.name);
    data.append('email', user.email);
    data.append('phone', user.phone);
    data.append('picture', picture);
    dispatch(updateUser(data));
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
              <h2>{user.name}</h2>
            </div>

            <div className={s.profile_contacts}>
              <div className={s.fields}>
                <TextField
                  placeholder='email'
                  value={user.email}
                  name='email'
                  onChange={(e) => handler(e)}
                />

                <TextField
                  placeholder='number'
                  value={user.number}
                  name='number'
                  onChange={(e) => handler(e)}
                />
              </div>
              <button className={s.profile_btn}>Редактировать</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
