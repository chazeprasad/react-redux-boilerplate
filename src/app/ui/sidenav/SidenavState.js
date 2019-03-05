import { SidenavStatus } from './SidenavStatus'
import { SidenavAction } from './SidenavAction'
const initialState = {
    status: SidenavStatus.MAX,
    isMenuActive: true,
    menu: [
            { id:1, title: 'primary', level: '1', ico: '', children:[
                { id:11, title: 'secondary', level: '11', children:[] },
                { id:12, title: 'secondary', level: '12', children:[] },
                { id:13, title: 'secondary', level: '13', children:[] },
                { id:14, title: 'secondary', level: '14', children:[] },
                { id:15, title: 'secondary', level: '15', children:[] },
                { id:16, title: 'secondary', level: '16', children:[] },
            ] },
            { id:2, title: 'primary', level: '2', ico: '', children:[  ] },
            { id:3, title: 'primary', level: '3', ico: '', children:[
                { id:31, title: 'secondary', level: '21', children:[] },
                { id:32, title: 'secondary', level: '22', children:[] },
                { id:33, title: 'secondary', level: '23', children:[] },
                { id:34, title: 'secondary', level: '24', children:[] },
                { id:35, title: 'secondary', level: '25', children:[] },
                { id:36, title: 'secondary', level: '26', children:[] },
            ] },
            { id:4, title: 'primary', title: 'primary', level: '4', ico: '', children:[] },
            { id:5, title: 'primary', level: '5', ico: '', children:[
                { id:51, title: 'secondary', level: '51', children:[] },
                { id:52, title: 'secondary', level: '52', children:[] },
                { id:53, title: 'secondary', level: '53', children:[] },
                { id:54, title: 'secondary', level: '54', children:[] },
            ] },
            { id:6, title: 'primary', title: 'primary', level: '6', ico: '', children:[
                { id:61, title: 'secondary', level: '61', children:[] },
                { id:62, title: 'secondary', level: '62', children:[] },
                { id:63, title: 'secondary', level: '63', children:[] },
            ] },
    ]
}

class SidenavState {
    static Reducer(state = initialState, action) {
        let status = null
        switch (action.type) {
            case SidenavAction.SET_MAX:
                return { ...state, status: SidenavState.MAX, isMenuActive: false }
            case SidenavAction.SET_MIN:
                return { ...state, status: SidenavState.MIN , isMenuActive: false}
            case SidenavAction.TOGGLE:
                if (state.status === SidenavStatus.MAX) {
                    status = SidenavStatus.MIN
                }
                if (state.status === SidenavStatus.MIN) {
                    status = SidenavStatus.MAX
                }
                return { ...state, status: status, isMenuActive: false }
            case SidenavAction.ACTIVATE_MENU:
                return { ...state, isMenuActive: true }

            default:
                return state
        }
    }
}

export { SidenavState }
