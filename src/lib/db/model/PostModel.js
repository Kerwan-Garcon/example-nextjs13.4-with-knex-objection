import { Model } from "objection";
import UserModel from "./UserModel";

class PostModel extends Model {
  static get tableName() {
    return "posts";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "content", "user_id"],
      properties: {
        id: { type: "integer" },
        title: { type: "string", minLength: 1, maxLength: 255 },
        content: { type: "string", minLength: 1, maxLength: 255 },
        user_id: { type: "integer" },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: UserModel,
        join: {
          from: "posts.user_id",
          to: "users.id",
        },
      },
    };
  }
}

export default PostModel;
