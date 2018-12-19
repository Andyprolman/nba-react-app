import React from 'react';

class Offense extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      playerDataOne, playerDataTwo } = this.props;
    return (
      <div>
        <div className='card' style={{textAlign: 'center'}}>
          <div className='card-header'>
            <h4>Offense</h4>
          </div>
          <div className='card-body'>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className='progress'>
                        <div className='progress-bar' role='progressbar'  style={{width: playerDataOne.Driving/25*100}} aria-valuenow={playerDataOne.Driving/25*100} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                    <td>{playerDataOne.Driving}</td>
                    <td>Driving</td>
                    <td>
                      <div className='progress'>
                        <div className='progress-bar' role='progressbar' style={{width: playerDataTwo.Driving/25*100}} aria-valuenow={playerDataTwo.Driving/25*100} aria-valuenow={playerDataTwo.Driving} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                    <td>{playerDataTwo.Driving}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.Finishing}</td>
                    <td>Finishing</td>
                    <td>{playerDataTwo.Finishing}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.FoulDrawing}</td>
                    <td>Foul Drawing </td>
                    <td>{playerDataTwo.FoulDrawing}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.OffensiveRebounding}</td>
                    <td>Offensive Rebounding</td>
                    <td>{playerDataTwo.OffensiveRebounding}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.OnTheMoveShooting}</td>
                    <td>On-The-Move Shooting</td>
                    <td>{playerDataTwo.OnTheMoveShooting}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.Playmaking}</td>
                    <td>Playmaking</td>
                    <td>{playerDataTwo.Playmaking}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.OffPickAndRollHandler}</td>
                    <td>Pick and Roll Handler</td>
                    <td>{playerDataTwo.OffPickAndRollHandler}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.OffPickAndRollBig}</td>
                    <td>Pick and Roll Big</td>
                    <td>{playerDataTwo.OffPickAndRollBig}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.PostScoring}</td>
                    <td>Post Scoring</td>
                    <td>{playerDataTwo.PostScoring}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.PullUpShooting}</td>
                    <td>Pull Up Shooting</td>
                    <td>{playerDataTwo.PullUpShooting}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.SpaceCreation}</td>
                    <td>Space Creator</td>
                    <td>{playerDataTwo.SpaceCreation}</td>
                  </tr>
                  <tr>
                    <td>{playerDataOne.SpotUpShooting}</td>
                    <td>Spot Up Shooting</td>
                    <td>{playerDataTwo.SpotUpShooting}</td>
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

export default Offense;