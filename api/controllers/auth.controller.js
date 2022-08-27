export const github = async (req, res) => {
  res.send({
    message: 'Hello from github',
    ...req.body,
  });
};

export default {};
