import React from 'react';
import { changePlayerTwo, selectPlayerTwo } from './playerTwoActions'

const json = require('/Users/andrew/nba-react-app/src/playerData.json');


class PlayerTwo extends React.Component {
  constructor(props) {
    super(props)

    this.changePlayerTwo = this.changePlayerTwo.bind(this);
    this.selectPlayerTwo = this.selectPlayerTwo.bind(this);
  }

  changePlayerTwo(e){
    const { dispatch } = this.props;
    dispatch(changePlayerTwo(e.target.value));
  }

  selectPlayerTwo(){
    const { dispatch, playerTwo } = this.props;
    dispatch(selectPlayerTwo(playerTwo));
  }

  render() {
    const { playerTwo, team, age, contract, agent } = this.props;
    return (
      <div>
        <div className='card'>
          <div className='card-header'>
            <h4> Player Two</h4>
            <select onChange={this.changePlayerTwo}>
              <option>Select a player</option>
              {json.map(player => (
                <option key={player.Player}>{player.Player}</option>
              ))}
            </select>
            <button className='btn btn-primary' onClick={this.selectPlayerTwo}>Select</button>
          </div>
          <div className='card-body'>
            <table>
              <tbody>
                <tr>
                  <td>Team: {team} </td>
                </tr>
                <tr>
                  <td>Age: {age} </td>
                </tr>
                <tr>
                  <td>Contract: {contract} </td>
                </tr>
                <tr>
                  <td>Agent: {agent} </td>
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