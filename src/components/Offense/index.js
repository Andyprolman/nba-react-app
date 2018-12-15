import { connect } from 'react-redux';
import Offense from './offense';

function mapStateToProps(store) {
  return {
    playerDataOne: store.playerOne.playerData,
    playerDataTwo: store.playerTwo.playerData,
  }
}

export default connect(mapStateToProps)(Offense);