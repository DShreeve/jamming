import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }


    search() {
        this.props.onSearch(this.state.term)
    }

    handleTermChange(e) {
        this.setState({term: e.target.value})
    }

    handleKeyDown(e) {
        if(e.key === "Enter") {
            this.search();
        }
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} onKeyDown={this.handleKeyDown} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar ;