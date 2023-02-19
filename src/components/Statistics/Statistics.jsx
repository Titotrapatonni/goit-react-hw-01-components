import PropTypes from 'prop-types';
import { StatisticsCard, StatsItem, StatsList } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <h2 className="title">{title}</h2>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
