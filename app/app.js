'use strict';
import React, { Component } from 'react';
import {render} from 'react-dom';

class ComponentName extends Component {
	render() {
		return (
			<div>
				<h1>Hello world</h1>
			</div>
		);
	}
}

render((
	<ComponentName />
), document.getElementById("app"));
