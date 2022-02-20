import React from 'react';

import classes from './Toolbar.module.css';

type ToolbarProps = {
  onCompletePolygon: () => void;
  onClearCanvas: () => void;
};

const Toolbar: React.FC<ToolbarProps> = ({
  onCompletePolygon,
  onClearCanvas,
}) => {
  return (
    <div className={classes.toolbar}>
      <button className={classes.button} onClick={onCompletePolygon}>
        Complete polygon
      </button>
      <button className={classes.button} onClick={onClearCanvas}>
        Clear canvas
      </button>
    </div>
  );
};

export default Toolbar;
