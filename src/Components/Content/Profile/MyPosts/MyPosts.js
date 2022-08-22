import React from 'react'
import Post from './Post/Post';
import module from './MyPosts.module.css'
import { CreateActionAddPost, CreateActionReadText,CreateActionDeletePost } from '../../../../Redux/ProfileReducer';


const MyPosts =(props)=>{
    debugger

    let Textare=React.createRef();

    const AddPost=()=>{
        debugger
        if(Textare.current.value!==null){
            props.dispatch(CreateActionAddPost());
        }
    }
    const ReadText=(e)=>{
        let text=Textare.current.value;
        if(text.indexOf('\n')!==-1){
            props.dispatch(CreateActionAddPost());
        }
        else{
            props.dispatch(CreateActionReadText(text));
        }
    }
    const DeletePost=(id)=>{
        props.dispatch(CreateActionDeletePost(id))
    }
    const PostShow=props.state.PostData.map(
        (post)=><Post message={post.message} DeletePost={DeletePost} id={post.id}/>
    )
    return(

        <div className={module.myposts}>
            MyPosts
            <div className={module.layout}>
                <textarea onChange={ReadText} ref={Textare} value={props.state.value}></textarea>
                <button onClick={AddPost}>Добавить</button>
                
            </div>
                {PostShow}
        </div>
    )
}

export default MyPosts;