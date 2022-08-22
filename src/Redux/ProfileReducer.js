const ADD_POST="ADD-POST";
const CHANGE_NEW_TEXT_PROFILE="CHANGE-NEW-TEXT-PROFILE";
const DELETE_POST="DELETE_POST"

let initialStateProfile={
    PostData:[],
    value:''
}
function Count(PostData){
    debugger
    if(PostData===undefined){
        return 1
    }
    else{
        return PostData.id+1
    }
}
const ProfileReducer=(state=initialStateProfile,action)=>{
    debugger
    switch(action.type){
        case(ADD_POST):
        {
            let object={
                id:Count(state.PostData[state.PostData.length-1]),
                message: state.value
            }
           
            state.PostData.push(object);
            
            state.value='';
            return state
        }
        case(DELETE_POST):
        {
            state.PostData.splice(state.PostData.findIndex(object => {
                return (object.id === action.id);
              }),1)
            
            return state;    
        }
        case(CHANGE_NEW_TEXT_PROFILE):
        {
         
            state.value=action.newtext;
            
            return state
        }
        default:
            return state
    }
}

export const CreateActionAddPost=()=>{
    return{
        type:ADD_POST
    }
}

export const CreateActionDeletePost=(Id)=>{
    return{
        type:DELETE_POST,
        id:Id
    }
}

export const CreateActionReadText=(text)=>{
    return{
        type:CHANGE_NEW_TEXT_PROFILE,
        newtext:text
    }
}
export default ProfileReducer