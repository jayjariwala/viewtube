import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

//import components
import VideoSearch from './components/VideoSearch';
import NoVideoSearch from './components/NoVideoSearch';
import VideoResult from './components/VideoResult';
import Loading from './components/Loading';

class App extends Component {
  state = {
    searchText:'',
    videoList : [],
    currentVideo: '',
    formValid: false,
    loading: false
  }

  renderMainView = (videoList) => {
    if(videoList.length === 0 && !this.state.loading ) {
      return <NoVideoSearch />
    } else if( videoList.length === 0 && this.state.loading) {
      return <Loading />
    }
    return <VideoResult videoList={this.state.videoList} currentVideo={this.state.currentVideo} onVideoSelect={this.onVideoSelect} />
  }

  searchTermChange = (text) => {
    //check for white space
    let onlyWhiteSpace = false;
    if(!text.replace(/\s/g,'').length) {
      onlyWhiteSpace = !onlyWhiteSpace;
    }
    if(!text === '' || !text === null || !onlyWhiteSpace) {
      this.setState({
        searchText:text,
        formValid:true
      })
    } else {
      this.setState({
        searchText: text,
        formValid:false
      })
    }
  }

  loadVideo = (status) => {
    this.setState({
      loading:status
    })
  }

  loadVideoList = (videoList) => {
    this.setState({
      videoList
    })
  }

  onVideoSelect = (videoId) => {
    const currentVideo = this.state.videoList.filter((video) => {
      return video.id.videoId === videoId;
    })
    this.setState({
      currentVideo : currentVideo[0]
    })
  }

  render() {
    return (
      <div>
        <VideoSearch  onTextChange={this.searchTermChange} searchText={this.state.searchText} isFormValid={this.state.formValid} loadVideo={this.loadVideo} loadVideoList={this.loadVideoList}/>
        <div className="container-fluid">
          {this.renderMainView(this.state.videoList)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/> , document.getElementById('root'));