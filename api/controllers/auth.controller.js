export const github = (req, res) => {
  res.send({
    message: 'Hello from github',
    ...req.body,
  });
};

export default {};
