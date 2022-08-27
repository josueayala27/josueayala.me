export const github = (req, res) => {
  res.status(200).json({
    message: 'Hello from github',
    ...req.body,
  });
};

export default {};
