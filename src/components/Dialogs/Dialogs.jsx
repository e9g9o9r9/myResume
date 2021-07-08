import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";



const Dialogs = (props) => {


    let state = props.dialogsPage


    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElement = state.messagesData.map(m => <Message message={m.message}/>);

    let Messaged = React.createRef();



    let onNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }

    if(!props.isAuth ) return <Redirect to={'/login'}/>;
        return (



        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>
            <div className={s.messages}>
                {messagesElement}

            </div>
            <AddMessageReduxForm onSubmit={onNewMessage}/>
        </div>

    )
};

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name='newMessageText' placeholder='Enter your message' />
            </div>
            <div>
                <button>Add Message </button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm ({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;