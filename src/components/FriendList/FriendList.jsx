import PropTypes from 'prop-types';
import { Friends, List, Status, Item } from './FriendList.styled';
import { GrStatusGoodSmall } from 'react-icons/gr';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      <List>
        {friends.map(({ id, isOnline, avatar, name }) => {
          return (
            <Item className="item" key={id}>
              <Status isOnline={isOnline}>
                <GrStatusGoodSmall />
              </Status>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <h3 className="name">{name}</h3>
            </Item>
          );
        })}
      </List>
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
