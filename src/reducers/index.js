/** 리듀서 파일들을 통합 */

import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter, ui 
});

export default reducers;