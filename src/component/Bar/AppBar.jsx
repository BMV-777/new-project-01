import { FaUsers } from 'react-icons/fa';
import {
  SetBarContainer,
  UserMenu,
  Avatar,
  UserName,
} from './AppBar-styles.js';

export const AppBar = ({ user }) => {
  return (
    <SetBarContainer>
      <UserMenu>
        <Avatar isOnline={user.isOnline}>
          <FaUsers size={40} />
        </Avatar>
        <UserName>{user.username}</UserName>
      </UserMenu>
    </SetBarContainer>
  );
};
