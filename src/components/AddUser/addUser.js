import React from 'react';

class AddUser extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

  }
  render() {
    return (
      <div>
        <h1>Add a user</h1>
        <input type='text' placeholder='Brian' />
        <button>Add</button>
      </div>
    )
  }
}

export default AddUser;