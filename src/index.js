import _ from 'lodash'; // Importing lodash for function throttling
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
const API_KEY = 'AIzaSyAKKloKch7qcwGX7zwt8WV8fBKkw2zBMFM';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('chelsea');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); // delay search
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML
// and put it on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));