const boom = require('@hapi/boom');
import { Response, NextFunction } from 'express';

interface IStringIndex {
  [key: string]: any;
}

export default function validatorHandler(schema: any, property: string) {
  return (req: IStringIndex, _res: Response, next: NextFunction) => {
    const data = req[property]; // compiler error
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) next(boom.badRequest(error));

    next();
  };
}
