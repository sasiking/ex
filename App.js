import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params : { query : term},
            headers: {
                Authorization: 'Client-ID IAfuNKDDJsxQU090-O5WrTjAyWxM__aWPHgNXSYYSwM'
            }
        });

        console.log(response.data.results);
    }
    render(){
        return(
            <div className="ui container" style={{margin: '10px'}}>
                <SearchBar onClick={this.onSearchSubmit}/>
            </div>
        );
    }
}


export default App;
