import { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import {
  MenuContainer,
  Avatar,
  UserName,
  PointsPopover,
  PointsLabel,
  Points,
} from './UserMenu.styled.js';

export const UserMenu = ({ user }) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  return (
    <MenuContainer
      onMouseEnter={() => setIsPopoverVisible(true)}
      onMouseLeave={() => setIsPopoverVisible(false)}
    >
      <Avatar isOnline={user.isOnline}>
        <FaUsers size={40} />
      </Avatar>
      <UserName>{user.username}</UserName>
      {isPopoverVisible && (
        <PointsPopover>
          <PointsLabel>Текущее кол-во очков:</PointsLabel>
          <Points variant="total"> {user.points.total}</Points>
          <PointsLabel>Нужное кол-во очков:</PointsLabel>
          <Points variant="required"> {user.points.required}</Points>
        </PointsPopover>
      )}
    </MenuContainer>
  );
};
