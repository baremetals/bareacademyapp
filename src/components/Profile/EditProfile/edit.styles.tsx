import styled from "styled-components";

export const Button = styled.button`
  background-color: #7755e2;
  color: #fff;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 0.875rem 2.5rem;
  border: none;
  cursor: pointer;
  line-height: 1;
  font-weight: 500;
  display: inline-block;
  text-transform: capitalize;
  box-shadow: 0px 2px 8px rgb(66 66 66 / 8%);
  transition: all 0.2s ease-in-out;
  @media (max-width: 991px) {
    font-size: 0.875rem;
    padding: 0.875rem 2rem;
  }
  &:hover {
    background-color: #fff;
    color: #7755e2;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  background-color: #f3f3f3;
  outline: none;
  color: #7a7a7a;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  background-color: #f3f3f3;
  outline: none;
  color: #7a7a7a;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 10rem;
  object-fit: cover;
  margin-right: 1.25rem;
  @media (max-width: 991px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const BackGroundImage = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  margin-right: 1.25rem;
  @media (max-width: 991px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const HorizontalRule = styled.hr`
  width: 100%;
  height: 1px;
  border-radius: 1rem;
  border: none;
  background-color: rgb(0, 0, 0, 0.1);
  margin: 2.5rem auto;
`;

export const PageContentWrap = styled.div`
  align-items: center;
`;

export const ProfileFormGroup = styled.div`
  padding: 2.5rem;
  @media (max-width: 991px) {
    padding: 1.5rem;
  }
`;

export const EditProfileTitle = styled.h3`
  margin-bottom: 1.5rem;
`;

export const EditProfileLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const FileUploadedGroup = styled.div`
  min-width: 50%;
  padding: 1rem;
  @media (max-width: 991px) {
    width: 100%;
  }
  form {
    display: flex;
    align-items: center;
  }
`;

export const InputSubmitGroup = styled.div`
  input {
    margin-bottom: 1rem;
    display: block;
  }
`;
