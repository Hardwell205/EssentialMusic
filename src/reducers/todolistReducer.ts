import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElList } from '../entitles/todoSingleEl';
export interface ITodoListReducer {
    todoList: ISingleElList[];
}

const defaultState = (): ITodoListReducer=> ({
    todoList: [{
        name: ' Lorem',
        description: ' Lorem ipsum sit'
    },
    {
        name: ' Lorem',
        description: ' Lorem ipsum sit2'
    }]
});

export default (state = defaultState(), action: any): ITodoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEMENT: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElement]
            };
        }
        default: {
            return state;
        }
    }
};