import React, { useState, useEffect } from 'react'
import Card from './Card'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux'
import { fetchData } from '../actions/index'
import styled from 'styled-components'


const CardCont = styled.div`
    border:2px solid blue;
    display:flex;
    flex-direction: column;
    align-items: center;
`



const Cards = (props) => {
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
    }, [props.updated])

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

const mapStatetoProps = (state) => {
    return{
    updated: state.updated
    }
}

export default connect(mapStatetoProps)(Cards) 