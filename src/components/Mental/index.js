import { connect } from 'react-redux';
import Mental from './mental';

function mapStateToProps(store) {
  return {
    decisionMakingOne: store.playerOne.mental.decisionMaking,
    decisionMakingTwo: store.playerTwo.mental.decisionMaking,
    offBallMovementOne: store.playerOne.mental.offBallMovement,
    offBallMovementTwo: store.playerTwo.mental.offBallMovement,
    positioningOne: store.playerOne.mental.positioning,
    positioningTwo: store.playerTwo.mental.positioning,
    rotationsOne: store.playerOne.mental.rotations,
    rotationsTwo: store.playerTwo.mental.rotations
  }
}

export default connect(mapStateToProps)(Mental)