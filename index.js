//importing Dependincies
import React from 'react';
import ReactDOM from 'react-dom';
//Create Components
//
function getButton(){
    return 'Click Me!';
}
const App = () => {
    return  (
        <div> 
        <label className = "label" htmlFor="name"> Enter Name:</label>
        <input id ="name" type = "text"/>
        <button style={{backgroundColor:'green' ,color: 'white'}}> 
        {getButton()}
        </button>
        </div>
    ); 
};
//Show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
