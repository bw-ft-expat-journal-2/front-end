import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components'


const CardCont = styled.div`
    border:2px solid blue;
    display:flex;
    flex-direction: column;
    align-items: center;
`


const Cards = () => {
    const [ posts, setPosts ] = useState([])

    useEffect(()=> {
        axiosWithAuth()
            .get('api/posts')
            .then(res => {
                setPosts(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <CardCont className='postHolder'>
            {posts.map(post => {
                return(
                    <Card post={post} key={post.id}/> 
                )
            })}
        </CardCont>
    )
}

export default Cards