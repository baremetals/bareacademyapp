import { createContext, useContext, useEffect } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "config";
// import User from 'models/User';
// import { Chat, ChatMsg } from 'generated/graphql';


interface Context {
  socket: Socket;
//   chat?: Chat;
//   setChat: Function;
//   messages?: ChatMsg[];
//   setMessages: Function;
}

const socket = io(SOCKET_URL);
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

  useEffect(() => {
    window.onfocus = function () {
      document.title = "Chat app";
    };
  }, []);

//   socket.on(EVENTS.SERVER.ROOMS, (value) => {
//     setRooms(value);
//   });

//   socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
//     setRoomId(value);

//     setMessages([]);
//   });

//   useEffect(() => {
//     socket.on(EVENTS.SERVER.ROOM_MESSAGE, ({ message, username, time }) => {
//       if (!document.hasFocus()) {
//         document.title = "New message...";
//       }

//       setMessages((messages) => [...messages, { message, username, time }]);
//     });
//   }, [socket]);

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
