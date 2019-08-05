import React, { Component } from 'react';
import PropTypes from 'prop-types';

{/** 버튼 클릭에 해당하는 함수들을 props로 받아온다 */}
const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

function createWarning(funcName) {
    return () => console.warn(funcName + 'si not defined');
}
const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
};

class Control extends Component {
    
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
             <button onClick={this.props.onPlus}>+</button>
             <button onClick={this.props.onSubtract}>-</button>
             <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Control.propTypes = PropTypes;
Control.defaultProps = defaultProps;

export default Control;