import styled from "@emotion/styled";

export const StatisticsContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const TitleContainer = styled.div`
    background-color: #ffffff;
    min-width: 120px;
    width: ${props => props.quantityOfStats * 70}px;
    padding-top: 25px;
    padding-bottom: 25px;
`;

export const Title = styled.h2`
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.21;
    text-transform: uppercase;
    color: #505457;
    text-align: center;
`;

export const StatList = styled.ul`
    display: flex;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    width: ${props => {return props.quantityOfStats === 1 ? 120 : 70;}}px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const Label = styled.span`
    display: inline-block;
    margin-bottom: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    color: #D4FFFF;
`;

export const Percentage = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.19;
    color: #D4FFFF;
`;