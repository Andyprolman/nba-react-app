import { connect } from 'react-redux';
import PlayerOne from './playerOne';

function mapStateToProps(store){
    return {
        playerOne: store.playerOne.playerOne,
        playerDataOne: store.playerOne.playerData
    }
}

export default connect(mapStateToProps)(PlayerOne);