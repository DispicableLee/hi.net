const OPEN_WINDOW = "session/OPEN_WINDOW"
export function openWindow(application,index){
    return {
        type: OPEN_WINDOW,
        application,
        index
    }
}

const CLOSE_WINDOW = "session/CLOSE_WINDOW"

export function closeWindow(application, index){
    return {
        type: CLOSE_WINDOW,
        application,
        index
    }
}

const GET_ALL_WINDOWS = "session/GET_ALL_WINDOWS"
// export function getAllWindows




const initialState = {
    windows: [],
    desktopCss: {
        
    }
}

const sessionReducer = (state=initialState, action)=>{
    let newState = {...state}
    switch(action.type){
        case(OPEN_WINDOW):
            let actionApp = action.application
            let newWindow = {application: actionApp}
            // let windowNumber = newState.windows.length+1
            newState.windows.push({application: action.application})
            return newState
        case(CLOSE_WINDOW):
            delete newState.windows[action.index]
            return newState
        default:
            return newState
    }
}

export default sessionReducer