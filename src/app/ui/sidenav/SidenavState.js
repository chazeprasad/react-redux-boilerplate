import { SidenavStatus } from './SidenavStatus'
import { SidenavAction } from './SidenavAction'
const initialState = {
    status: SidenavStatus.MAX,
}

class SidenavState {
    static Reducer(state = initialState, action) {
        let status = null
        switch (action.type) {
            case SidenavAction.SET_MAX:
                return { ...state, status: SidenavState.MAX }
            case SidenavAction.SET_MIN:
                return { ...state, status: SidenavState.MIN }
            case SidenavAction.TOGGLE:
                if (state.status === SidenavStatus.MAX) {
                    status = SidenavStatus.MIN
                }
                if (state.status === SidenavStatus.MIN) {
                    status = SidenavStatus.MAX
                }

                return { ...state, status: status }
            default:
                return state
        }
    }
}

export { SidenavState }
