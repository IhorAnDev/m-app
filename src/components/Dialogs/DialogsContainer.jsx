import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {updateNewMessageTextCreator, addMessageTextCreator} from "../../redux/dialog-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElements =
        state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements =
        state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageText;


    let onSendMessageClick = () => {
        props.store.dispatch(addMessageTextCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder='Enter sms'/></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Dialogs;