import React from 'react';
import { selectPlayerTwo } from './playerTwoActions'

const json = require('/Users/andrew/nba-react-app/src/playerData.json');


class PlayerTwo extends React.Component {
  constructor(props) {
    super(props)

    this.selectPlayerTwo = this.selectPlayerTwo.bind(this);
  }

  selectPlayerTwo(e){
    const { dispatch } = this.props;
    dispatch(selectPlayerTwo(e.target.value));
  }

  render() {
    const { playerDataTwo } = this.props;
    return (
      <div>
        <div className='card player'>
          <div className='card-header'>
            <h4> Player Two</h4>
            <select onChange={this.selectPlayerTwo}>
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
                  <td>Team: {playerDataTwo.Team} </td>
                </tr>
                <tr>
                  <td>Age: {playerDataTwo.Age} </td>
                </tr>
                <tr>
                  <td>Contract: {playerDataTwo.Contract} </td>
                </tr>
                <tr>
                  <td>Agent: {playerDataTwo.Agent} </td>
                </tr>
                <tr>
                  <td>Height: {playerDataTwo.Height}</td>
                </tr>
                <tr>
                  <td>Weight: {playerDataTwo.Weight}</td>
                </tr>
                <tr>
                  <td>Wingspan: {playerDataTwo.Wingspan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayerTwo;