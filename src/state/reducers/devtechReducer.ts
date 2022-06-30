import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState = false;

const reducer = (devtechshow: boolean = initialState, action: Action): boolean => {
    switch (action.type){
        case ActionType.SHOW:
            return devtechshow = true;
        case ActionType.HIDE:
            return initialState;
        default:
            return devtechshow
    }
}

export default reducer