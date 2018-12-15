import { connect } from 'react-redux';
import PlayerTwo from './playerTwo';

function mapStateToProps(store) {
  return {
    playerDataTwo: store.playerTwo.playerData,
    playerTwo: store.playerTwo.playerTwo,
  }
}

export default connect(mapStateToProps)(PlayerTwo)