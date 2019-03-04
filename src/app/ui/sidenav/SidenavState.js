import { SidenavStatus } from './SidenavStatus'
import { SidenavAction } from './SidenavAction'
const initialState = {
    status: SidenavStatus.MAX,
    isMenuActive: true,
    menu: [


            { id:1, title: 'Menu 1 A', ico: '', children:[
                { id:11, title: 'Menu 2 A', children:[] },
                { id:12, title: 'Menu 2 B', children:[] },
                { id:13, title: 'Menu 2 C', children:[] },
                { id:14, title: 'Menu 2 D', children:[] },
                { id:15, title: 'Menu 2 E', children:[] },
                { id:16, title: 'Menu 2 F', children:[] },
            ] },
            { id:2, title: 'Menu 1 B', ico: '', children:[  ] },
            { id:3, title: 'Menu 1 C', ico: '', children:[
                { id:31, title: 'Menu 2 A', children:[] },
                { id:32, title: 'Menu 2 B', children:[] },
                { id:33, title: 'Menu 2 C', children:[] },
                { id:34, title: 'Menu 2 D', children:[] },
                { id:35, title: 'Menu 2 E', children:[] },
                { id:36, title: 'Menu 2 F', children:[] },
            ] },
            { id:4, title: 'Menu 1 D', ico: '', children:[] },
            { id:5, title: 'Menu 1 E', ico: '', children:[
                { id:51, title: 'Menu 2 A', children:[] },
                { id:52, title: 'Menu 2 B', children:[] },
                { id:53, title: 'Menu 2 C', children:[] },
                { id:54, title: 'Menu 2 D', children:[] },
                { id:55, title: 'Menu 2 E', children:[] },
                { id:56, title: 'Menu 2 F', children:[] },
            ] },
            { id:6, title: 'Menu 1 F', ico: '', children:[
                { id:61, title: 'Menu 2 A', children:[] },
                { id:62, title: 'Menu 2 B', children:[] },
                { id:63, title: 'Menu 2 C', children:[] },
                { id:64, title: 'Menu 2 D', children:[] },
                { id:65, title: 'Menu 2 E', children:[] },
                { id:66, title: 'Menu 2 F', children:[] },
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
