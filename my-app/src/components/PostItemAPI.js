import React from 'react'
import css from './css/Content.module.css'

function PostItem(props) {
  return (
    
    props.savedPosts.map((post) => {
        const {id, user, type, tags, webformatURL} = post
        console.log(post)
        return (
            <div key={id} className={css.SearchItem}>
                <p>{type}</p>
                <p>{user}</p>
                <img src={webformatURL} alt='random' />
                <p>{tags}</p>
            </div>
        );
        
    }) 
    
  )
}

export default PostItem