const OPEN_WINDOW = "session/OPEN_WINDOW"
export function openWindow(application, isOpen){
    return {
        type: OPEN_WINDOW,
        application,
        isOpen
    }
}

const GET_ALL_WINDOWS = "session/GET_ALL_WINDOWS"
// export function getAllWindows




const initialState = {
    windows: []
}

const sessionReducer = (state=initialState, action)=>{
    let newState = {...state}
    switch(action.type){
        case(OPEN_WINDOW):
            let actionApp = action.application
            let newWindow = {application: actionApp, isOpen: action.isOpen}
            // let windowNumber = newState.windows.length+1
            newState.windows.unshift(newWindow)
            return newState
        default:
            return newState
    }
}

export default sessionReducer