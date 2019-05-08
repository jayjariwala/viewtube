import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

export default class VideoResult extends Component {
    renderPlayer = () => {
        const currentVideo = this.props.currentVideo;
        if(currentVideo.length !== 0) {
            //render only list
            return <VideoPlayer currentVideo={this.props.currentVideo} />
        }
        return;
    }

  render() {
    return (
        <div className="row">
            {this.renderPlayer()}
            <VideoList videoList={this.props.videoList} onVideoSelect={this.props.onVideoSelect} currentVideo={this.props.currentVideo} />
        </div>
    )
  }
}
