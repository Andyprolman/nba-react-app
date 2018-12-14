import React from 'react';
import Offense from '../Offense'
import Defense from '../Defense'
import Mental from '../Mental'

class Comparison extends React.Component {
    render(){
        return(
            <div>
                <Offense />
                <Defense />
                <Mental />
            </div>
        )
    }
}

export default Comparison