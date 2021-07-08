import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,

    }


}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        }

    }
}




export default compose(withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))

(Dialogs);