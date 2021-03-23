import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export default function App({ children }) {
    const [state,setState]=useState({
        statusApp:undefined
    })

    
	//KEYBOARD
	//NOTE FORWHATEVER REASON THE OUTSIDE SEES STATE CHANGE ON SHIFT CORRECT
	//IN HERE THOUGH WE USE the event.shiftKey because it thinks state shiftDown is false?
	const handleKeyEvent = async(event) => {
		//console.log(HaloCells);
		if(event.type == "keyup") { 
			switch(event.key) {
                case 'Escape':
                    setState({statusApp:"block"})
                    console.log("Status")
                    console.log('Escape')
                    break;
				case 'Shift':
					console.log('Shift')
					break;
				case 'Enter':
					console.log('Enter')
					switch("a") {
						case 'chat':
						default:
							break;
					}					
					break;
				default:
					break;				
			}
		}
		else if(event.type == "keydown") {  
			//console.log(event);
			switch(event.key) {
				case 'Escape':
                    console.log('Escape')
                    break;
				case 'Shift':
					console.log('Shift')
					break;
				case 'Enter':
					console.log('Enter')
					break;
				default:
					break;
			}
		}	 			
	}
	
	useEffect(() => {
		window.addEventListener("keyup",  handleKeyEvent);
		window.addEventListener("keydown",  handleKeyEvent);
		
		return () => { 
			window.removeEventListener("keyup",  handleKeyEvent);
			window.removeEventListener("keydown",  handleKeyEvent);
		}
	},[handleKeyEvent]); //handleKeyEvent	
	
  return (
    <AppContext.Provider value={{state,setState}}>
      {children}
    </AppContext.Provider>
  );
}