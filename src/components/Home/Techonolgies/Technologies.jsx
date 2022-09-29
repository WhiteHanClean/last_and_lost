import React from 'react';
import style from './Technologies.module.scss';
import { technologies } from './constants';
import HashtagIcon from '../../../assets/svg/Icon-Hashtag.svg';
import Image from 'next/image';
import Stacks from './Stacks';

const Technologies = () => {
  // const TIcon = technologies[5].icon;
  return (
    <div className={style.technologies}>
      <div className={style.heading}>
        <Image src={HashtagIcon} />
        <Image src={technologies[5].icon} />
        <h2>Modern Technologies</h2>
      </div>
      <div className={style.animationWrapper}>
        <Stacks />
        <div className={style.bgVectorWrapper}>
          <svg
            width='588'
            height='640'
            viewBox='0 0 588 640'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.98264 162.194L6.98291 162.194L287.619 2.19406C291.581 -0.0646866 296.418 -0.0646866 300.38 2.19405L581.016 162.194L581.263 161.76L581.016 162.194C585.029 164.479 587.499 168.739 587.5 173.333V466.667C587.5 471.262 585.031 475.522 581.017 477.807L581.265 478.241L581.017 477.807L300.381 637.807C298.399 638.937 296.213 639.5 294 639.5C291.787 639.5 289.601 638.937 287.619 637.807L6.98291 477.807L6.98264 477.807C2.9694 475.522 0.5 471.262 0.5 466.667V173.333C0.5 168.739 2.9694 164.479 6.98264 162.194Z'
              stroke='#E3E3F9'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
