const login = (name, password) => {
    return {
        type: 'LOGIN',
        payload: {
            name,
            password
        }
    }
}

const logout = (name, password) => {
    return {
        type: 'LOGIN',
        payload: {
            name,
            password
        }
    }
}
