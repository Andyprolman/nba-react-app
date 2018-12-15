import { connect } from 'react-redux';
import PlayerTwo from './playerTwo';

function mapStateToProps(store){
    return {
        playerDataTwo: store.playerTwo.playerData,
        playerTwo: store.playerTwo.playerTwo,
        team: store.playerTwo.team,
        age: store.playerTwo.age,
        contract: store.playerTwo.contract,
        agent: store.playerTwo.agent,
    }
}

export default connect(mapStateToProps)(PlayerTwo)