import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormStyle/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements =
        state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements =
        state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody;


    let addNewMessage=(values)=>{
    props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}
const maxlength333 = maxLengthCreator(100)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component= {Textarea}
                       validate={[required,maxlength333]}
                       name='newMessageBody' placeholder='enter message'/>
            </div>
                <div>
                    <button>send</button>
                </div>
        </form>
  )
}
const AddMessageFormRedux = reduxForm ({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;