import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "it,s my first post", likesCount: 11}
            ],
            newPostText: 'IT'
        },
        dialogsPage: {
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
            newMessageText: 'Hello world'
        },
        sidebar: {
            friendsName: [
                {id: 1, friendName: 'Egor'},
                {id: 2, friendName: 'Andrey'},
                {id: 3, friendName: 'Sveta'}
            ]

        }


    },
    getState() {
        return this._state;
    },
    _CallSubscriber() {
        console.log('State change');
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 5
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._CallSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._CallSubscriber(this._state);
    },
    subscribe(observer) {
        this._CallSubscriber = observer;
    },
    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText

        };
        let postDialog = {
            name: "Valera"
        };
        this._state.dialogsPage.dialogsData.push(postDialog)
        this._state.dialogsPage.messagesData.push(newMessage);
        this._CallSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._CallSubscriber(this._state);
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._CallSubscriber(this._state);

    }
}






export default store;