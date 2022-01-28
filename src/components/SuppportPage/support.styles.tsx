import styled from "styled-components";

export const SupportWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 1rem;
  padding: 2.5rem;
  @media (max-width: 991px) {
    padding: 1.5rem;
  }
`;

export const SupportCardWrapper = styled.div`

`;

export const FAQTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const TextWrap = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  @media (max-width: 991px) {
    font-size: 0.875rem;
  }
`;

export const ContactCardWrap = styled.div`
  margin-top: 2rem;
`;

export const ContactCard = styled.div`

`;

export const FormWrap = styled.form`

`;

export const SupportMainContainer = styled.div`
  max-width: 30rem;
`;

export const SupportInputContainer = styled.div`

`;

export const SupportButtonContainer = styled.div`
  width: 100%;
`;

export const SupportInput = styled.input`
  width: 100%;
  border: none;
  padding: 0.875rem 1.25rem;
  border-radius: 0.625rem;
  background-color: #f3f3f3;
  outline: none;
  color: #7a7a7a;
  margin-bottom: 1rem;
  &::placeholder {
    text-transform: capitalize;
    color: inherit;
  }
`;

export const SupportTextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 0.875rem 1.25rem;
  border-radius: 0.625rem;
  background-color: #f3f3f3;
  outline: none;
  color: #7a7a7a;
  margin-bottom: 1rem;
  min-height: 8rem;
  &::placeholder {
    text-transform: capitalize;
    color: inherit;
  }
`;