import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error(`[ERROR] ${err.message}`, { stack: err.stack, path: req.path });

  if (err.name === 'ZodError') {
    res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: err.errors,
    });
    return;
  }

  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
};
