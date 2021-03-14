import { Component } from 'react';
import './App.css';
import UserList from './components/userList/UserList.jsx';

class App extends Component {
  render() {
    return <UserList dbUsers={this.props.dbUsers}/>;
  }
}

export default App;
