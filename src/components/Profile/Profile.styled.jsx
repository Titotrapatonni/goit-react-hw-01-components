import styled from 'styled-components';

export const ProfileCard = styled.div`
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

export const Avatar = styled.img`
  width: 120px;
  height: 100%;
  border: 8px solid #e6e9f4;
  border-radius: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  padding: 16px 8px;
  margin-top: 40px;
  border-radius: 4px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.b`
  font-style: italic;
`;
