import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'



class App extends React.Component{
    constructor(props){
        super(props);
        //This is only time we do Direct Assignment to state
        this.state = {lat :null, errorMessage: '' };
    } 
    componentDidMount(){
            window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage :err.message })
        );
    }

    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage} </div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div> Latitude :{this.state.lat} </div>;
        }
        return <div> Loading! </div>;    
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
