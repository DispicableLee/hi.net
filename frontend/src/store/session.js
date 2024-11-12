const START_APPLICATION = "session/START_APPLICATION"
export function startApplication(application,index){
    return {
        type: START_APPLICATION,
        application,
        index
    }
}

const EXIT_APPLICATION = "session/EXIT_APPLICATION"

export function exitApplication(application, index){
    return {
        type: EXIT_APPLICATION,
        application,
        index
    }
}

const OPEN_WINDOW = "session/OPEN_WINDOW"
export function openWindow(application, index){
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

const CHANGE_DESKTOP_BACKGROUND = "session/CHANGE_DESKTOP_BACKGROUND"

export function changeDesktopBackground(value){
    return {
        type: CHANGE_DESKTOP_BACKGROUND,
        value
    }
}

const CHANGE_TASKBAR_BACKGROUND = "session/CHANGE_TASKBAR_BACKGROUND"
export function changeTaskbarBackground(value){
    return {
        type: CHANGE_TASKBAR_BACKGROUND,
        value
    }
}



const initialState = {
    windows: [],
    desktopCss: {
        main: {
            background: "#008080"
        },
        taskbar: {
            background: "#D897D2"
        }
    },
    hiNet: [
        {
            tab: "About",
            content: "",
            idx: 0
        },
        {
            tab: "Links",
            content: [
                {
                    name: "GitHub",
                    url: ""
                },
                {
                    name: "Instagram",
                    url: ""
                }
            ],
            idx: 1
        }
    ]
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_APPLICATION:
            return {
                ...state, 
                windows: [...state.windows, { application: action.application, isOpen: true }]
            };

        case EXIT_APPLICATION:
            // Remove the window at the specified index by filtering it out
            return {
                ...state,
                windows: state.windows.filter((_, idx) => idx !== action.index)
            };

        case OPEN_WINDOW:
            return {
                ...state,
                windows: state.windows.map((w, idx)=> 
                    idx === action.index ? {...w, isOpen: true} : w
                )
            }
        case CLOSE_WINDOW:
            return {
                ...state,
                windows: state.windows.map((w, idx)=>
                    idx === action.index ? {...w, isOpen: false} : w
                )
            }
        case CHANGE_DESKTOP_BACKGROUND:
            console.log("changing desktop css")
            return {
                ...state,
                desktopCss: {...state.desktopCss, main: {background: action.value}}
            }
        case CHANGE_TASKBAR_BACKGROUND:
        return {
            ...state,
            desktopCss: {...state.desktopCss, taskbar: {background: action.value}}
        }
        default:
            return state;
    }
};

export default sessionReducer