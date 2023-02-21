import styled from 'styled-components';

export const Status = styled.span`
  color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 24px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
