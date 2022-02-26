import ChatMsg from './ChatMsg';
import User from './User';


export default class Chat {
  constructor(
    public id: string,
    public msgs: ChatMsg,
    public owner: User,
    public recipient: User,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}