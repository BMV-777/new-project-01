import { UserMenu } from '../UserMenu/UserMenu';
import { SetBarContainer } from './AppBar-styles.js';

export const AppBar = ({ user }) => {
  return (
    <SetBarContainer>
      <UserMenu user={user} />
    </SetBarContainer>
  );
};
