import React, { useState } from "react";
import {
  ShareContainer,
  ShareWrapper,
  ShareTop,
  ProfileImage,
  Title,
  ShareHr,
  ShareBottomWrap,
  ShareOptions,
  ShareOptionItem,
  ShareOptionsIcon,
  ShareOptionstext,
  ShareButton,
} from "./share.styles";
import { MdPermMedia, MdOndemandVideo, MdTextsms } from "react-icons/md";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import PostForm from 'components/ForumPage/PostForm';

const Share = () => {
  const { user: user } = useAppSelector(isUser);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ShareContainer>
        <ShareWrapper>
          <ShareTop>
            <ProfileImage src={user?.img} />
            <Title onClick={() => setShowModal(true)} placeholder={`what's on your mind ${user?.username}?`} />
          </ShareTop>
          <ShareHr />
          <ShareBottomWrap>
            <ShareOptions onClick={() => setShowModal(true)}>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <MdPermMedia />
                </ShareOptionsIcon>
                <ShareOptionstext>Photo</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareOptions onClick={() => setShowModal(true)}>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <MdOndemandVideo />
                </ShareOptionsIcon>
                <ShareOptionstext>Video</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareOptions onClick={() => setShowModal(true)}>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <MdTextsms />
                </ShareOptionsIcon>
                <ShareOptionstext>Text</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareButton onClick={() => setShowModal(true)}>send</ShareButton>
          </ShareBottomWrap>
        </ShareWrapper>
      </ShareContainer>
      <PostForm
        showModal={showModal}
        closeM={() => setShowModal(false)}
        setShowModal={setShowModal}
      />
    </>
  );
};
export default Share;
