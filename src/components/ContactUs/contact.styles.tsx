import styled from "styled-components";

export const PageSubHeading = styled.h2`
    font-size: 3rem;
    margin-bottom: 3.5rem;
    max-width: 20rem;
    line-height: 1.2;
    @media (max-width: 991px) {
        max-width: 15rem;
        font-size: 2rem;
        margin-bottom: 2.5rem;
    }
`;

export const ContactUsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -1rem;
`;


export const ContactUsColumn = styled.div`
    width: 50%;
    padding: 1rem;
    @media (max-width: 991px) {
        width: 100%;
    }
`;

export const ContactUsForm = styled.form`
    background-color: #fff;
    box-shadow: 0px 2px 80px rgba(66,66,66,0.08);
    border-radius: 1rem;
    padding: 3.5rem;
    @media (max-width: 991px) {
        padding: 2rem;
    }
    
`;

export const ContactUsDetail = styled.div`
    // background-color: #fff;
    // box-shadow: 0px 2px 80px rgba(66,66,66,0.08);
    // border-radius: 1rem;
    padding: 5.5rem;
    @media (max-width: 991px) {
        display: none;
        padding: 2rem;
    }
`;

export const ContactUsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -.5rem;
    margin-right: -.5rem;
`;

export const ContactUsGroup = styled.div`
    width: 50%;
    margin-bottom: 2rem;
    padding-left: .5rem;
    padding-right: .5rem;
    @media (max-width: 991px) {
        width: 100%;
        margin-bottom: 1.25rem;
    }
`;

export const ContactUsLabel = styled.label`
    display: block;
    margin-bottom: .25rem;
`;

export const ContactUsInput = styled.input`
    width: 100%;
    display: block;
    border: none;
    padding: .75rem 1.25rem;
    border-radius: .375rem;
    background-color: #F3F3F3;
    outline: none;
    color: #7a7a7a;
    font-size: 1rem;
`;

export const ContactUsTextarea = styled.textarea`
    width: 100%;
    display: block;
    border: none;
    padding: .75rem 1.25rem;
    border-radius: .375rem;
    background-color: #F3F3F3;
    outline: none;
    color: #7a7a7a;
    font-size: 1rem;
    min-height: 10rem;
`;

export const ContactUsDetailGroup = styled.div`
    display: flex;
    &:not(:last-child) {
        padding-bottom: 2.5rem;
        margin-bottom: 2.5rem;
        border-bottom: 1px solid #d5d5d5;
        @media (max-width: 991px) {
            padding-bottom: 1.5rem;
            margin-bottom: 1.5rem;
        }
    }
    h2 {
        margin-bottom: .25rem;
        @media (max-width: 991px) {
            font-size: 1.125rem;
        }
    }
    svg {
        display: block;
        margin-top: .5rem;
        min-width: 2.5rem;
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 2rem;
        @media (max-width: 991px) {
            min-width: 2rem;
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
        }
    }
`;

