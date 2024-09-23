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
        case OPEN_WINDOW:
            return {
                ...state, 
                windows: [...state.windows, { application: action.application }]
            };

        case CLOSE_WINDOW:
            // Remove the window at the specified index by filtering it out
            return {
                ...state,
                windows: state.windows.filter((_, idx) => idx !== action.index)
            };

        default:
            return state;
    }
};

export default sessionReducer