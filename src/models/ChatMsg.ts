import Chat from './Chat';
import User from './User';


export default class ChatMsg {
  constructor(
    public id: string,
    public isRead: boolean,
    public body: string,
    public chat: Chat,
    public sender: User,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}