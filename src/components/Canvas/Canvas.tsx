import React, { useEffect, useRef, useState } from 'react';

import Toolbar from '../Toolbar/Toolbar';
import classes from './Canvas.module.css';
import { Points } from '../../types/Point';
import { createVertex, clearCanvas, createLine } from '../../utils/Polygon';

const Canvas = () => {
  const [points, setPoints] = useState<Points>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const point = createVertex(canvasRef, event.clientX, event.clientY);
    if (point) {
      setPoints((currentPoints) => [...currentPoints, point]);
    }
    console.log('clicked', points);
  };

  const handleClearCanvas = () => {
    console.log('clicked', points);
    clearCanvas(canvasRef);
    setPoints([]);
  };

  const handleCompletePolygon = () => {
    if (points.length > 1) {
      const firstPoint = points[0];
      const lastPoint = points[points.length - 1];
      createLine(canvasRef, lastPoint, firstPoint);
      setPoints([]);
    }
  };

  useEffect(() => {
    if (points.length > 1) {
      const lastPoint = points[points.length - 1];
      const secondToLastPoint = points[points.length - 2];
      createLine(canvasRef, secondToLastPoint, lastPoint);
    }
  }, [points]);

  return (
    <div className={classes.container}>
      <Toolbar
        onCompletePolygon={handleCompletePolygon}
        onClearCanvas={handleClearCanvas}
      />
      <canvas
        id="myCanvas"
        width="1000"
        height="750"
        ref={canvasRef}
        className={classes.canvas}
        onClick={handleClick}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
};

export default Canvas;
