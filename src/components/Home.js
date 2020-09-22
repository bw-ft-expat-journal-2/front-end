import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = (props) => {
	return (
    <>
        <Nav/>
		    <h1>Expat Journal</h1>
			<h2>What Was Your Adventure?</h2>
			<Link to="/post" className="link">
				{' '}
				Post a story now!{' '}
			</Link>
    </>
	)
}
export default Home