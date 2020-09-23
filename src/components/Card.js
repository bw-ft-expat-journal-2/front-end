import React, { useState, useEffect } from 'react'
import PostImage from './PostImage'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth';


const CardStyle = styled.div`
    border:2px solid pink;
    width: 80%;
    padding: 0px 20px;
    box-sizing: border-box;
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
            <h2>{post.title}</h2>
            <p>{post.contents}</p>
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