import React, { useState } from 'react'
import { addStory } from '../actions'
import { connect } from 'react-redux'


const AddPost = props => {
    const [formState, setFormState] = useState({
        title: "",
        conents: ""
    })

    const inputChange = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    const formSubmit = e => {
        props.addStory(formState)
    }

    return (
        <div>
            <form onSubmit={ formSubmit }>
                <label htmlFor="title">
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter a title"
                        onChange={ inputChange }
                        value={ formState.title }
                    />
                </label>
                <label htmlFor="content">
                    <input
                        type="textarea"
                        id="content"
                        name="content"
                        placeholder="Tell us your story!"
                        onChange={ inputChange }
                        value={ formState.content }
                    />
                </label>
                <button type="submit">Add a Post</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addStory: state.addStory
    }
}

export default connect(mapStateToProps, { addStory }) (AddPost)