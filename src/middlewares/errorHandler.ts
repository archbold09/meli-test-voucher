import { Request, Response, NextFunction } from 'express';

interface error {
  code: number;
  message: string;
  stack: string;
  isBoom: object;
  output: {
    statusCode: number;
    payload: string;
  };
}

function logErrors(error: error, _req: Request, _res: Response, next: NextFunction) {
  console.error(error);
  next(error);
}

function errorHandler(error: error, _req: Request, res: Response, _next: NextFunction) {
  return res.status(500).json({
    statusCode: 500,
    message: error.message
  });
}

function boomErrorHandler(error: error, _req: Request, res: Response, next: NextFunction) {
  if (error.isBoom) {
    const { output } = error;
    return res.status(output.statusCode).json(output.payload);
  }

  next(error);
}

export { logErrors, errorHandler, boomErrorHandler };
