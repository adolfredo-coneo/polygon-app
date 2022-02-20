import React from 'react';

import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={classes['main-header']}>
      <h1>Polygon App</h1>
    </div>
  );
};

export default Header;
