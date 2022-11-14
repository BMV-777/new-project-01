import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 17px;
  padding: 8px 16px;

  :hover {
    background-color: lightgray;
  }
`;

export const Avatar = styled.div`
  background-color: grey;
  border-radius: 50%;
  border: 4px solid ${p => (p.isOnline ? 'green' : 'red')};
  display: inline-flex;
  color: blue;
`;

export const UserName = styled.p`
  color: #212121;
`;

export const PointsPopover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: grey;
  transform: translateX(100%);
  height: 100%;
  padding: 5px;
`;

export const PointsLabel = styled.p`
  font-size: 12px;
  color: black;
  line-height: 1.2;
`;

export const Points = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  color: ${p => (p.variant === 'total' ? 'orange' : 'red')};
`;
