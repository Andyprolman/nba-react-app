import { connect } from 'react-redux';
import Physical from './physical';

function mapStateToProps(store) {
  return {
    playerDataOne: store.playerOne.playerData,
    playerDataTwo: store.playerTwo.playerData
  }
}

export default connect(mapStateToProps)(Physical);