import React from 'react'
import module from './Post.module.css'

const Post =(props)=>{
    debugger
    return(
        <div className={module.post}>
            <div> 
                <img src='https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-rose-red-plant_420x.jpg?v=1634228232'/> 
            </div>
            <div>
                <font>{props.message}</font>
                <br></br>
                <button onClick={()=>{props.DeletePost(props.id)}}>Удалить</button>
            </div>
           
        </div>
    )
}

export default Post;