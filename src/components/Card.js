import React from 'react'
import { POSTS_PATH } from '../utils/URLS'
import PostImage from './PostImage'
import { connect } from 'react-redux'
import { editStory } from '../actions/index'
import { deleteStory } from '../actions/index'
import { useState } from 'react'
import EditCard from './EditCard'

const Card = (props) => {
    const [ update, setUpdate ] = useState(false)

    return(
        <div>
        {update ? <EditCard id={props.post.id} update={update} setUpdate={setUpdate}/> :
        <div>
            <h2>{props.post.title}</h2>
            <p>{props.post.contents}</p>
            <button onClick={() => {
                setUpdate(!update)} }>Edit Story</button>
            <button onClick={() => props.deleteStory(props.post)}>Delete Story</button>
            <div className='imageContainer'>
                {/* {
                    post.imageUrls.map(image => {
                    return(
                        <PostImage image={image}/>
                    )
                })} */}
            </div>
        </div>
    }
    </div> 
    )
}
const mapStatetoProps = (state) => {
    return {
        editStory: state.editStory,
        deleteStory: state.deleteStory
    }
}
export default connect (mapStatetoProps, {editStory, deleteStory})(Card)