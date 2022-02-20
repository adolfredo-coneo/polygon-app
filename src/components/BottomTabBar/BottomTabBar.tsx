import React from 'react';

import Footer from '../Footer/Footer';
import classes from './BottomTabBar.module.css';

const BottomTabBar: React.FC = () => {
  return (
    <div className={classes.navbar}>
      <Footer />
    </div>
  );
};

export default BottomTabBar;
