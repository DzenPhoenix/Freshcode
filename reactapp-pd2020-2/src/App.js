import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'React',
      isGreetingMode: true,
    };
  }
  switchModeGreeting = () => {
    const { isGreetingMode } = this.state;
    this.setState({
      isGreetingMode: !isGreetingMode,
    });
  };
  render() {
    const { username, isGreetingMode } = this.state;
    return (
      <>
        <button onClick={this.switchModeGreeting}> change mode </button>
        <Greeting name={username} isGreeting={isGreetingMode} />
      </>
    );
  }
}
export default App;
