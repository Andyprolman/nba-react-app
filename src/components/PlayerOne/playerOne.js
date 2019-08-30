import React from 'react';
import { selectPlayerOne } from './playerOneActions'

const json = require('/Users/andrew/nba-react-app/src/playerData.json');

class PlayerOne extends React.Component {
  constructor(props) {
    super(props)

    this.selectPlayerOne = this.selectPlayerOne.bind(this);
  }

  selectPlayerOne(e){
    const { dispatch } = this.props;
    dispatch(selectPlayerOne(e.target.value))
  }

  render() {
    const { playerDataOne } = this.props;
    return (
      <div>
        <div className='card player'>
          <div className='card-header'>
            <h4>Player One</h4>
            <select onChange={this.selectPlayerOne}>
              <option>Select a player</option>
              {json.map(player => (
                <option key={player.Player}>{player.Player}</option>
                ))}
            </select>
          </div>
          <div className='card-body'>
            <table>
              <tbody>
                <tr>
                  <td><b>Team:</b> {playerDataOne.Team} </td>
                </tr>
                <tr>
                  <td><b>Age:</b> {playerDataOne.Age}</td>
                </tr>
                <tr>
                  <td><b>Contract:</b> {playerDataOne.Contract}</td>
                </tr>
                <tr>
                  <td><b>Agent:</b> {playerDataOne.Agent}</td>
                </tr>
                <tr>
                  <td><b>Height: </b>{playerDataOne.Height}</td>
                </tr>
                <tr>
                  <td><b>Weight:</b> {playerDataOne.Weight}</td>
                </tr>
                <tr>
                  <td><b>Wingspan: </b>{playerDataOne.Wingspan}</td>
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