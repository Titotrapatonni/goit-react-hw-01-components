import PropTypes from 'prop-types';
import {
  Section,
  Table,
  TableData,
  TableHead,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Table>
        <TableHead>
          <TableRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TableRow>
        </TableHead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <TableRow key={id}>
                <TableData>{type}</TableData>
                <TableData>{amount}</TableData>
                <TableData>{currency}</TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
