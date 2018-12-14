import { connect } from 'react-redux';
import Defense from './defense';

function mapStateToProps(store) {
  return {
    defensiveRebOne: store.playerOne.defense.defensiveReb,
    defensiveRebTwo: store.playerTwo.defense.defensiveReb,
    versatilityOne: store.playerOne.defense.versatility,
    versatilityTwo: store.playerTwo.defense.versatility,
    pandrHandlerOne: store.playerOne.defense.pandrHandler,
    pandrHandlerTwo: store.playerTwo.defense.pandrHandler,
    pandrBigOne: store.playerOne.defense.pandrBig,
    pandrBigTwo: store.playerTwo.defense.pandrBig,
    postDefenseOne: store.playerOne.defense.postDefense,
    postDefenseTwo: store.playerTwo.defense.postDefense,
    rimProtectionOne: store.playerOne.defense.rimProtection,
    rimProtectionTwo: store.playerTwo.defense.rimProtection
  }
}

export default connect(mapStateToProps)(Defense);