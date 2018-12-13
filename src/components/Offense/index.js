import { connect } from 'react-redux';
import Offense from './offense';

function mapStateToProps(store) {
  return {
    drivingOne: store.playerOne.offense.driving,
    drivingTwo: store.playerTwo.offense.driving,
    finishingOne: store.playerOne.offense.finishing,
    finishingTwo: store.playerTwo.offense.finishing,
    foulDrawingOne: store.playerOne.offense.foulDrawing,
    foulDrawingTwo: store.playerTwo.offense.foulDrawing,
    offensiveRebOne: store.playerOne.offense.offensiveReb,
    offensiveRebTwo: store.playerTwo.offense.offensiveReb,
    otmShootingOne: store.playerOne.offense.otmShooting,
    otmShootingTwo: store.playerTwo.offense.otmShooting,
    playmakingOne: store.playerOne.offense.playmaking,
    playmakingTwo: store.playerTwo.offense.playmaking,
    pandrHandlerOne: store.playerOne.offense.pandrHandler,
    pandrHandlerTwo: store.playerTwo.offense.pandrHandler,
    pandrBigOne: store.playerOne.offense.pandrBig,
    pandrBigTwo: store.playerTwo.offense.pandrBig,
    postScoringOne: store.playerOne.offense.postScoring,
    postScoringTwo: store.playerTwo.offense.postScoring,
    pullUpShootingOne: store.playerOne.offense.pullUpShooting,
    pullUpShootingTwo: store.playerTwo.offense.pullUpShooting,
    spacerOne: store.playerOne.offense.spacer,
    spacerTwo: store.playerTwo.offense.spacer,
    spotUpShootingOne: store.playerOne.offense.spotUpShooting,
    spotUpShootingTwo: store.playerTwo.offense.spotUpShooting
  }
}

export default connect(mapStateToProps)(Offense);