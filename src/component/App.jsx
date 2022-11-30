import { Component } from 'react';
import GlobalStyle from './GlobalStyle';
// import { PageTitle } from './PageTitle';
import '../App.css';
import { AppBar } from './Bar/AppBar';

// import styled from 'styled-components';

// const Text = styled.p`
//   :hover {
//     background-color: ${props => (props.isOnlain ? 'pink' : 'green')};
//     color: ${props => (props.isOnlain ? 'black' : 'white')};
//   }
// `;

const user = {
  username: 'Дядя Ваня',
  isOnline: true,
  points: {
    total: 700,
    required: 200,
  },
};

export class App extends Component {
  state = {
    isAppOpen: false,
  };

  openAppBar = () => this.setState({ isAppOpen: true });
  closedAppBar = () => this.setState({ isAppOpen: false });
  toggleAppBar = () =>
    this.setState(state => ({ isAppOpen: !this.state.isAppOpen }));

  render() {
    const { isAppOpen } = this.state;
    return (
      <div>
        <GlobalStyle />
        {!isAppOpen && (
          <button type="button" onClick={this.openAppBar}>
            Open
            {/* {this.state.isAppOpen ? 'Closed' : 'Open'} */}
          </button>
        )}

        {isAppOpen && <AppBar user={user} onClose={this.closedAppBar} />}
      </div>
    );
  }
}

export default App;
