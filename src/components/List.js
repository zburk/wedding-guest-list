import React from 'react';

class List extends React.Component {
  render() {
    const listItems = this.props.items.map((item, index) => {
      return <li key={ index } onClick={ () => { this.props.removeGuest(this.props.name, item) } }>{ item }</li>;
    });

    return (
      <div>
        <h2 className="text-2xl">{ this.props.name }</h2>
        <ul>
          { listItems }
        </ul>
      </div>
    );
  }
}

export default List;