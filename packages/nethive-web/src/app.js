import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import notFound from './Components/not-found'
import index from './Components/index'
import './app.css'

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path='/' component={index}/>
						<Route component={notFound}/>
					</Switch>
				</div>
			</Router>

		);
	}
}
