import React from 'react';
import '../src/style/global.scss';
import '../src/components/Home/Techonolgies/animation.scss';
import '../src/components/Header/Menu/menu-styles.scss';
import '../src/components/components/ContentHeadTitlte/content-head-title.scss';
import { Provider } from 'react-redux';
import store from '../src/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
