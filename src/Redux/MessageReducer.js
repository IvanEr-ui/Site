const ADD_MESSAGE="ADD-MESSAGE";
const CHANGE_NEW_TEXT_MESSAGE="CHANGE-NEW-TEXT-MESSAGE";

let initialStateMessage={
    UsersData:[],
    DialogsData:[],
    value:''
}

const MessageReducer=(state=initialStateMessage,action)=>{
    debugger
    switch(action.type){
        case(ADD_MESSAGE):
            {
                let object={
                    message: state.value
                }
                state.DialogsData.push(object);
                state.value='';
                return state
            }
            case(CHANGE_NEW_TEXT_MESSAGE):
            {
                state.value=action.newtext;
                return state
            }
            default:
                return state
    }
}
export const CreateActionAddText=()=>{
    return{
        type:ADD_MESSAGE
    }
}
export const CreateActionChnageNewText=(text)=>{
    return{
        type:CHANGE_NEW_TEXT_MESSAGE,
        newtext:text
    }
}
export default MessageReducer