import React from 'react';
import Offense from '../Offense'
import Defense from '../Defense'

class Comparison extends React.Component {
    render(){
        return(
            <div>
                <Offense />
                <Defense />
            </div>
        )
    }
}

export default Comparison