import PropTypes from 'prop-types';
import { Table, Header, Body, CellHeader, Row, Data } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Header>
                <Row>
                    <CellHeader>Type</CellHeader>
                    <CellHeader>Amount</CellHeader>
                    <CellHeader>Currency</CellHeader>
                </Row>
            </Header>
            <Body>
                {items.map(({ id, type, amount, currency }) => (
                    <Row key={id}>
                        <Data>{type}</Data>
                        <Data>{amount}</Data>
                        <Data>{currency}</Data>
                    </Row>
                ))}
            </Body>
        </Table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}