import UserModel from "../../lib/db/model/UserModel";
import PostModel from "../../lib/db/model/PostModel";
import CommentModel from "../../lib/db/model/CommentModel";
import knexInstance from "../../../knexfile";

export default async function handler(req, res) {
  const users = await UserModel.query().select("*");
  const posts = await PostModel.query().select("*");
  const comments = await CommentModel.query().select("*");

  res.status(200).json({
    text: "Hello world!",
    users: users,
    posts: posts,
    comments: comments,
  });
}
