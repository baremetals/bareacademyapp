import React from "react";
import Link from "next/link";

import {
  ChatContainer,
  OnlineUsersWrap,
  OnlineUsersImageWrap,
  OnlineUsersImage,
  OnlineUsersImageBadge,
  OnlineUsersName,
} from "./chat.styles";
// import { Socket } from "socket.io-client";
// import { useSockets } from "context/socket.context";

// import { isUser } from "features/auth/selectors";
// import { useAppSelector } from "app/hooks";

function OnlineChat({
  img,
  username,
  slug,
  online
}: {
  img: string;
  username: string;
  slug: string;
  online: boolean;
}) {

  // const { socket } = useSockets();
  // const [existingSlug , setExistingSlug] = useState("")
  // // const [existingChat , setExistingChat] = useState([]);
  // const { user: user } = useAppSelector(isUser);

  // const me = user;

  // useEffect(()=>{
  //   socket.emit("getusersbyusername", {username , userid : me?.id} ,(error: any, d: any) => {
  //     if (error) {
  //       console.log(" Something went wrong please try again later while delete message.", error);
  //     }
  //     else{
  //       console.log("NO ERROR FOUND ,GET SLUG CALLED");
        
  //     }
  //   });
  // },[me])

  // useEffect(()=>{
  //   socket.on("getslug", (data)=>{
  //     console.log("GET SLUG CALLED");
      
  //     const d = data?.chat
  //     d.map((aaa : any)=>{
  //       if(aaa?.owner?.username == username || aaa?.recipient?.username == username  )
  //       {
  //         console.log("SLUG EXIST " ,aaa?.owner?.username , aaa?.recipient?.username );
          
  //         setExistingSlug(aaa?.slug)
  //       }
  //       else{
  //         setExistingSlug(slug)
  //       }
  //     })
  //     console.log({data} , "slug");
      
  //   })
  // })


  return (
    <>
      <ChatContainer>
        <OnlineUsersWrap>
          <OnlineUsersImageWrap>
            <Link href={`/messages/${slug}/?username=${username}`}>
              <OnlineUsersImage alt="Online user image" src={img} />
            </Link>

            {online && <OnlineUsersImageBadge></OnlineUsersImageBadge>}
          </OnlineUsersImageWrap>
          <Link href={`/messages/${slug}/?username=${username}`}>
            <OnlineUsersName>{username}</OnlineUsersName>
          </Link>
        </OnlineUsersWrap>
      </ChatContainer>
    </>
  );
}

export default OnlineChat;
