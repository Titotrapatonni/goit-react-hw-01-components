import PropTypes from 'prop-types';
import { Status, Item } from './FriendListItem.styled';

import { GrStatusGoodSmall } from 'react-icons/gr';
export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <Status isOnline={isOnline}>
        <GrStatusGoodSmall />
      </Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <h3 className="name">{name}</h3>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
