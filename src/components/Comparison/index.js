import { connect } from 'react-redux';
import Comparison from './comparison';

function mapStateToProps(store) {
  return {
    drivingOne: store.playerOne.driving,
    drivingTwo: store.playerTwo.driving
  }
}

export default connect(mapStateToProps)(Comparison);