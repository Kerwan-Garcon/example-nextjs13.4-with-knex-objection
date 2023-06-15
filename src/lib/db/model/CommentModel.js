import { Model } from "objection";
import UserModel from "./UserModel";
import PostModel from "./PostModel";

class CommentModel extends Model {
  static get tableName() {
    return "comments";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["content", "user_id", "post_id"],
      properties: {
        id: { type: "integer" },
        content: { type: "string", minLength: 1, maxLength: 255 },
        user_id: { type: "integer" },
        post_id: { type: "integer" },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: UserModel,
        join: {
          from: "comments.user_id",
          to: "users.id",
        },
      },
      post: {
        relation: Model.HasOneRelation,
        modelClass: PostModel,
        join: {
          from: "comments.post_id",
          to: "posts.id",
        },
      },
    };
  }
}

export default CommentModel;
