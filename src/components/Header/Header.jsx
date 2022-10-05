import React from 'react';
import style from './Header.module.scss';
import { MainMenu } from './Menu/MainMenu';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const checklog = (isLoggedIn, children) => {
    if (isLoggedIn) {
      return children;
    }

    return (
      <Link href={'/Auth'}>
        <p>{children.props.children.props.children}</p>
      </Link>
    );
  };
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
            <Link href='/#services'>
              <p>Services</p>
            </Link>
            {checklog(
              isLoggedIn,
              <Link href='/lost'>
                <p>Lost</p>
              </Link>
            )}
            {checklog(
              isLoggedIn,
              <Link href='/Found'>
                <p>Found</p>
              </Link>
            )}
            {checklog(
              isLoggedIn,
              <Link href='/profile'>
                <p>Profile</p>
              </Link>
            )}

            {isLoggedIn ? (
              <Link href={'/'}>
                <button
                  onClick={() => dispatch(logoutUser())}
                  className={style.button}
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link href='/Auth'>
                <button className={style.button}>Login</button>
              </Link>
            )}
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
