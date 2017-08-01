import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

it('Should compile react', () => {
	class hello extends React.Component {
		render () {
			return(
				<div>
					Hello!
				</div>
			)
		}
	}
})

it('Should render without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<App />, div)
})
