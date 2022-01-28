import styled from "styled-components";


export const Text = styled.span`
margin-top: 15px;
  text-align: center;
`;

export const TextHighlighted = styled.span`
  font-weight: bold;
`;
export const Container = styled.section`
flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 30px; */
  border-width: 2px;
  border-radius: 2px;
  border-color: #E6E6E6;
  border-style: dashed;
  background-color: #ffffff;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;`;

export const ThumbsContainer = styled.aside`
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Thumb = styled.div`
display: inline-flex;
  border-radius: 2px;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

export const ThumbInner = styled.div`
display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const Image = styled.img`
/* display: flex;
  width: auto;
  height: 60%; */
`;
