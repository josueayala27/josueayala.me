import httpstatus from 'http-status';
import BaseError from '../utils/apiError';

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(', ');

    return next(new BaseError(httpstatus.BAD_REQUEST, errorMessage));
  }

  return next();
};

export default validate;
