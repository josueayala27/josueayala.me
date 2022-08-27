import commentService from '../services/comment.service';

const createComment = async (req, res) => {
  const comments = await commentService.createComment(req.body);
  res.send({ data: comments });
};

const getComments = async (req, res) => {
  const comments = await commentService.getAllComments();
  res.send({ data: comments });
};

export default { createComment, getComments };
