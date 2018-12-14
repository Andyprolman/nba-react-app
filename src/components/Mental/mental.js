import React from 'react';

class Mental extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { 
      decisionMakingOne, decisionMakingTwo,
      offBallMovementOne, offBallMovementTwo,
      positioningOne, positioningTwo,
      rotationsOne, rotationsTwo
    } = this.props;

    console.log(decisionMakingOne)
    return (
      <div className='card' style={{ textAlign: 'center' }}>
        <div className='card-header'>
          <h4>Mental</h4>
        </div>
        <div className='card-body'>
          <table>
            <tbody>
              <tr>
                <td>{decisionMakingOne}</td>
                <td>Decision Making</td>
                <td>{decisionMakingTwo}</td>
              </tr>
              <tr>
                <td>{offBallMovementOne}</td>
                <td>Off-Ball Movement</td>
                <td>{offBallMovementTwo}</td>
              </tr>
              <tr>
                <td>{positioningOne}</td>
                <td>Positioning</td>
                <td>{positioningTwo}</td>
              </tr>
              <tr>
                <td>{rotationsOne}</td>
                <td>Rotations</td>
                <td>{rotationsTwo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Mental;