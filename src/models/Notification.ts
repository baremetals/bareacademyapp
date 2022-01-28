import User from "./User";

export default class Notification {
  constructor(
    public id: string,
    public from: string,
    public image: string,
    public isRead: boolean,
    public title: string,
    public body: string,
    public type: string,
    public user: User,
    public createdOn: Date,
    public lastModifiedOn: Date,
  ) {}
}
