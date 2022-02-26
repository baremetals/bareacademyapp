// import Post from "./Post";
// import Comment from "./Comment";

export default class User {
  [x: string]: any;
  constructor(
    public id: string,
    public email: string,
    public username: string,
    public img: string,
    public backgroundImg: string,
    public slug: string,
    public fullName?: string,
    // public posts?: Array<Post>,
    // public comments?: Array<Comment>
  ) {}
}

export interface AuthState {
  user: User | null;
  // me: {};
  authenticated: boolean;
  loading: boolean;
}