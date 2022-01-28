import styled from "styled-components";
// import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { AiOutlineFolderView, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";

export const ForumWrapper = styled.div`
  padding: 1.875rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 991px) {
    padding: 1.25rem;
  }
`;

export const ViewMore = styled.button`
  background-color: transparent;
  color: #7755e2;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  padding: 0;
  border: none;
  cursor: pointer;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 600;
`;

export const PostDropdown = styled.div`
  position: relative;
  .DropDownIcon {
    cursor: pointer;
  }
`;

export const LikeGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const PostLeftWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const PostProfileImge = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  cursor: pointer;
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  display: block;
  cursor: pointer;
  margin-bottom: 0.25rem;
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const PostDate = styled.span`
  font-size: 0.75rem;
  color: #b5b5b5;
  display: block;
  font-weight: 400;
`;

export const PostTopRightWrap = styled.div``;

export const ExpandIcon = styled(MdExpandMore)`
  cursor: pointer;
  display: block;
`;

export const DropDownIcon = styled(MdExpandMore)`
  cursor: pointer;
  display: block;
`;

export const PostCenterWrap = styled.div`
  margin-bottom: 1rem;
  position: relative;
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
`;

export const PostTitle = styled.h2`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const PostText = styled.span`
  display: block;
  color: #16addd;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: auto;
`;


export const PostMediaImage = styled.img`
  margin-top: 1rem;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  display: block;
`;

export const PostMediaVideo = styled.video`
  margin-top: 1rem;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  display: block;
`;

export const PostMediaVideoIF = styled.iframe`
  margin-top: 1rem;
  width: 100%;
  max-height: 192px;
  object-fit: contain;
  border: none;
  outline: none;
  display: block;

  &:focus {
    outline: none;
  }
`;

export const PostBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;
export const BottomLeftWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const FilledLikeIcon = styled(AiFillLike)`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;
  color: blue;
`;

export const UnFilledLikeIcon = styled(AiOutlineLike)`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;

`;
export const ViewIcon = styled(AiOutlineFolderView)`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;
`;

export const LikeCounter = styled.span`
  margin-right: 1rem;
`;
export const ViewCounter = styled.span``;

export const BottomRightWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const CommentIcon = styled(FcComments)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-right: 3px;
`;
export const CommentText = styled.span``;
