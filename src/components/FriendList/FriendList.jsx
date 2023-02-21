import { FriendListItem } from 'components/FrienListItem/FriendListItem';
import PropTypes from 'prop-types';
import { Friends, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      <List>
        {friends.map(({ id, isOnline, avatar, name }) => {
          return (
            <FriendListItem
              key={id}
              name={name}
              avatar={avatar}
              isOnline={isOnline}
            />
          );
        })}
      </List>
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
