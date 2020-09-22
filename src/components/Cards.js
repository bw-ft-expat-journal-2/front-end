import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const Cards = () => {
    const [ posts,setPosts ] = useState([])

    useEffect(()=> {
        axios.get('https://expatjournal-backend.herokuapp.com/api/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
    }, [])

    return(
        <div className='postHolder'>
            {posts.map = (post) => {
                return(
                    <Card post={post}/> 
                )
            }}
        </div>
    )
}

export default Cards