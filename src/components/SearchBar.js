import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render () {
        return (
          <div className="ui segment" >
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label style={{ fontSize: '20px', marginBottom: '15px', color: '#1c0707'}}>YoutubeViewer</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={this.onInputChange} />
                </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;