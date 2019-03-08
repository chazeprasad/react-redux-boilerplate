import { HeaderAction } from './HeaderAction'

const initialState = {
    query: '',
    langMenu: null,
    showLangSelection: false
}

class HeaderState {
    static Reducer(state = initialState, action) {
        switch (action.type) {
            case HeaderAction.SEARCH:
                return { ...state, query: action.payload.query }
            case HeaderAction.SHOW_LANG_SELECTION:
                return { ...state, showLangSelection: true, langMenu: action.payload.langMenu }
            case HeaderAction.HIDE_LANG_SELECTION:
                return { ...state, showLangSelection: false, langMenu: null}
            default:
                return state
        }
    }
}

export { HeaderState }
