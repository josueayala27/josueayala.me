import Joi from 'joi';

const login = Joi.object({
  token: Joi.string().token().required(),
});

export default { login };
