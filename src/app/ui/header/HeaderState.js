import { HeaderAction } from './HeaderAction'

const initialState = {
    query: '',
}

class HeaderState {
    static Reducer(state = initialState, action) {
        switch (action.type) {
            case HeaderAction.SEARCH:
                return { ...state, query: action.payload.query }
            default:
                return state
        }
    }
}

export { HeaderState }
