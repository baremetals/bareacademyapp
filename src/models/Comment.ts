import Post from "./Post";
import User from "./User";

export default class Comment {
  constructor(
    public id: string,
    public body: string,
    public user: User,
    public createdOn: Date,
    public post: Post
  ) {}
}
