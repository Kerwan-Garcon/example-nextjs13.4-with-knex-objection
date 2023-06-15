import { Model } from "objection";
import PostModel from "./PostModel";

class UserModel extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email_address", "first_name", "last_name"],
      properties: {
        id: { type: "integer" },
        email: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }

  static get relationMappings() {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: PostModel,
        join: {
          from: "users.id",
          to: "posts.user_id",
        },
      },
    };
  }
}

export default UserModel;
