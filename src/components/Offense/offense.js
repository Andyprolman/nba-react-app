import React from 'react';

class Offense extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { 
      drivingOne, drivingTwo,
      finishingOne, finishingTwo,
      foulDrawingOne, foulDrawingTwo,
      offensiveRebOne, offensiveRebTwo,
      otmShootingOne, otmShootingTwo,
      playmakingOne, playmakingTwo,
      pandrHandlerOne, pandrHandlerTwo,
      pandrBigOne, pandrBigTwo,
      postScoringOne, postScoringTwo,
      pullUpShootingOne, pullUpShootingTwo,
      spacerOne, spacerTwo,
      spotUpShootingOne, spotUpShootingTwo,
     } = this.props;
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
                    <td>{drivingOne}</td>
                    <td>Driving</td>
                    <td>{drivingTwo}</td>
                  </tr>
                  <tr>
                    <td>{finishingOne}</td>
                    <td>Finishing</td>
                    <td>{finishingTwo}</td>
                  </tr>
                  <tr>
                    <td>{foulDrawingOne}</td>
                    <td>Foul Drawing </td>
                    <td>{foulDrawingTwo}</td>
                  </tr>
                  <tr>
                    <td>{offensiveRebOne}</td>
                    <td>Offensive Rebounding</td>
                    <td>{offensiveRebTwo}</td>
                  </tr>
                  <tr>
                    <td>{otmShootingOne}</td>
                    <td>On-The-Move Shooting</td>
                    <td>{otmShootingTwo}</td>
                  </tr>
                  <tr>
                    <td>{playmakingOne}</td>
                    <td>Playmaking</td>
                    <td>{playmakingTwo}</td>
                  </tr>
                  <tr>
                    <td>{pandrHandlerOne}</td>
                    <td>Pick and Roll Handler</td>
                    <td>{pandrHandlerTwo}</td>
                  </tr>
                  <tr>
                    <td>{pandrBigOne}</td>
                    <td>Pick and Roll Big</td>
                    <td>{pandrBigTwo}</td>
                  </tr>
                  <tr>
                    <td>{postScoringOne}</td>
                    <td>Post Scoring</td>
                    <td>{postScoringTwo}</td>
                  </tr>
                  <tr>
                    <td>{pullUpShootingOne}</td>
                    <td>Pull Up Shooting</td>
                    <td>{pullUpShootingTwo}</td>
                  </tr>
                  <tr>
                    <td>{spacerOne}</td>
                    <td>Space Creator</td>
                    <td>{spacerTwo}</td>
                  </tr>
                  <tr>
                    <td>{spotUpShootingOne}</td>
                    <td>Spot Up Shooting</td>
                    <td>{spotUpShootingTwo}</td>
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