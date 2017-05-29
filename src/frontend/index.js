import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import './css/index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Main from './main.js'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

class App extends React.Component {
	render() {
		return (
			<div>

			 <Provider store = {store}>
			      <Main />
			 </Provider>,
				
			</div>
		)
	}
}




ReactDOM.render(<App />, document.getElementById('app'))
