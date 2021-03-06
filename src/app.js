import React from 'react';
import store from './rootStore'
import { Provider } from 'react-redux'
import PlayerOne from './components/PlayerOne'
import Comparison from './components/Comparison/comparison'
import PlayerTwo from './components/PlayerTwo'

class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <div className='container'>
            <div>
              <h1 style={{textAlign: 'center'}}>NBA Player Comparison</h1>
            </div>
            <div className='row'>
              <div className='col-md-3'>
                <PlayerOne 
                
                />
              </div>
              <div className='col-md-6'>
                <Comparison />
              </div>
              <div className='col-md-3'>
                <PlayerTwo />
              </div>
            </div>
          </div>
        </Provider>
      )
    }
  };

  export default App;