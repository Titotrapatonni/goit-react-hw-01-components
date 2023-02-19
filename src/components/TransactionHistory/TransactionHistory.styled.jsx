import styled from 'styled-components';

export const Section = styled.section`
  width: 400px;
  padding: 64px 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  text-align: center;
  background-color: white;
  border: 8px solid #e6e9f4;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Table = styled.table`
  table-layout: auto;
  width: 100%;
  border: 1px solid black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #e2e2e2;
  }
`;
export const TableData = styled.td`
  border: 1px solid black;
`;
export const TableHead = styled.thead`
  background-color: #a0fafd;
`;
