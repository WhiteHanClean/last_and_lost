import React, { useEffect, useState } from 'react';
import style from './About.module.scss';
import BoltIcon from '../../../assets/svg/Icon-bolt.svg';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import ContentHeadTitle from '../../components/ContentHeadTitlte/ContentHeadTitle';
import truck1 from '../../../assets/new/slider1.jpg';
import truck2 from '../../../assets/new/slider2.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { motion } from 'framer-motion';

const About = () => {
  const [open, setOpen] = useState(false);
  const isLaptop = useMediaQuery({ query: '(max-width: 992px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  useEffect(() => {
    getText1();
  }, []);
  async function getText1() {
    try {
      let res = await axios.get(
        'https://kanatik6.pythonanywhere.com/message/about_us/'
      );
      setText(res.data[0]);
    } catch (e) {
      console.log(e);
    }
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  const animate = open
    ? {
        position: 'fixed',
        width: isMobile ? '95%' : '80vw',
        height: '70vh',
        clipPath: 'none',
        padding: '40px 5px',
      }
    : {
        position: 'absolute',
        height: `${isMobile ? '348px' : isLaptop ? '552px' : '512px'}`,
        width: `${isMobile ? '320px' : isLaptop ? '508px' : '470px'}`,
        clipPath: 'polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%)',
      };

  const animateShadow = open
    ? {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        borderRadius: '0%',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 13,
      }
    : {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: 'transparent',
      };

  return (
    <div className={style.main}>
      <div id={'about'} className='container'>
        <div className={style.block}>
          <div className={style.firstBlock}>
            <motion.div
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={style.heading}
            >
              <ContentHeadTitle title={'ABOUT US'} />
            </motion.div>
            <div className={style.content}>
              <motion.h4
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                Мы поможем найти тебе потерянное!
              </motion.h4>
              <motion.div
                className={style.contentBlock}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <Image src={BoltIcon} />
                <p>Приложение было создано для города Бишкек, добрые люди что нашли чью то вещь по частую не знают как найти владельца и на данном этапе тут можно будет размещать найденную вещь</p>
              </motion.div>
              <motion.div
                className={style.contentBlock}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <Image src={BoltIcon} />
                <p>Публикуй за несколько кликов потеряшку или ищи потерянную вещь в поиске, категориях на наших страницах совершенно бесплатно!</p>
              </motion.div>
            </div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
              className={style.buttons}
            >
              <a href='/#contacts'>
                <button>Начать искать!</button>
              </a>
            </motion.div>
          </div>

          <div animate={animateShadow} className={style.shadow} />
          <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5 }}
            variants={{
              visible: { scale: 1 },
              hidden: { scale: 0 },
            }}
          >
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className={style.slider}
            >
              <Carousel.Item>
                <Image src={truck1} width={900} height={600} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={truck2} width={900} height={600} />
              </Carousel.Item>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
