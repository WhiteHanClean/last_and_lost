import React, { useEffect, useState } from 'react';

import { Button, Link, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import DottedSqIcon from '../../src/assets/svg/Icon-dottedSQ.svg';
import style from './found.module.scss';
import Image from 'next/image';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getCotegories } from '../../src/store/foundSlice';

const Found = () => {
  const dispatch = useDispatch();
  const [picture, setImage] = useState();
  const [categoryConfig, setCategoryConfig] = useState([
    { id: 4, title: 'Выберите категорию' },
    { id: 1, title: 'Электроника' },
    { id: 2, title: 'Документы' },
    { id: 3, title: 'Прочее' },
  ]);
  const { categories } = useSelector((state) => state.found);
  const [date, setDate] = useState(dayjs());
  const [category, setCategory] = useState(4);
  const [foundFields, setFoundFields] = useState({
    title: '',
    geotag: '',
    pickup_location: '',
    description: '',
  });
  console.log(categories);
  const handleChangeFields = (event) => {
    setFoundFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSetCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', foundFields.title);
    data.append('category', category);
    data.append('picture', picture);
    data.append('geotag', foundFields.geotag);
    data.append('description', foundFields.description);
    data.append('pickup_location', foundFields.pickup_location);

    dispatch(createPost(data));
    setFoundFields({
      title: '',
      geotag: '',
      pickup_location: '',
      description: '',
    });
    setDate(dayjs());
    setImage();
  };

  useEffect(() => {
    dispatch(getCotegories());
  }, []);

  useEffect(() => {
    setCategoryConfig(categories);
  }, [categories]);

  return (
    <div className={style.block}>
      <div id='contacts' className={style.projectBlock}>
        <div>
          <Link href='/'>
            <Button className={style.breadcrumbs} variant='contained'>
              Back
            </Button>
          </Link>
        </div>
        <div className={style.titleBlock}>
          <h2>Find your lost item</h2>
        </div>
        <div className={style.imageBlock}>
          {picture && (
            <img
              className={style.imageBlock_img}
              src={URL.createObjectURL(picture)}
              alt='pic'
            />
          )}
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={style.image_block}>
            <label className={style.label}>
              click here to attach the image
              <input
                type='file'
                className={style.inp}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
          <div className={style.inputBlock}>
            <div className={style.zerolvl}>
              <TextField
                autoComplete='off'
                id='title'
                name='title'
                label='Add title'
                value={foundFields.title}
                required
                variant='outlined'
                onChange={(e) => handleChangeFields(e)}
              />
            </div>
            <div className={style.inputBlock_first}>
              <Select
                sx={{ width: 285 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={category}
                onChange={(e) => handleSetCategory(e)}
              >
                {categoryConfig.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label='Date found'
                  inputFormat='MM/DD/YYYY'
                  value={date}
                  onChange={(event) => setDate(event)}
                  renderInput={(params) => (
                    <TextField sx={{ width: 285 }} {...params} />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className={style.inputBlock_second}>
              <TextField
                autoComplete='off'
                id='geotag'
                name='geotag'
                label='Add geotag'
                value={foundFields.geotag}
                required
                variant='outlined'
                onChange={(e) => handleChangeFields(e)}
              />
              <TextField
                autoComplete='off'
                id='Pickup'
                name='pickup_location'
                required
                label='Pickup location'
                value={foundFields.pickup_location}
                ariant='outlined'
                onChange={(e) => handleChangeFields(e)}
              />
            </div>
            <div className={style.inputBlock_third}>
              <textarea
                value={foundFields.description}
                name='description'
                onChange={(e) => handleChangeFields(e)}
                placeholder='Description'
                className={style.textArea}
              />
            </div>
            <div className={style.inputBlock_footer}>
              <button type='submit' className={style.button}>
                Apply
              </button>
            </div>
          </div>
        </form>
        <div className={style.rightDotted}>
          <Image src={DottedSqIcon} />
        </div>
        <div className={style.leftDotted}>
          <Image src={DottedSqIcon} />
        </div>
      </div>
    </div>
  );
};

export default Found;
