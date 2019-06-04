import React from 'react';

class AddGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: '',
      category: 'family'
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addGuestInput = () => {
    this.props.addGuest({
      guestName: this.state.guestName,
      category: this.state.category
    });

    this.setState({
      guestName: '',
      category:  'family'
    });
  }

  render() {
    return (
      <div className="flex">
        <input
          type="text"
          className="bg-gray-200 flex-1"
          value={ this.state.guestName }
          onChange={ this.updateInput }
          name="guestName" />
        <select
          value={ this.state.category }
          onChange={ this.updateInput }
          name="category">
          <option value="family">Family</option>
          <option value="friends">Friends</option>
        </select>
        <button
          className="flex-1"
          onClick={ this.addGuestInput }>
          Add
        </button>
      </div>
    );
  }
}

export default AddGuest;