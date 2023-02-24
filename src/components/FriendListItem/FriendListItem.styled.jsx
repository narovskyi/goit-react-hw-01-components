import styled from "@emotion/styled";

export const Card = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    width: 368px;
    background-color: white;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Status = styled.span`
    margin-right: 16px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.isOnline === true ? "#65AC5B" : "#EA6058"};
`;

export const Avatar = styled.img`
    margin-right: 18px;
    width: 96px;
    height: 96px;
    border-radius: 10px;
    background-color: #A1FF99;
`;

export const Name = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.22;
    color: #000000;
`;