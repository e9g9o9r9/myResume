const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {


    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "yes)"},
        {id: 4, message: "yes)"},
        {id: 5, message: "yes)"}
    ],
    dialogsData: [
        {id: 1, name: "Egor"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Alexandr"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Valera"}
    ],

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let message = action.newMessageText;
            return {
                ...state,
                dialogsData: [...state.dialogsData, {id: 1, name: 'Egor'}],
                messagesData: [...state.messagesData, {id: 1, message: message}]

            };


        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})



export default dialogsReducer;




