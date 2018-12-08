import React from 'react';
import store from './rootStore'
import { Provider } from 'react-redux'
import AddUser from './components/AddUser'

class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <AddUser />
        </Provider>
      )
    }
  };

  export default App;