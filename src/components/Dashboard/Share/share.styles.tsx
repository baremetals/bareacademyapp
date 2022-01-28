import styled from "styled-components";

export const ShareContainer = styled.div`
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(169, 169, 169, 0.18);
  border-radius: 0.375rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const ShareWrapper = styled.div`
  padding: 0px;
`;
export const ShareTop = styled.div`
  display: flex;
  padding: 1.5rem 1.875rem;
  @media (max-width: 991px) {
    padding: 1rem;
  }
`;
export const ProfileImage = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 10rem;
  object-fit: cover;
  @media (min-width: 992px) {
    margin-right: 1.375rem;
  }
`;
export const InputLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;
export const Title = styled.input`
  border: none;
  flex: auto;
  background-color: transparent;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;

export const Body = styled.select`
  border: none;
  width: 80%;
  &:focus {
    outline: none;
  }
`;

export const SelectOptions = styled.option`
  border: none;
  width: 80%;
  &:focus {
    outline: none;
  }
`;

export const ShareHr = styled.hr`
  margin: 0;
  opacity: 0.2;
`;

export const ShareBottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.875rem;
  @media (max-width: 991px) {
    padding: 1rem;
  }
`;

export const ShareOptions = styled.div`
  display: flex;
`;

export const ShareOptionItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ShareOptionsIcon = styled.label`
  font-size: 1rem;
  margin-right: 0.625rem;
  @media (max-width: 991px) {
    font-size: 0.75rem;
    margin-right: 0.25rem;
  }
  svg {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    @media (max-width: 991px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const ShareOptionstext = styled.span`
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 991px) {
    font-size: 0.75rem;
  }
`;

export const ShareButton = styled.button`
  border: none;
  background-color: #7755e2;
  color: white;
  font-weight: 500;
  border-radius: 10rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: capitalize;
  padding: 0.375rem 1.75rem;
  line-height: 1.5;
  @media (max-width: 991px) {
    font-size: 0.75rem;
    padding: 0.25rem 1rem;
  }
`;
