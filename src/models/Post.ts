// import Category from "./Category";
import Comment from "./Comment";
import User from "./User";

export default class Post {
  // slug: string;
  constructor(
    public id: string,
    public views: number,
    public title: string,
    public slug: string,
    public body: string,
    public postType: string,
    public user: User,
    public points: number,
    public createdOn: Date,
    public lastModifiedOn: Date,
    public comments: Array<Comment>
  ) // public category: Category
  {}
}
