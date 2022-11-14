// import logo from '../logo.svg';
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

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppBar
        user={{
          username: 'Дядя Ваня',
          isOnline: true,
          points: {
            total: 700,
            required: 200,
          },
        }}
      />

      {/* <PageTitle className="red">React Home Norm</PageTitle>
      <Text isOnlain>Hello I am programmist 1</Text>
      <Text>Hello I am programmist 2</Text> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
