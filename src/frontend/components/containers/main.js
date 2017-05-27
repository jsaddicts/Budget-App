import React from 'react';
import AppBar from 'material-ui/AppBar';

class Budget extends React.Component{
	render() {

		return(
			<div>
				<AppBar
					showMenuIconButton={false}
				    title="Budget"
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
			</div>
		)
	}
}
export default Budget;