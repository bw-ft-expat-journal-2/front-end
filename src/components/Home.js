import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import AddPost from './AddPost'

const Home = (props) => {
	return (

    <>
        
		    <h1>Expat Journal</h1>
			<Nav/>
			<h2>What Was Your Adventure?</h2>
			<Link to="/post" className="link" component={AddPost} >
				{' '}
				Post a story now!{' '}
			</Link>
    </>
	)
}
export default Home