class Action {
    type = null
    payload = null

    static Create(type, payload){
        let action = { type: type }
        if(payload) { action.payload = payload }
        return action
    }
}

export { Action }
