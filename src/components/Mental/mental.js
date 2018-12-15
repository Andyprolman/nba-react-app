import React from 'react';

class Mental extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { playerDataOne, playerDataTwo } = this.props;
    return (
      <div className='card' style={{ textAlign: 'center' }}>
        <div className='card-header'>
          <h4>Mental</h4>
        </div>
        <div className='card-body'>
          <table>
            <tbody>
              <tr>
                <td>{playerDataOne.DecisionMaking}</td>
                <td>Decision Making</td>
                <td>{playerDataTwo.DecisionMaking}</td>
              </tr>
              <tr>
                <td>{playerDataOne.OffBallMovement}</td>
                <td>Off-Ball Movement</td>
                <td>{playerDataTwo.OffBallMovement}</td>
              </tr>
              <tr>
                <td>{playerDataOne.Positioning}</td>
                <td>Positioning</td>
                <td>{playerDataTwo.Positioning}</td>
              </tr>
              <tr>
                <td>{playerDataOne.Rotations}</td>
                <td>Rotations</td>
                <td>{playerDataTwo.Rotations}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Mental;