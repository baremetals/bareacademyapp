import Category from "./Category";
import Comment from "./Comment";
import User from "./User";

export default class Course {
  constructor(
    public id: string,
    public title: string,
    public duration: number,
    public description: string,
    public image: string,
    public startDate: string,
    public endDate: string,
    public totalStudents: number,
    public adminUser: User,
    public createdOn: Date,
    public lastModifiedOn: Date,
    public category: Category,
    // public students: Array<Student>,
    public comments: Array<Comment>,
    // public notes: Array<Note>
  ) {}
}
