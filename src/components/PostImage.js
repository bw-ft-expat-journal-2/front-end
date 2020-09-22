import React from 'react'

const PostImage = ({ image }) => {
    return(
        <img src={image.url} alt={image.alt}/>
    )
}

export default PostImage