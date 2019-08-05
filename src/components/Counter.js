import React, { Component , PropTypes} from 'react';

import Value from './Value';
import Control from './Control';

{/**Value: 카운터 값만을 갖고있다, Control: 버튼 기능만 갖고있다. */}
const propTypes = {

};

const defaultProps = {

};

class Counter extends Component {
    
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
             <Value/>
             <Control/>
            </div>
        );
    }
}

export default Counter;