import React from 'react';
import { Link } from 'react-router-dom';

import './NotAuthPage.module.scss';

export const NotAuthPage: React.FC = () => {
  return (
    <div className='not-auth-container'>
      <div className='not-auth-content'>
        <img src='/public/restrictions.png' alt='Not Authenticated' className='not-auth-image' />
        <h1>Access Denied</h1>
        <p>
          You are not authorized to view this page. Please <Link to='/login'>login</Link>.
        </p>
      </div>
    </div>
  );
};
