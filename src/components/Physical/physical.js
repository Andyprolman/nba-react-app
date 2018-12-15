import React from 'react';

class Physical extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { playerDataOne, playerDataTwo} = this.props;
    return (
      <div className='card' style={{ textAlign: 'center' }}>
        <div className='card-header'>
          <h4>Physical</h4>
        </div>
        <div className='card-body'>
          <table>
            <tbody>
              <tr>
                <td>{playerDataOne.Burst}</td>
                <td>Burst</td>
                <td>{playerDataTwo.Burst}</td>
              </tr>
              <tr>
                <td>{playerDataOne.LateralQuickness}</td>
                <td>Lateral Quickness</td>
                <td>{playerDataTwo.LateralQuickness}</td>
              </tr>
              <tr>
                <td>{playerDataOne.Motor}</td>
                <td>Motor</td>
                <td>{playerDataTwo.Motor}</td>
              </tr>
              <tr>
                <td>{playerDataOne.Speed}</td>
                <td>Speed</td>
                <td>{playerDataTwo.Speed}</td>
              </tr>
              <tr>
                <td>{playerDataOne.Strength}</td>
                <td>Strength</td>
                <td>{playerDataTwo.Strength}</td>
              </tr>
              <tr>
                <td>{playerDataOne.VerticalExplosiveness}</td>
                <td>Vertical Explosiveness</td>
                <td>{playerDataTwo.VerticalExplosiveness}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Physical
