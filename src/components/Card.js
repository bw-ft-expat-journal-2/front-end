import React, { useState, useEffect } from 'react'
import PostImage from './PostImage'
import { connect } from 'react-redux'
import { editStory } from '../actions/index'
import { deleteStory } from '../actions/index'
import EditCard from './EditCard'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const CardStyle = styled.div`
    border: 2px solid gray;
    width: 80%;
    padding: .5rem;
    box-sizing: border-box;
    margin-top: 2rem;
    background-color:#afcbec;
    display:flex;
    justify-content:space-between;
`

const Card = (props) => {
    const [ update, setUpdate ] = useState(false)
    const [images, setImages] = useState([])

    useEffect(()=> {
        axiosWithAuth()
            .get(`api/images`)
            .then(res => {
                console.log(res.data.data)
                setImages(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [props.post])


    return(
        <CardStyle>

        {update ? <EditCard id={props.post.id} update={update} setUpdate={setUpdate}/> :
        <div>
            <h2>{props.post.title}</h2>
            <p>{props.post.contents}</p>
            <button onClick={() => {
                setUpdate(!update)} }>Edit Story</button>
            <button onClick={() => props.deleteStory(props.post)}>Delete Story</button>

            <div className='imageContainer'>
                {images.map(image => {

                    return(
                        <PostImage image={image} id={props.post.id}/> 
                    )
                })}
            </div>
        </div>
    }
    </CardStyle> 
    )
}
const mapStatetoProps = (state) => {
    return {
        editStory: state.editStory,
        deleteStory: state.deleteStory
    }
}
export default connect (mapStatetoProps, {editStory, deleteStory})(Card)
