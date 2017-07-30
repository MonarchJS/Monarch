import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import notFound from './Components/notFound'
import index from './Components/index'
import './App.css'

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
