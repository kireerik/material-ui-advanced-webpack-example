// In this file, we create a React component which incorporates components provided by Material-UI.
import React, {Component} from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
const muiTheme = getMuiTheme({ // it's optional to pass an object
	palette: {
		accent1Color: deepOrange500
	}
})

import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import {deepOrange500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'

const styles = {
	container: {
		textAlign: 'center'
		, paddingTop: 200
	}
}

class Main extends Component {
	constructor(properties, context) {
		super(properties, context)

		this.state = {
			open: false
		}
	}

	handleRequestClose = () => {
		this.setState({
			open: false
		})
	}

	handleTouchTap = () => {
		this.setState({
			open: true
		})
	}

	render() {
		const standardActions = (
			<FlatButton label="Ok" primary={true} onTouchTap={this.handleRequestClose}/>
		)

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div style={styles.container}>
					<h1>Material-UI</h1>
					<h2>example project</h2>
					<RaisedButton label="Super Secret Password" secondary={true} onTouchTap={this.handleTouchTap}/>

					<Dialog open={this.state.open} title="Super Secret Password" actions={standardActions} onRequestClose={this.handleRequestClose}>1-2-3-4-5</Dialog>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default Main