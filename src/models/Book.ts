import Category from "./Category";
import User from "./User";

export default class Book {
  constructor(
    public id: string,
    public title: string,
    public image: string,
    public description: string,
    public author: string,
    public link: string,
    public adminUser: User,
    public createdOn: Date,
    public lastModifiedOn: Date,
    public category: Category,
  ) {}
}
