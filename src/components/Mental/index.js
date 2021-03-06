import { connect } from 'react-redux';
import Mental from './mental';

function mapStateToProps(store) {
  return {
    playerDataOne: store.playerOne.playerData,
    playerDataTwo: store.playerTwo.playerData
  }
}

export default connect(mapStateToProps)(Mental)