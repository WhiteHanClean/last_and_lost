import React, { useEffect, useState } from 'react';
import style from './solutions.module.scss';
import DottedSqIcon from '../../../assets/svg/Icon-dottedSQ.svg';
import Image from 'next/image';
import ContentHeadTitle from '../../components/ContentHeadTitlte/ContentHeadTitle';
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

import 'react-toastify/dist/ReactToastify.css';
const Solutions = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const data = {
    name: name,
    email: email,
    experience: year,
    number: phone,
    role: selectedValue,
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function gagaTo(obj) {
    if (!name || !email || !year || !phone || !selectedValue) {
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

  async function sendToServer(obj) {
    console.log(obj);
    let sheets = axios.post(
      'https://sheet.best/api/sheets/3e516e15-23a9-44de-a127-c74fc0bf5227',
      obj
    );
    try {
      await axios.post(
        'https://kanatik6.pythonanywhere.com/message/messages/',
        obj
      );
      toast.success('Your data has been successfully sent for processing');
    } catch (e) {
      console.log(e);
      toast.error('An unexpected error has occurred');
    }
  }

  const [text, setText] = useState('');
  useEffect(() => {
    getText1();
  }, []);
  async function getText1() {
    try {
      let res = await axios.get(
        'https://kanatik6.pythonanywhere.com/message/quick_project_start/'
      );
      setText(res.data);
      console.log('123');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div id={'solutions'} className='container'>
      <div className={style.solutions}>
        <motion.div
          className={style.heading}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <ContentHeadTitle title={'Процесс возврата'} centered />
        </motion.div>
        <motion.div
          className={style.blocks}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className={style.block}>
            <div className={style.svgs}>
              <div className={style.svgs_img}>
                <svg
                  width='62'
                  height='67'
                  viewBox='0 0 62 67'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.4'
                    d='M32.494 2.0113L59.4941 17.5182C60.4256 18.0532 61 19.0455 61 20.1197V47.3509C61 48.4251 60.4256 49.4173 59.4941 49.9523L32.494 65.4593C31.5688 65.9907 30.431 65.9907 29.5058 65.4593L2.50588 49.9522C1.57437 49.4172 1 48.425 1 47.3507V20.1196C1 19.0453 1.57437 18.0531 2.5059 17.5181L29.5058 2.0113C30.431 1.47993 31.5688 1.47993 32.494 2.0113Z'
                    fill='white'
                    stroke='red'
                    strokeWidth='2'
                  />
                  <path
                    d='M31 46.4962C27.9663 46.4962 25.0143 46.2537 22.1729 45.9301C20.5315 45.7432 19.1598 44.5438 18.8933 42.9134C18.6244 41.2688 18.5 39.5672 18.5 37.2161C18.5 34.8651 18.6244 33.1636 18.8933 31.519C19.1598 29.8886 20.5315 28.6893 22.1729 28.5023C25.0143 28.1787 27.9663 27.9362 31 27.9362C34.0337 27.9362 36.9857 28.1787 39.8271 28.5023C41.4685 28.6893 42.8402 29.8886 43.1067 31.519C43.3756 33.1636 43.5 34.8651 43.5 37.2161C43.5 39.5672 43.3756 41.2688 43.1067 42.9134C42.8402 44.5438 41.4685 45.7432 39.8271 45.9301C36.9857 46.2537 34.0337 46.4962 31 46.4962Z'
                    fill='#FFE0D7'
                  />
                  <path
                    d='M22.1729 28.502C20.5315 28.6889 19.1598 29.8882 18.8933 31.5187C18.6244 33.1632 18.5 34.8647 18.5 37.2158C18.5 39.5668 18.6244 41.2684 18.8933 42.913C19.1598 44.5435 20.5315 45.7428 22.1729 45.9298C25.0143 46.2534 27.9663 46.4958 31 46.4958C34.0337 46.4958 36.9857 46.2534 39.8271 45.9298C41.4685 45.7428 42.8402 44.5435 43.1067 42.913C43.3756 41.2684 43.5 39.5668 43.5 37.2158C43.5 34.8647 43.3756 33.1632 43.1067 31.5187C42.8402 29.8882 41.4685 28.6889 39.8271 28.502'
                    stroke='red'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19.5739 29.9355L28.5201 37.0269C29.9735 38.1789 32.0281 38.1808 33.4836 37.0316L42.4444 29.9564'
                    stroke='red'
                    strokeWidth='3'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M26.3862 25.3765C28.0766 27.4396 29.1073 28.4706 31.0886 30.0789C33.0699 28.4705 34.1006 27.4396 35.791 25.3765'
                    stroke='red'
                    strokeWidth='3.42116'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M31.071 30.0528L31.071 21.4999'
                    stroke='red'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div className={style.lineIndicator} />
            </div>
            <div className={style.block_texts}>
              <h3>Связь</h3>
              <p>Telegram</p>
              <p>WhatsApp</p>
              <p>Telephon</p>
            </div>
          </div>
          <div className={style.block}>
            <div className={style.svgs}>
              <div className={style.svgs_img}>
                <svg
                  width='62'
                  height='67'
                  viewBox='0 0 62 67'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.4'
                    d='M32.494 2.0113L59.4941 17.5182C60.4256 18.0532 61 19.0455 61 20.1197V47.3509C61 48.4251 60.4256 49.4173 59.4941 49.9523L32.494 65.4593C31.5688 65.9907 30.431 65.9907 29.5058 65.4593L2.50588 49.9522C1.57437 49.4172 1 48.425 1 47.3507V20.1196C1 19.0453 1.57437 18.0531 2.5059 17.5181L29.5058 2.0113C30.431 1.47993 31.5688 1.47993 32.494 2.0113Z'
                    fill='white'
                    stroke='red'
                    strokeWidth='2'
                  />
                  <path
                    d='M31 46.5C37.9036 46.5 43.5 40.9036 43.5 34C43.5 27.0964 37.9036 21.5 31 21.5C24.0964 21.5 18.5 27.0964 18.5 34C18.5 40.9036 24.0964 46.5 31 46.5Z'
                    fill='#FFE0D7'
                    stroke='red'
                    strokeWidth='2.74988'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M41.6014 40.6259C42.8045 38.705 43.5 36.4337 43.5 34C43.5 27.0964 37.9036 21.5 31 21.5V34L41.6014 40.6259Z'
                    fill='white'
                    stroke='red'
                    strokeWidth='2.85988'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div className={style.lineIndicator} />
            </div>
            <div className={style.block_texts}>
              <h3>Контакты</h3>
              <p>Хранятся в описании</p>
              <p>в описании потеряннго</p>
            </div>
          </div>
          <div className={style.block}>
            <div className={style.svgs}>
              <div className={style.svgs_img}>
                <svg
                  width='62'
                  height='67'
                  viewBox='0 0 62 67'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.4'
                    d='M32.494 2.0113L59.4941 17.5182C60.4256 18.0532 61 19.0455 61 20.1197V47.3509C61 48.4251 60.4256 49.4173 59.4941 49.9523L32.494 65.4593C31.5688 65.9907 30.431 65.9907 29.5058 65.4593L2.50588 49.9522C1.57437 49.4172 1 48.425 1 47.3507V20.1196C1 19.0453 1.57437 18.0531 2.5059 17.5181L29.5058 2.0113C30.431 1.47993 31.5688 1.47993 32.494 2.0113Z'
                    fill='white'
                    stroke='red'
                    strokeWidth='2'
                  />
                  <path
                    d='M41.7476 42.1677C41.913 39.5313 42 36.7994 42 34C42 32.8662 41.9857 31.7435 41.9578 30.6338C41.9381 29.8541 41.6853 29.0965 41.2238 28.4678C39.4649 26.0716 38.0635 24.5818 35.7542 22.7995C35.1196 22.3097 34.3408 22.044 33.5394 22.0265C32.7357 22.0089 31.8965 22 31 22C28.2861 22 26.0969 22.0817 23.8314 22.2375C21.9041 22.37 20.3735 23.9043 20.2524 25.8323C20.087 28.4687 20 31.2006 20 34C20 36.7994 20.087 39.5313 20.2524 42.1677C20.3735 44.0957 21.9041 45.63 23.8314 45.7625C26.0969 45.9183 28.2861 46 31 46C33.7139 46 35.9031 45.9183 38.1686 45.7625C40.0959 45.63 41.6265 44.0957 41.7476 42.1677Z'
                    fill='#FFE0D7'
                    stroke='red'
                  />
                  <path
                    d='M41.7476 42.1677L43.2446 42.2616L43.2446 42.2616L41.7476 42.1677ZM23.8314 22.2375L23.7285 20.741L23.8314 22.2375ZM20.2524 25.8323L18.7554 25.7384L20.2524 25.8323ZM20.2524 42.1677L21.7495 42.0737L20.2524 42.1677ZM23.8314 45.7625L23.7285 47.259H23.7285L23.8314 45.7625ZM38.1686 45.7625L38.2715 47.259H38.2715L38.1686 45.7625ZM33.5394 22.0265L33.5721 20.5268H33.5721L33.5394 22.0265ZM41.9578 30.6338L43.4573 30.596V30.596L41.9578 30.6338ZM35.7542 22.7995L34.8377 23.987L34.8377 23.987L35.7542 22.7995ZM41.2238 28.4678L42.433 27.5802L42.433 27.5802L41.2238 28.4678ZM40.5 34C40.5 36.7685 40.414 39.4691 40.2505 42.0737L43.2446 42.2616C43.4121 39.5936 43.5 36.8303 43.5 34H40.5ZM23.9343 23.734C26.1651 23.5806 28.32 23.5 31 23.5V20.5C28.2522 20.5 26.0287 20.5829 23.7285 20.741L23.9343 23.734ZM21.5 34C21.5 31.2315 21.586 28.5309 21.7495 25.9263L18.7554 25.7384C18.5879 28.4064 18.5 31.1697 18.5 34H21.5ZM21.7495 42.0737C21.586 39.4691 21.5 36.7685 21.5 34H18.5C18.5 36.8303 18.5879 39.5936 18.7554 42.2616L21.7495 42.0737ZM31 44.5C28.32 44.5 26.1651 44.4194 23.9343 44.266L23.7285 47.259C26.0287 47.4171 28.2522 47.5 31 47.5V44.5ZM38.0657 44.266C35.8349 44.4194 33.68 44.5 31 44.5V47.5C33.7478 47.5 35.9713 47.4171 38.2715 47.259L38.0657 44.266ZM31 23.5C31.8865 23.5 32.7148 23.5088 33.5066 23.5261L33.5721 20.5268C32.7567 20.509 31.9065 20.5 31 20.5V23.5ZM40.4582 30.6716C40.4859 31.7687 40.5 32.8788 40.5 34H43.5C43.5 32.8537 43.4856 31.7184 43.4573 30.596L40.4582 30.6716ZM34.8377 23.987C37.0229 25.6735 38.3284 27.0582 40.0146 29.3554L42.433 27.5802C40.6014 25.0849 39.1042 23.4902 36.6707 21.6121L34.8377 23.987ZM33.5066 23.5261C33.9995 23.5369 34.466 23.7001 34.8377 23.987L36.6707 21.6121C35.7732 20.9194 34.6821 20.5511 33.5721 20.5268L33.5066 23.5261ZM18.7554 42.2616C18.9237 44.9436 21.0534 47.075 23.7285 47.259L23.9343 44.266C22.7549 44.1849 21.8232 43.2479 21.7495 42.0737L18.7554 42.2616ZM43.4573 30.596C43.4301 29.5178 43.0803 28.462 42.433 27.5802L40.0146 29.3554C40.2903 29.7309 40.4461 30.1904 40.4582 30.6716L43.4573 30.596ZM23.7285 20.741C21.0534 20.925 18.9237 23.0564 18.7554 25.7384L21.7495 25.9263C21.8232 24.7521 22.7549 23.8151 23.9343 23.734L23.7285 20.741ZM40.2505 42.0737C40.1768 43.2479 39.2451 44.1849 38.0657 44.266L38.2715 47.259C40.9466 47.075 43.0763 44.9436 43.2446 42.2616L40.2505 42.0737Z'
                    fill='red'
                    stroke='red'
                  />
                  <path
                    d='M27.1875 32.5312C26.3591 32.5312 25.6875 33.2028 25.6875 34.0312C25.6875 34.8597 26.3591 35.5312 27.1875 35.5312V32.5312ZM34.8125 35.5312C35.6409 35.5312 36.3125 34.8597 36.3125 34.0312C36.3125 33.2028 35.6409 32.5312 34.8125 32.5312V35.5312ZM27.1875 35.5312H34.8125V32.5312H27.1875V35.5312Z'
                    fill='red'
                    stroke='red'
                  />
                  <path
                    d='M27.1875 38.3437C26.3591 38.3437 25.6875 39.0153 25.6875 39.8437C25.6875 40.6721 26.3591 41.3437 27.1875 41.3437V38.3437ZM34.7888 41.3437C35.6172 41.3437 36.2888 40.6721 36.2888 39.8437C36.2888 39.0153 35.6172 38.3437 34.7888 38.3437V41.3437ZM27.1875 26.5C26.3591 26.5 25.6875 27.1716 25.6875 28C25.6875 28.8284 26.3591 29.5 27.1875 29.5V26.5ZM31.7888 29.5C32.6172 29.5 33.2888 28.8284 33.2888 28C33.2888 27.1716 32.6172 26.5 31.7888 26.5V29.5ZM27.1875 41.3437H34.7888V38.3437H27.1875V41.3437ZM27.1875 29.5H31.7888V26.5H27.1875V29.5Z'
                    fill='#FFE0D7'
                    stroke='red'
                  />
                </svg>
              </div>
              <div className={style.lineIndicator} />
            </div>
            <div className={style.block_texts}>
              <h3>Договор</h3>
              <p>Попробуйте связаться</p>
              <p>и поговорить о возврате</p>

            </div>
          </div>
          <div className={style.block}>
            <div className={style.svgs}>
              <div className={style.svgs_img}>
                <svg
                  width='62'
                  height='67'
                  viewBox='0 0 62 67'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.4'
                    d='M32.494 2.0113L59.4941 17.5182C60.4256 18.0532 61 19.0455 61 20.1197V47.3509C61 48.4251 60.4256 49.4173 59.4941 49.9523L32.494 65.4593C31.5688 65.9907 30.431 65.9907 29.5058 65.4593L2.50588 49.9522C1.57437 49.4172 1 48.425 1 47.3507V20.1196C1 19.0453 1.57437 18.0531 2.5059 17.5181L29.5058 2.0113C30.431 1.47993 31.5688 1.47993 32.494 2.0113Z'
                    fill='white'
                    stroke='red'
                    strokeWidth='2'
                  />
                  <path
                    d='M22.1611 25.1611L22.8977 25.8977'
                    stroke='red'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M31 21.5L31 22.5417'
                    stroke='red'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M43.5 34L42.4583 34'
                    stroke='red'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19.5416 34L18.5 34'
                    stroke='red'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M39.8389 25.1611L39.1023 25.8977'
                    stroke='red'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M37.6944 34.4596C37.7027 33.2646 37.3909 32.0892 36.7915 31.0554C36.1921 30.0216 35.3269 29.1671 34.2858 28.5806C33.2446 27.9941 32.0655 27.6969 30.8707 27.72C29.6759 27.7431 28.5091 28.0855 27.4914 28.7118C26.4737 29.3381 25.6421 30.2254 25.0831 31.2816C24.5241 32.3378 24.258 33.5243 24.3124 34.7181C24.3668 35.9118 24.7397 37.0693 25.3925 38.0702C26.5581 39.8576 27.2482 40.5147 27.2482 42.6418C27.2482 42.8391 27.3266 43.0283 27.4661 43.1678C27.6056 43.3073 27.7948 43.3857 27.9921 43.3857H34.0076C34.2049 43.3857 34.3941 43.3073 34.5336 43.1678C34.6731 43.0283 34.7514 42.8391 34.7514 42.6418C34.7514 40.4634 35.5235 39.8168 36.6814 37.964C37.3384 36.9128 37.6892 35.6992 37.6944 34.4596Z'
                    fill='#FFE0D7'
                    stroke='red'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M28.3271 43.3857H33.6728V45.3272C33.6728 46.8033 32.4761 48 31 48C29.5238 48 28.3271 46.8033 28.3271 45.3272V43.3857Z'
                    fill='red'
                    stroke='red'
                  />
                </svg>
              </div>
            </div>
            <div className={style.block_texts}>
              <h3>Психология</h3>
              <p>Не забываем быть вежливыми!</p>
            </div>
          </div>
        </motion.div>
        <motion.div
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
            <h2>Apply now</h2>
            <p>Let’s contact with us!</p>
          </div>
          <div className={style.inputBlock}>
            <div className={style.inputBlock_first}>
              <TextField
                autoComplete='off'
                id='Name'
                label='Name'
                value={name}
                variant='outlined'
                onChange={(e) => setName(e.target.value)}
                className={style.io}
              />
              <TextField
                autoComplete='off'
                id='Email'
                label='Email'
                value={email}
                variant='outlined'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={style.inputBlock_second}>
              <TextField
                autoComplete='off'
                id='Years'
                label='Years of Experience'
                value={year}
                type='number'
                variant='outlined'
                onChange={(e) => setYear(e.target.value)}
                className={style.io}
              />
              <TextField
                autoComplete='off'
                id='Phone number'
                label='Phone number'
                value={phone}
                ariant='outlined'
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <h5>Position</h5>
            <div className={style.inputBlock_footer}>
              <div className={style.radio}>
                <label htmlFor='radio-buttons'>Owner Operator</label>
                <Radio
                  checked={selectedValue === 'Owner Operator'}
                  onChange={handleChange}
                  value='Owner Operator'
                  name='radio-buttons'
                  inputProps={{ 'aria-label': 'A' }}
                />
                <label htmlFor='radio-buttons' className={style.driver}>
                  Driver
                </label>
                <Radio
                  checked={selectedValue === 'Driver'}
                  onChange={handleChange}
                  value='Driver'
                  name='radio-buttons'
                  inputProps={{ 'aria-label': 'B' }}
                />
              </div>
              <button onClick={() => gagaTo(data)}>Apply</button>
            </div>
          </div>
          <div className={style.rightDotted}>
            <Image src={DottedSqIcon} />
          </div>
          <div className={style.leftDotted}>
            <Image src={DottedSqIcon} />
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Solutions;
