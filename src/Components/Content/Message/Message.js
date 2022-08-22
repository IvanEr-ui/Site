import React from 'react'
import {CreateActionAddText,  CreateActionChnageNewText } from '../../../Redux/MessageReducer'
import Dialogs from './Dialogs/Dialogs'
import module from './Message.module.css'
import Users from './Users/Users'


const Message =(props)=>{
    debugger
    const UserShow=props.state.UsersData.map(
        (user)=> <Users id={user.id} name={user.name}/>
    )
    const DialogsShow=props.state.DialogsData.map(
        (dialogs)=><Dialogs message={dialogs.message}/>
    )


    const AddText=()=>{
        props.dispatch(CreateActionAddText());
    }

    const chnageNewText=(event)=>{
        let text=event.target.value;
        props.dispatch(CreateActionChnageNewText(text));
    }

    return(
        <div className={module.message}>
            <div>
                {UserShow}
            </div>
            <div>
                {DialogsShow}
                <textarea onChange={chnageNewText} value={props.state.value}></textarea>
                <button onClick={AddText}>AddText</button>
            </div>
        </div>
    )
}

export default Message;