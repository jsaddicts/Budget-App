import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Budget from './components/containers/main'

console.log(Budget)


class App extends React.Component {
	render() {
		return (
			<div>

				<MuiThemeProvider>
			    	<Budget />
			 	</MuiThemeProvider>
				
			</div>
		)
	}
}




ReactDOM.render(<App />, document.getElementById('app'))
