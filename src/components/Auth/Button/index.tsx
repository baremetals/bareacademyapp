import Spinner from "components/Spinner";
import styled from "styled-components";


export default function AuthButton({ content, type, disabled, loading }: any) {
  return (
    <StyledButton type={type} disabled={disabled || loading}>
      {content}
      {loading && <Spinner />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: #7755e2;
  color: #fff;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 1.125rem 3.5rem;
  border: none;
  cursor: pointer;
  line-height: 1;
  font-weight: 500;
  display: inline-block;
  text-transform: capitalize;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  transition: all 0.2s ease-in-out;
  position: relative;
  &:disabled{
    pointer-events: none;
  }
  @media (max-width: 991px) {
    font-size: 0.875rem;
    padding: 0.875rem 2rem;
  }
  &:hover {
    background-color: #fff;
    color: #7755e2;
  }
`;
