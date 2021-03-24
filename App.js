import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

import "./src/assets/scss/style.scss";
import 'sweetalert2/src/sweetalert2.scss'

import AppContainer from "./src/Context";
function App() {		
	return (
		<div>
			<AppContainer/>
		</div>
	);
}
if (document.getElementById('react_root')) {
    ReactDOM.render(<App />, document.getElementById('react_root'));
}