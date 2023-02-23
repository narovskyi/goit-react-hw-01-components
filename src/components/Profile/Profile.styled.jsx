import styled from "@emotion/styled";

export const Card = styled.div`
    background-color: #ffffff;
    display: block;
    width: 250px;
    border: 1px solid #D8E0EA;
    border-radius: 5px;
    margin-bottom: 30px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 27px;
`;

export const Avatar = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 50%;
    margin-bottom: 30px;
`;

export const Name = styled.p`
    display: block;
    margin-top: 0;
    margin-bottom: 6px;
    color: #122236;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.19;
`;

export const Tag = styled.p`
    margin-top: 0px;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    color: #82909E;
`;

export const Location = styled.p`
    margin: 0px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    color: #82909E;
`;

export const Stats = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
`;

export const StatsItem = styled.li`
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 84px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid #E4E9F0;
    &:not(:last-child) {
        border-right: 1px solid #E4E9F0;
    }
`;

export const Label = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.25;
    color: #82909E;
    margin-bottom: 4px;
`;

export const Quantity = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.25;
    color: #1F3349;
`;