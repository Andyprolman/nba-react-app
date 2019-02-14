import React from 'react';


class Defense extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { playerDataOne, playerDataTwo } = this.props
    return(
      <div className='card' style={{textAlign: 'center'}}>
        <div className='card-header'>
          <h4>Defense</h4>
        </div>
        <div className='card-body'>
          <table>
            <tbody>
              <tr>
                <td>{playerDataOne.DefensiveRebounding}</td>
                <td>Defensive Rebounding</td>
                <td>{playerDataTwo.DefensiveRebounding}</td>
              </tr>
              <tr>
                <td>{playerDataOne.DefensiveVersatility}</td>
                <td>Defensive Versatiltiy</td>
                <td>{playerDataTwo.DefensiveVersatility}</td>
              </tr>
              <tr>
                <td>{playerDataOne.DefPickAndRollHandler}</td>
                <td>Pick and Roll Handler</td>
                <td>{playerDataTwo.DefPickAndRollHandler}</td>
              </tr>
              <tr>
                <td>{playerDataOne.DefPickAndRollBig}</td>
                <td>Pick and Roll Big</td>
                <td>{playerDataTwo.DefPickAndRollBig}</td>
              </tr>
              <tr>
                <td>{playerDataOne.PostDefense}</td>
                <td>Post Defense</td>
                <td>{playerDataTwo.PostDefense}</td>
              </tr>
              <tr>
                <td>{playerDataOne.RimProtection}</td>
                <td>Rim Protection</td>
                <td>{playerDataTwo.RimProtection}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Defense