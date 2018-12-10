import { connect } from 'react-redux';
import PlayerOne from './playerOne';

function mapStateToProps(store){
    return {
        playerOne: store.playerOne.playerOne,
        team: store.playerOne.team,
        age: store.playerOne.age,
        contract: store.playerOne.contract,
        agent: store.playerOne.agent
    }
}

export default connect(mapStateToProps)(PlayerOne);