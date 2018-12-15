import { connect } from 'react-redux';
import Defense from './defense';

function mapStateToProps(store) {
  return {
    playerDataOne: store.playerOne.playerData,
    playerDataTwo: store.playerTwo.playerData  }
}

export default connect(mapStateToProps)(Defense);