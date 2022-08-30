import { createContext, useContext, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "config";
// import User from 'models/User';
// import { Chat, ChatMsg } from 'generated/graphql';
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";


interface Context {
  socket: Socket;
//   chat?: Chat;
//   setChat: Function;
//   messages?: ChatMsg[];
//   setMessages: Function;
}

const socket = io(SOCKET_URL, { autoConnect: false });
// console.log(socket)

const SocketContext = createContext<Context>({
  socket,
//   setChat: () => false,
//   setMessages: () => false,
//   messages: [],
});

function SocketsProvider(props: any) {
  //   const [username, setUsername] = useState("");
  //   const [roomId, setRoomId] = useState("");
  //   const [rooms, setRooms] = useState({});
  //   const [messages, setMessages] = useState([]);
  const { user: user } = useAppSelector(isUser);
  
  const me = user;
  // console.log(socket);
  useEffect(() => {
    window.onfocus = function () {
      // document.title = "Chat app";
      socket.onAny((event, ...args) => {
        console.log(event, args);
      });
    };
  }, []);

  // console.log(me);
  useEffect(() => {
    socket.auth = { id: me?.id, sessionID: me?.username };
    socket.id = me?.id as string;
  }, [me]);

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
      {...props}
    />
  );
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
