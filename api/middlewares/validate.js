import httpstatus from 'http-status';

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return next(
      res.status(httpstatus.UNPROCESSABLE_ENTITY).json({
        error,
        message: 'The data entered is not valid.',
      })
    );
  }

  return next();
};

export default validate;
