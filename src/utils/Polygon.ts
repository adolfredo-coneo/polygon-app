import React from 'react';

import { Point } from '../types/Point';

export const createVertex = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  clientX: number,
  clientY: number
): Point | null => {
  const ctx = canvasRef?.current?.getContext('2d');
  if (ctx && canvasRef.current) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    return { x, y };
  }
  return null;
};

export const createLine = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  initialPoint: Point,
  finalPoint: Point
): void => {
  const ctx = canvasRef?.current?.getContext('2d');
  if (ctx && canvasRef.current) {
    ctx.beginPath();
    ctx.moveTo(initialPoint.x, initialPoint.y);
    ctx.lineTo(finalPoint.x, finalPoint.y);
    ctx.closePath();
    ctx.stroke();
  }
};

export const clearCanvas = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const ctx = canvasRef?.current?.getContext('2d');
  if (ctx && canvasRef.current) {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }
};
