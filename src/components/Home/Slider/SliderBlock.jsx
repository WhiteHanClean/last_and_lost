import React, { useEffect, useState } from 'react';
import style from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ArrowLeft from '../../../assets/svg/Icon-leftArrow.svg';
import ArrowRight from '../../../assets/svg/Icon-rightArrow.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ContentHeadTitle from '../../components/ContentHeadTitlte/ContentHeadTitle';

import axios from 'axios';

const Slider = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    getText1();
  }, []);

  async function getText1() {
    try {
      let res = await axios.get(
        'https://kanatik6.pythonanywhere.com/message/comments/'
      );
      console.log(res);
      setText(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={style.slider_main}>
      <div className='container'>
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
          <ContentHeadTitle title='WHAT OUR DRIVERS SAY' centered />
        </motion.div>
        <motion.div
          className={`sliderWrapper ${style.sliderWrapper}`}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div className={'prev'}>
            <Image src={ArrowLeft} />
          </div>
          <Swiper
            autoHeight={true}
            spaceBetween={20}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className='mySwiper'
          >
            <SwiperSlide className={style.slider}>
              <p>{text[0]?.descriptions}</p>
              <div className={style.hr} />
              <h3>{text[0]?.title}</h3>
              <div className={style.quotes}>
                <svg
                  width='96'
                  height='92'
                  viewBox='0 0 96 92'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g filter='url(#filter0_d_445_225)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M34.995 53.1551C34.4488 52.1103 34.8782 50.8342 35.8773 50.2083C36.9175 49.5565 37.7738 48.8729 38.4463 48.1572C40.2993 46.1851 37.9966 43.8373 36.078 41.9288C36.0029 41.8541 35.929 41.7773 35.8562 41.6985C34.6875 40.4317 34.1031 38.9653 34.1031 37.2993C34.1031 35.5293 34.6703 34.0369 35.8047 32.8221C36.9391 31.6074 38.3656 31 40.0844 31C42.0094 31 43.6766 31.7896 45.0859 33.3688C46.4953 34.9479 47.2 36.8655 47.2 39.1215C47.2 45.3155 44.0617 50.274 37.7849 53.997C36.793 54.5853 35.5292 54.1771 34.995 53.1551ZM49.8327 53.1765C49.2682 52.1244 49.6991 50.8274 50.7124 50.196C51.7593 49.5435 52.6207 48.8591 53.2965 48.1427C55.1474 46.1805 52.8513 43.8557 50.9213 41.9712C50.8311 41.8832 50.7428 41.7923 50.6562 41.6985C49.4875 40.4317 48.9031 38.9653 48.9031 37.2993C48.9031 35.5293 49.4789 34.0369 50.6305 32.8221C51.782 31.6074 53.2172 31 54.9359 31C56.8609 31 58.5195 31.7896 59.9117 33.3688C61.3039 34.9479 62 36.8655 62 39.1215C62 45.317 58.8746 50.2763 52.6237 53.9996C51.6363 54.5877 50.376 54.1893 49.8327 53.1765Z'
                      fill='url(#paint0_linear_445_225)'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_445_225'
                      x='0.103149'
                      y='0'
                      width='95.8969'
                      height='91.2734'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='3' />
                      <feGaussianBlur stdDeviation='17' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.613889 0 0 0 0 0.361111 0 0 0 0 0.866667 0 0 0 0.4 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_445_225'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_445_225'
                        result='shape'
                      />
                    </filter>
                    <linearGradient
                      id='paint0_linear_445_225'
                      x1='42.05'
                      y1='75.1176'
                      x2='18.7057'
                      y2='69.4304'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='red' />
                      <stop offset='1' stop-color='red' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.slider}>
              <p>{text[1]?.descriptions} </p>

              <hr />
              <h3>{text[1]?.title}</h3>

              <div className={style.quotes}>
                <svg
                  width='96'
                  height='92'
                  viewBox='0 0 96 92'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g filter='url(#filter0_d_445_225)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M34.995 53.1551C34.4488 52.1103 34.8782 50.8342 35.8773 50.2083C36.9175 49.5565 37.7738 48.8729 38.4463 48.1572C40.2993 46.1851 37.9966 43.8373 36.078 41.9288C36.0029 41.8541 35.929 41.7773 35.8562 41.6985C34.6875 40.4317 34.1031 38.9653 34.1031 37.2993C34.1031 35.5293 34.6703 34.0369 35.8047 32.8221C36.9391 31.6074 38.3656 31 40.0844 31C42.0094 31 43.6766 31.7896 45.0859 33.3688C46.4953 34.9479 47.2 36.8655 47.2 39.1215C47.2 45.3155 44.0617 50.274 37.7849 53.997C36.793 54.5853 35.5292 54.1771 34.995 53.1551ZM49.8327 53.1765C49.2682 52.1244 49.6991 50.8274 50.7124 50.196C51.7593 49.5435 52.6207 48.8591 53.2965 48.1427C55.1474 46.1805 52.8513 43.8557 50.9213 41.9712C50.8311 41.8832 50.7428 41.7923 50.6562 41.6985C49.4875 40.4317 48.9031 38.9653 48.9031 37.2993C48.9031 35.5293 49.4789 34.0369 50.6305 32.8221C51.782 31.6074 53.2172 31 54.9359 31C56.8609 31 58.5195 31.7896 59.9117 33.3688C61.3039 34.9479 62 36.8655 62 39.1215C62 45.317 58.8746 50.2763 52.6237 53.9996C51.6363 54.5877 50.376 54.1893 49.8327 53.1765Z'
                      fill='url(#paint0_linear_445_225)'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_445_225'
                      x='0.103149'
                      y='0'
                      width='95.8969'
                      height='91.2734'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='3' />
                      <feGaussianBlur stdDeviation='17' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.613889 0 0 0 0 0.361111 0 0 0 0 0.866667 0 0 0 0.4 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_445_225'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_445_225'
                        result='shape'
                      />
                    </filter>
                    <linearGradient
                      id='paint0_linear_445_225'
                      x1='42.05'
                      y1='75.1176'
                      x2='18.7057'
                      y2='69.4304'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#9290F5' />
                      <stop offset='1' stop-color='#3736BE' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.slider}>
              <p>{text[2]?.descriptions} </p>
              <hr />
              <h3>{text[2]?.title} </h3>

              <div className={style.quotes}>
                <svg
                  width='96'
                  height='92'
                  viewBox='0 0 96 92'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g filter='url(#filter0_d_445_225)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M34.995 53.1551C34.4488 52.1103 34.8782 50.8342 35.8773 50.2083C36.9175 49.5565 37.7738 48.8729 38.4463 48.1572C40.2993 46.1851 37.9966 43.8373 36.078 41.9288C36.0029 41.8541 35.929 41.7773 35.8562 41.6985C34.6875 40.4317 34.1031 38.9653 34.1031 37.2993C34.1031 35.5293 34.6703 34.0369 35.8047 32.8221C36.9391 31.6074 38.3656 31 40.0844 31C42.0094 31 43.6766 31.7896 45.0859 33.3688C46.4953 34.9479 47.2 36.8655 47.2 39.1215C47.2 45.3155 44.0617 50.274 37.7849 53.997C36.793 54.5853 35.5292 54.1771 34.995 53.1551ZM49.8327 53.1765C49.2682 52.1244 49.6991 50.8274 50.7124 50.196C51.7593 49.5435 52.6207 48.8591 53.2965 48.1427C55.1474 46.1805 52.8513 43.8557 50.9213 41.9712C50.8311 41.8832 50.7428 41.7923 50.6562 41.6985C49.4875 40.4317 48.9031 38.9653 48.9031 37.2993C48.9031 35.5293 49.4789 34.0369 50.6305 32.8221C51.782 31.6074 53.2172 31 54.9359 31C56.8609 31 58.5195 31.7896 59.9117 33.3688C61.3039 34.9479 62 36.8655 62 39.1215C62 45.317 58.8746 50.2763 52.6237 53.9996C51.6363 54.5877 50.376 54.1893 49.8327 53.1765Z'
                      fill='url(#paint0_linear_445_225)'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_445_225'
                      x='0.103149'
                      y='0'
                      width='95.8969'
                      height='91.2734'
                      filterUnits='userSpaceOnUse'
                      color-interpolation-filters='sRGB'
                    >
                      <feFlood flood-opacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='3' />
                      <feGaussianBlur stdDeviation='17' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0.613889 0 0 0 0 0.361111 0 0 0 0 0.866667 0 0 0 0.4 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_445_225'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_445_225'
                        result='shape'
                      />
                    </filter>
                    <linearGradient
                      id='paint0_linear_445_225'
                      x1='42.05'
                      y1='75.1176'
                      x2='18.7057'
                      y2='69.4304'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#9290F5' />
                      <stop offset='1' stop-color='#3736BE' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={'next'}>
            <Image src={ArrowRight} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
