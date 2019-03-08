import { Action } from "../../store/Action";

class HeaderAction extends Action {
    static SEARCH = '@@app/search'
    static SHOW_LANG_SELECTION = '@@app/show-lang-selection'
    static HIDE_LANG_SELECTION = '@@app/hide-lang-selection'
}

export { HeaderAction }
