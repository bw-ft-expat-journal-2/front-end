import React from 'react'
import { POSTS_PATH } from '../utils/URLS'
import PostImage from './PostImage'

const Card = ({ post }) => {
    
    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className='imageContainer'>
                {post.imageUrls.map = (image) => {
                    return(
                        <PostImage image={image}/>
                    )
                }}
            </div>
        </div>
    )
}

export default Card