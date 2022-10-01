import React from 'react';
import style from './Header.module.scss';
import { MainMenu } from './Menu/MainMenu';
import Link from 'next/link';

const Header = ({ inView }) => {
  return (
    <header className={`${style.mainHeader} ${style.mainHeaderWhite}`}>
      <div>
        <div className={style.header}>
          <div className={style.logo}>
            <Link href='/'>
              <h2>Имя приложения</h2>
            </Link>
          </div>

          <div className={style.links}>
            <Link href='/'>
              <p>HOME</p>
            </Link>
            <Link href='/profile'>
              <p>Profile</p>
            </Link>
            <Link href='/#services'>
              <p>Services</p>
            </Link>
            <Link href='/lost'>
              <p>Lost</p>
            </Link>
            <Link href='/Found'>
              <p>Found</p>
            </Link>
            <Link href='/Auth'>
              <button className={style.button}>Login</button>
            </Link>
          </div>
          <div className={style.burger}>
            <MainMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
