import { connect } from 'react-redux';
import Comparison from './comparison';

function mapStateToProps(store) {
  return {
    drivingOne: store.playerOne.offense.driving,
    drivingTwo: store.playerTwo.offense.driving,
    finishingOne: store.playerOne.offense.finishing,
    finishingTwo: store.playerTwo.offense.finishing
  }
}

export default connect(mapStateToProps)(Comparison);