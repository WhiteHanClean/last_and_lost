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
  const [date, setDate] = useState(dayjs('2014-08-18T21:11:54'));
  const [geo, setGeo] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  const data = {
    date,
    geo,
    location,
    description,
    selectedCategory,
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function gagaTo(obj) {
    if (!geo || !location || !description || !selectedCategory || !date) {
      alert('Enter data');
    } else {
      sendToServer(obj),
        setName(''),
        setEmail(''),
        setYear(''),
        setPhone(''),
        setSelectedValue('');
    }
  }

  return (
    <div className={style.block}>
      <div
        id='contacts'
        className={style.projectBlock}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <div className={style.titleBlock}>
          <h2>Found your lost item</h2>
        </div>
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
              value={selectedCategory}
              label='Age'
              onChange={handleChange}
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
                onChange={handleChange}
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
              label='Add geotag'
              value={geo}
              variant='outlined'
              onChange={(e) => setGeo(e.target.value)}
            />
            <TextField
              autoComplete='off'
              id='Pickup'
              label='Pickup location'
              value={location}
              ariant='outlined'
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className={style.inputBlock_third}>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Description'
              className={style.textArea}
            />
          </div>
          <div className={style.inputBlock_footer}>
            <button className={style.button} onClick={() => gagaTo(data)}>
              Apply
            </button>
          </div>
        </div>
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
