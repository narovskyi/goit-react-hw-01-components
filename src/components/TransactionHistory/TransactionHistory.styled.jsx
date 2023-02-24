import styled from "@emotion/styled";

export const Table = styled.table`
    border: 1px solid #E4E9F0;
    background-color: white;
    border-collapse: collapse;
`;

export const Header = styled.thead`
    background-color: #00BCD5;
    color: #ffffff;
`;

export const Body = styled.tbody`
    color: #676C72;
`;

export const CellHeader = styled.th`
    width: 300px;
    height: 55px;
    &:not(:last-child) {
        border-right: 1px solid #E4E9F0;
    }
`;

export const Row = styled.tr`
    &:nth-of-type(even) {
        background-color: #ECF1F4;
    }
`;

export const Data = styled.td`
    text-align: center;
    height: 55px;
    &:not(:last-child) {
        border-right: 1px solid #E4E9F0;
    }
`;