import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { drivingOne, drivingTwo } = this.props;
    return (
      <div>
        <div className='card' style={{textAlign: 'center'}}>
          <div className='card-header'>
            <h4>Comparison</h4>
          </div>
          <div className='card-body'>
            <div>
              <h6>Offense:</h6>
              <table>
                <tbody>
                  <tr>
                    <td>{drivingOne}</td>
                    <td>Driving</td>
                    <td>{drivingTwo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comparison;