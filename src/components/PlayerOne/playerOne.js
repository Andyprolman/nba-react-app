import React from 'react';
import { changePlayerOne, selectPlayerOne } from './playerOneActions'

const json = require('/Users/andrew/nba-react-app/src/playerData.json');

class PlayerOne extends React.Component {
  constructor(props) {
    super(props)

    this.changePlayerOne = this.changePlayerOne.bind(this);
    this.selectPlayerOne = this.selectPlayerOne.bind(this);
  }

  changePlayerOne(e){
    const { dispatch } = this.props;
    dispatch(changePlayerOne(e.target.value))
  }

  selectPlayerOne(){
    const { dispatch, playerOne } = this.props;
    dispatch(selectPlayerOne(playerOne))
  }

  render() {
    const { team, age, contract, agent } = this.props;
    return (
      <div>
        <div className='card'>
          <div className='card-header'>
            <h4>Player One</h4>
            <select onChange={this.changePlayerOne}>
              <option>Select a player</option>
              {json.map(player => (
                <option key={player.Player}>{player.Player}</option>
                ))}
            </select>
                <button className='btn btn-primary' onClick={this.selectPlayerOne}>Select</button>
          </div>
          <div className='card-body'>
            <table>
              <tbody>
                <tr>
                  <td>Team: {team} </td>
                </tr>
                <tr>
                  <td>Age: {age}</td>
                </tr>
                <tr>
                  <td>Contract: {contract}</td>
                </tr>
                <tr>
                  <td>Agent: {agent}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayerOne