import React from 'react'
import { connect } from 'react-redux'
import { useState} from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { editStory } from '../actions/index'

const initialForm = {
    title:'',
    contents:''
}

const EditCard = (props) => {
    const [ form, setForm ] = useState(initialForm)
    let history = useHistory()
    
    const onChange= e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        console.log(form)
        axiosWithAuth()
        .put(`/api/posts/${props.id}`, form)
        .then(res =>{
            console.log(res)
            history.push('/protected')
        })
        .catch(err => console.log(err))
    }

    
    
    return (
        <form onSubmit={e => onSubmit(e)}>
            <input type='text' name='title' value={form.title} onChange={onChange}/>Title
            <input type='text' name='contents' value ={form.contents} onChange={onChange}/>Contents
            <button>Submit</button>
            <button onClick={() => props.setUpdate(!props.update)}>Cancel</button>
        </form>
    ) 
}

const mapStateToProps = (state) => {
    return{
    editStory: state.editStory
    }
}

export default connect(mapStateToProps, {editStory})(EditCard)