import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './output.css';

// Components
import List from './components/List';
import AddGuest from './components/AddGuest';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class Header extends React.Component {
  render() {
    return <h1 className="text-4xl">Guest list</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      family: [
        'John Doe',
        'Jane Smith'
      ],
      friends: [
        'Sarah Stone',
        'Jack Ryan'
      ],
      guestName: ''
    };
  }

  addGuest = (guest) => {
    this.setState({
      [guest.category]: this.state[guest.category].concat([ guest.guestName ])
    });
  }

  removeGuest = (category, guestName) => {
    var friendlyCategory = category.toLowerCase();
    this.setState({
      [friendlyCategory]: this.state[friendlyCategory].filter(item => item !== guestName)
    })
  }

  render() {
    return (
      <div>
        <div className="container mx-auto">
          <Header />
          <AddGuest addGuest={ this.addGuest } />

          <div className="flex my-10">
            <div className="flex-1">
              <List name="Family" items={ this.state.family } removeGuest={ this.removeGuest }/>
            </div>
            <div className="flex-1">
              <List name="Friends" items={ this.state.friends } removeGuest={ this.removeGuest }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);