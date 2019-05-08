import React, { Component } from 'react'
import Video from './Video';

export default class VideoList extends Component {

    render() {
        const {videoList, currentVideo} = this.props;

        if(currentVideo !== '') {
            return (
                <div className="col-sm-4">
                    <div className="list-group mt-2">
                      <ul className="list-unstyled">
                        {
                            videoList.map((video) => (
                                <Video video={video} key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} currentVideo={this.props.currentVideo} / >
                            ))
                        }
                      </ul>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="col-sm-12">
                    <div className="list-group mt-2">
                      <ul className="list-unstyled">
                        {
                            videoList.map((video) => (
                                <Video video={video} key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} currentVideo={this.props.currentVideo} / >
                            ))
                        }
                      </ul>
                    </div>
                </div>
            )
        }
    }
}
