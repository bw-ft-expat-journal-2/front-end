import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const dummyData = [
    {
        "id": 1,
        "title": "Best Restaurants near Ha Long Bay",
        "contents": "Eat some spicy noodles!",
        "users_id": 1
    },
    {
        "id": 2,
        "title": "How to Summit Killamanjaro",
        "contents": "Eat some spicy noodles!",
        "users_id": 2
    },
    {
        "id": 3,
        "title": "My Favorite Places to Get Espresso in Rome",
        "contents": "Eat some spicy noodles!",
        "users_id": 3
    },
    {
        "id": 4,
        "title": "45 Reasons Some Travel Places Are Overrated (You'll Never Guess Which!)",
        "contents": "Eat some spicy noodles!",
        "users_id": 4
    },
    {
        "id": 5,
        "title": "I reall couldn't think of another titile",
        "contents": "Eat some spicy noodles!",
        "users_id": 1
    }
]
//was just using to test the card creation was working / styling ^^^


const Cards = () => {
    const [ posts, setPosts ] = useState([])

    useEffect(()=> {
        axiosWithAuth()
            .get('api/posts')
            .then(res => {
                console.log(res.data)
                setPosts(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div className='postHolder'>
            {posts.map(post => {
                return(
                    <Card post={post}/> 
                )
            })}
        </div>
    )
}

export default Cards