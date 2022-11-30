import { UserMenu } from '../UserMenu/UserMenu';
import { SetBarContainer } from './AppBar-styles.js';

export const AppBar = ({ user, onClose }) => {
  return (
    <SetBarContainer>
      <UserMenu user={user} />

      <button type="button" onClick={onClose}>
        Закрытия
      </button>
    </SetBarContainer>
  );
};
