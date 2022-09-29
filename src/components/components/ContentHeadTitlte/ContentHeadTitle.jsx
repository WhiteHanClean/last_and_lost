import React from 'react';

function ContentHeadTitle({ title, centered = false }) {
  return (
    <div className='content-head-main-wrapper'>
      <div
        className={`content-head-main-wrapper__child-wrapper ${
          centered ? 'content-head-main-wrapper__child-wrapper-centered' : ''
        }`}
      >
        <h2
          className={`content-head-main-wrapper__child-wrapper__title ${
            centered
              ? 'content-head-main-wrapper__child-wrapper__title-centered'
              : ''
          }`}
        >
          {title}
        </h2>
        <div className='content-head-main-wrapper__child-wrapper__line-wrapper'>
          <div className='content-head-main-wrapper__child-wrapper__line-wrapper__line' />
          <div className='content-head-main-wrapper__child-wrapper__line-wrapper__circle' />
        </div>
      </div>
    </div>
  );
}

export default ContentHeadTitle;
