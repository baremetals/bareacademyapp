import React from "react";
import styled from "styled-components";
import { MdDeleteForever, MdEdit } from "react-icons/md";



const Dropdown = ({ showDropdown, slug, id, children, ...props }: any) => {
  return (
    <>
      {showDropdown && (
        <CardContainer showDropdown={showDropdown} {...props}>
          <DropdownCard>
            {children}
          </DropdownCard>
        </CardContainer>
      )}
    </>
  );
};

export default Dropdown;

export const CardContainer = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
`;

export const DropdownCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  margin-top: 0px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  width: 6rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  padding: 0.375rem 0.5rem;
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
  }
`;
export const ItemText = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;
export const EditIcon = styled(MdEdit)`
  font-size: 15px;
`;
export const DeleteIcon = styled(MdDeleteForever)`
  font-size: 15px;
`;
