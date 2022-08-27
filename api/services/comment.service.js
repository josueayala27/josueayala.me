import Comment from '../models/comment.model';

/**
 * Query for comments
 * @returns {Promise<Comment>}
 */
const getAllComments = async () => Comment.findAll();

/**
 *
 * @param {*} comment
 * @returns {Promise<Comment>}
 */
const createComment = async (comment) => Comment.create({ ...comment });

export default { getAllComments, createComment };
