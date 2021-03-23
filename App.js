import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Login from "./src/Pages/NoAuth/login";
import "./src/assets/scss/style.scss";
import Lockscreen from "./src/Pages/NoAuth/LockScreen";
import FullLayout from "./src/Layout/FullLayout";
//look into useCallback hook ,, pretty useful 
import AppContainer from "./src/Context";
function App() {		
	return (
		<div>
			<AppContainer/>
            {/* <Login/>
			<Lockscreen/>
			<FullLayout/> */}
		</div>
	);
}
if (document.getElementById('react_root')) {
    ReactDOM.render(<App />, document.getElementById('react_root'));
}