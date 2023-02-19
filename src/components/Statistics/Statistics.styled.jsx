import styled from 'styled-components';
import getRandomHexColor from 'getRandomHexColor';

export const StatisticsCard = styled.section`
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

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 16px;
  margin: 0;
`;

export const StatsItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  width: 80px;
  background-color: ${getRandomHexColor}aa;
`;
