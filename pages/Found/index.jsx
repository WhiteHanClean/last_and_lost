import React, { useState } from 'react';
import style from './found.module.scss';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import DottedSqIcon from '../../src/assets/svg/Icon-dottedSQ.svg';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Image from 'next/image';
import dayjs from 'dayjs';

const Found = () => {
  const [image, setImage] = useState();
  const [date, setDate] = useState(dayjs());
  const [foundFields, setFoundFields] = useState({
    geo: '',
    location: '',
    description: '',
    selectedCategory: '',
  });

  const handleChangeFields = (event) => {
    setFoundFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...foundFields,
      image,
      date,
    });

    setFoundFields({
      geo: '',
      location: '',
      description: '',
      selectedCategory: '',
    });
    setDate(dayjs());
    setImage('');
  };

  return (
    <div className={style.block}>
      <div id='contacts' className={style.projectBlock}>
        <div className={style.titleBlock}>
          <h2>Find your lost item</h2>
        </div>
        <div className={style.imageBlock}>
          {image && (
            <img
              className={style.imageBlock_img}
              src={URL.createObjectURL(image)}
              alt='pic'
            />
          )}
        </div>
        <form onSubmit={handleSubmit}>
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
            <div className={style.inputBlock_first}>
              <Select
                defaultValue={'select Category'}
                sx={{ width: 285 }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='selectedCategory'
                value={foundFields.selectedCategory}
                label='Age'
                onChange={(e) => handleChangeFields(e)}
              >
                <MenuItem value={0}>Select category</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
                id='geo'
                name='geo'
                label='Add geotag'
                value={foundFields.geo}
                required
                variant='outlined'
                onChange={(e) => handleChangeFields(e)}
              />
              <TextField
                autoComplete='off'
                id='Pickup'
                name='location'
                required
                label='Pickup location'
                value={foundFields.location}
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
