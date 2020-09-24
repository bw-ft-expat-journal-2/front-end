import React, { useState, useEffect } from 'react'
import PostImage from './PostImage'
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


const Card = ({ post }) => {
    
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
    }, [post])

    return(
        <CardStyle>
            <div className = 'titleanddes'>
            <h2 className= 'title'>{post.title}</h2>
            <p className='description'>{post.contents}</p>
            </div>
            <div className='imageContainer'>
                {images.map(image => {
                    return(
                        <PostImage image={image} id={post.id}/> 
                    )
                })}
            </div>
        </CardStyle>
    )
}

export default Card