import styled from "styled-components";
import { Link } from "react-scroll"


export const Button = styled(Link)`
  background-color: #7755e2;
  color: #fff;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 1.125rem 2.5rem;
  border: none;
  cursor: pointer;
  line-height: 1;
  font-weight: 500;
  display: inline-block;
  text-transform: capitalize;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #7755e2;
    background-color: #fff;
  }
  @media (max-width: 991px) {
    padding: 1rem 2rem;
  }
`;