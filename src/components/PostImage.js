import React from 'react'

const PostImage = ({ image, id }) => {
    if(image.posts_id === id){
        return(
            <img src={image.url}  alt={image.alt}/>
        )
    } else {
        return(<> </>)
    }
}

export default PostImage