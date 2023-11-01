import React from 'react'
import css from './css/Content.module.css'

function PostItem(props) {
  return (
    
    props.savedPosts.map((post) => {
        const {title, name, image, description} = post
        console.log(post)
        return (
            <div key={post.image} className={css.SearchItem}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt={post.title} />
                <p>{post.description}</p>
            </div>
        );
        
    }) 
    
  )
}

export default PostItem