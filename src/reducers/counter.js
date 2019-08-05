/**강좌 5-6편 Reducer 
 * 카운터 기능 구현
*/

import *as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dumbObject: {
        a: 0,
        b: 1,
        c: 2,
        u: 3
    }
};

export default function counter(state = initialState, action) {
    /**... */
    switch(action.type) {
        case types.INCREMENT:       // 증가 
            return { 
                ...state,   //강좌 4-3편 state 내부 배열 처리
                 number: state.number + 1,
                dumbObject: { ...state.dumbObject, u: 0}
            };   

        case types.DECREMENT:       //감소
            return {
                ...state,
                number: state.number - 1
            };
            
        default:
            return state;
    }
}