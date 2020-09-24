import React, { useState } from 'react'
import { POSTS_PATH } from '../utils/URLS'
import PostImage from './PostImage'
import { connect } from 'react-redux'

import { editStory } from '../actions'
import { deleteStory } from '../actions'


const Card = (props) => {
    
    return(
        <div>
            <h2>{props.post.title}</h2>
            <p>{props.post.contents}</p>
            <button onClick={() => deleteStory(props.post)}>Delete Story</button>
            <div className='imageContainer'>
                {console.log(props.post)}
                {/* {
                    post.imageUrls.map(image => {
                    return(
                        <PostImage image={image}/>
                    )
                })} */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        editStory: state.editStory,
        deleteStory: state.deleteStory
    }
}

export default connect(mapStateToProps, { editStory, deleteStory }) (Card)