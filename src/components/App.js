import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends Component {
    state = { videos: [] };
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({videos: response.data.items });
    };

    render () {
        return (
            <div className="ui container">
                <Helmet>
                    <title>YoutubeViewer</title>
                </Helmet>

                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;