import styled from 'styled-components';

export const SetBarContainer = styled.div`
  height: 100vh;
  background-color: white;
  width: 320px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const UserMenu = styled.div`
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
