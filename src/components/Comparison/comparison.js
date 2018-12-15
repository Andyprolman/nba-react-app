import React from 'react';
import Offense from '../Offense';
import Defense from '../Defense';
import Mental from '../Mental';
import Physical from '../Physical';

class Comparison extends React.Component {
    render(){
        return(
            <div>
                <Offense />
                <Defense />
                <Mental />
                <Physical />
            </div>
        )
    }
}

export default Comparison