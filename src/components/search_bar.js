import React, { Component } from 'react';

// const SearchBar = ()=>{
//     return <input />; 
// Recall JSX converts this to React.createElement.
// Therefore we had to import React in the background #1
// This is called a functio based component
// }

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value= {this.state.term}
                onChange={event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;