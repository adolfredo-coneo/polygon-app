import React from 'react';

import classes from './Canvas.module.css';

const Canvas = () => {
  return (
    <canvas id="myCanvas" className={classes.canvas}>
      Your browser does not support the HTML canvas tag.
    </canvas>
  );
};

export default Canvas;
