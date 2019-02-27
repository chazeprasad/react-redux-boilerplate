import { SidenavStatus } from './SidenavStatus'
import { SidenavAction } from './SidenavAction'
const initialState = {
    status: SidenavStatus.MAX,
    menu: [


            { id:1, title: 'Menu 1 A', ico: '', children:[
                { title: 'Menu 2 A', children:[] },
                { title: 'Menu 2 B', children:[] },
                { title: 'Menu 2 C', children:[] },
                { title: 'Menu 2 D', children:[] },
                { title: 'Menu 2 E', children:[] },
                { title: 'Menu 2 F', children:[] },
            ] },
            { id:2, title: 'Menu 1 B', ico: '', active: true, children:[
                { title: 'Menu 2 A', children:[] },
                { title: 'Menu 2 B', children:[] },
                { title: 'Menu 2 C', children:[] },
                { title: 'Menu 2 D', children:[] },
                { title: 'Menu 2 E', children:[] },
                { title: 'Menu 2 F', children:[] },
            ] },
            { id:3, title: 'Menu 1 C', ico: '', children:[
                { title: 'Menu 2 A', children:[] },
                { title: 'Menu 2 B', children:[] },
                { title: 'Menu 2 C', children:[] },
                { title: 'Menu 2 D', children:[] },
                { title: 'Menu 2 E', children:[] },
                { title: 'Menu 2 F', children:[] },
            ] },
            { id:4, title: 'Menu 1 D', ico: '', children:[
                { title: 'Menu 2 A', children:[] },
                { title: 'Menu 2 B', children:[] },
                { title: 'Menu 2 C', children:[] },
                { title: 'Menu 2 D', children:[] },
                { title: 'Menu 2 E', children:[] },
                { title: 'Menu 2 F', children:[] },
            ] },
            { id:5, title: 'Menu 1 E', ico: '', children:[
                { title: 'Menu 2 A', children:[] },
                { title: 'Menu 2 B', children:[] },
                { title: 'Menu 2 C', children:[] },
                { title: 'Menu 2 D', children:[] },
                { title: 'Menu 2 E', children:[] },
                { title: 'Menu 2 F', children:[] },
            ] },
            { id:6, title: 'Menu 1 F', ico: '', children:[
                { title: 'Menu 2 A', children:[] },
                { title: 'Menu 2 B', children:[] },
                { title: 'Menu 2 C', children:[] },
                { title: 'Menu 2 D', children:[] },
                { title: 'Menu 2 E', children:[] },
                { title: 'Menu 2 F', children:[] },
            ] },



    ]
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
            case SidenavAction.ON_SELECT_MENU:
                const menu =  [...action.payload]
                return { ...state, menu: menu }

            default:
                return state
        }
    }
}

export { SidenavState }
