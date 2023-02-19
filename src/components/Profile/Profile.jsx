import PropTypes from 'prop-types';
import { Avatar, Label, ProfileCard, Stats, StatsItem } from './Profile.styled';
export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <div className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <h3 className="name">{username}</h3>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <span className="quantity">{followers}</span>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <span className="quantity">{views}</span>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <span className="quantity">{likes}</span>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
