import { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import {
  MenuContainer,
  Avatar,
  UserName,
  PointsPopover,
  PointsLabel,
  Points,
} from './UserMenu.styled.js';

export class UserMenu extends Component {
  state = {
    isPopoverVisible: false,
  };

  openPopover = () => this.setState({ isPopoverVisible: true });
  closedPopover = () => this.setState({ isPopoverVisible: false });
  render() {
    const { user } = this.props;
    const { isPopoverVisible } = this.props;
    return (
      <MenuContainer
        onMouseEnter={this.openPopover}
        onMouseLeave={this.closedPopover}
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
  }
  // const [isPopoverVisible, setIsPopoverVisible] = useState(false);
}
