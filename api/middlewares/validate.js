const validate = (schema) => async (req, res, next) => {
  try {
    const hello = await schema.validateAsync(req.body);
    console.log(hello);
    next();
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

export default validate;
