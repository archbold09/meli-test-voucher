const boom = require('@hapi/boom');
import { Response, NextFunction } from 'express';

export default function validatorHandler(schema: any, property: any) {
  return (req: string, _res: Response, next: NextFunction) => {
    const data = req[property]; // compiler error
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) next(boom.badRequest(error));

    next();
  };
}
