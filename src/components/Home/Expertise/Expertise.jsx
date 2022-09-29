import React from 'react';
import ContentHeadTitle from '../../components/ContentHeadTitlte/ContentHeadTitle';
import classes from './Expertise.module.scss';

function Expertise() {
  //   const COUNTERS = [
  //     { val: 69, time: 80 },
  //     { val: 187, time: 65 },
  //     { val: 666, time: 10 },
  //   ];
  //   const [currVal, setCurrVal] = React.useState(0);

  //   React.useEffect(() => {
  //     currVal !== COUNTERS.val &&
  //       setTimeout(setCurrVal, COUNTERS.time, currVal + 1);
  //   }, [currVal]);
  return (
    <div id={'expertise'} className='container'>
      <div className={classes.heading}>
        <ContentHeadTitle title='EXPERTISE' centered />
      </div>
      <div className={classes.card_section}>
        <div className={classes.first_card}>
          <svg
            className={classes.python_icon}
            width='70'
            height='70'
            viewBox='0 0 70 70'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M34.664 0.273438C16.9365 0.273439 18.0435 7.96119 18.0435 7.96119L18.0632 15.9256H34.9802V18.3169H11.3439C11.3439 18.3169 0 17.0304 0 34.9177C-1.26438e-06 52.805 9.90119 52.1707 9.90119 52.1707H15.8103V43.8703C15.8103 43.8703 15.4918 33.9691 25.5534 33.9691H42.332C42.332 33.9691 51.7589 34.1215 51.7589 24.8584V9.54221C51.7589 9.54221 53.1902 0.273438 34.664 0.273438ZM25.336 5.62917C27.0191 5.62917 28.3794 6.98953 28.3794 8.67265C28.3794 10.3558 27.0191 11.7161 25.336 11.7161C23.6529 11.7161 22.2925 10.3558 22.2925 8.67265C22.2925 6.98953 23.6529 5.62917 25.336 5.62917Z'
              fill='url(#paint0_linear_761_120)'
            />
            <path
              d='M35.1676 69.7413C52.8951 69.7413 51.7881 62.0536 51.7881 62.0536L51.7683 54.0891H34.8513V51.6978H58.4877C58.4877 51.6978 69.8316 52.9843 69.8316 35.0971C69.8316 17.2098 59.9304 17.8441 59.9304 17.8441H54.0213V26.1445C54.0213 26.1445 54.3398 36.0457 44.2782 36.0457H27.4996C27.4996 36.0457 18.0727 35.8933 18.0727 45.1563V60.4725C18.0727 60.4725 16.6414 69.7413 35.1676 69.7413ZM44.4956 64.3856C42.8125 64.3856 41.4521 63.0252 41.4521 61.3421C41.4521 59.659 42.8125 58.2986 44.4956 58.2986C46.1787 58.2986 47.5391 59.659 47.5391 61.3421C47.5391 63.0252 46.1787 64.3856 44.4956 64.3856Z'
              fill='url(#paint1_linear_761_120)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_761_120'
                x1='6.71094'
                y1='6.52189'
                x2='41.3169'
                y2='40.7826'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#387EB8' />
                <stop offset='1' stop-color='#366994' />
              </linearGradient>
              <linearGradient
                id='paint1_linear_761_120'
                x1='27.9522'
                y1='28.5219'
                x2='65.1153'
                y2='63.6533'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#FFE052' />
                <stop offset='1' stop-color='#FFC331' />
              </linearGradient>
            </defs>
          </svg>
          <h2>Python Experts</h2>
          <p>
            We’re Python experts and can build complex web, app and data science
            solutions. Python is preferred because it needs less coding, has a
            simple syntax, and is one of the trending languages used by industry
            leaders like Google, Spotify, Instagram and Dropbox.
          </p>
          <a href='#' className={classes.link_find}>
            {' '}
            Find out more{' '}
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.1954 4.47145C9.93503 4.2111 9.93503 3.78899 10.1954 3.52864C10.4557 3.26829 10.8778 3.26829 11.1382 3.52864L15.1382 7.52864C15.3985 7.78899 15.3985 8.2111 15.1382 8.47144L11.1382 12.4714C10.8778 12.7318 10.4557 12.7318 10.1954 12.4714C9.93503 12.2111 9.93503 11.789 10.1954 11.5286L13.0573 8.6667H1.34065C0.968395 8.6667 0.666626 8.36822 0.666626 8.00003C0.666626 7.63184 0.968395 7.33336 1.34065 7.33336H13.0573L10.1954 4.47145Z'
                fill='#18191F'
              />
            </svg>
          </a>
        </div>

        <div className={classes.first_card}>
          <svg
            className={classes.js_icon}
            width='70'
            height='70'
            viewBox='0 0 70 70'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 6C0 2.68629 2.68629 0 6 0H64C67.3137 0 70 2.68629 70 6V64C70 67.3137 67.3137 70 64 70H6C2.68629 70 0 67.3137 0 64V6Z'
              fill='#F7DF1E'
            />
            <path
              d='M18.4056 58.4971L23.7625 55.2552C24.796 57.0875 25.7361 58.6378 27.9911 58.6378C30.1526 58.6378 31.5154 57.7923 31.5154 54.5034V32.1367H38.0936V54.5964C38.0936 61.4097 34.0999 64.5109 28.2731 64.5109C23.0107 64.5109 19.9561 61.7855 18.4055 58.4965'
              fill='black'
            />
            <path
              d='M41.6667 57.7921L47.023 54.6909C48.433 56.9936 50.2655 58.685 53.5075 58.685C56.2332 58.685 57.9713 57.3222 57.9713 55.4427C57.9713 53.1872 56.1859 52.3883 53.1785 51.0731L51.5344 50.3678C46.7883 48.3477 43.64 45.8103 43.64 40.4536C43.64 35.5198 47.399 31.7606 53.2727 31.7606C57.4547 31.7606 60.462 33.2173 62.6232 37.0234L57.5014 40.3124C56.3736 38.2921 55.1523 37.4934 53.2729 37.4934C51.3463 37.4934 50.1245 38.7151 50.1245 40.3124C50.1245 42.286 51.3463 43.085 54.1653 44.3068L55.8097 45.0116C61.4014 47.4081 64.5497 49.8512 64.5497 55.3487C64.5497 61.2696 59.898 64.5114 53.6486 64.5114C47.5402 64.5114 43.5931 61.5983 41.6669 57.7921'
              fill='black'
            />
          </svg>

          <h2>JavaScript</h2>
          <p className={classes.footer_text}>
            Our front-end team has vast experience with JavaScript and libraries
            and frameworks including React, React Native and Vue.js.
          </p>
          <a href='#' className={classes.link_find}>
            {' '}
            Find out more{' '}
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.1954 4.47145C9.93503 4.2111 9.93503 3.78899 10.1954 3.52864C10.4557 3.26829 10.8778 3.26829 11.1382 3.52864L15.1382 7.52864C15.3985 7.78899 15.3985 8.2111 15.1382 8.47144L11.1382 12.4714C10.8778 12.7318 10.4557 12.7318 10.1954 12.4714C9.93503 12.2111 9.93503 11.789 10.1954 11.5286L13.0573 8.6667H1.34065C0.968395 8.6667 0.666626 8.36822 0.666626 8.00003C0.666626 7.63184 0.968395 7.33336 1.34065 7.33336H13.0573L10.1954 4.47145Z'
                fill='#18191F'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
