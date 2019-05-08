import React, { Component } from 'react'

export default class VideoPlayer extends Component {
  render() {
      const {videoId} = this.props.currentVideo.id;
      const {title, description} = this.props.currentVideo.snippet;

      console.log(videoId, title, description);

    return (
    <div className="col-sm-8">
        <div className="embed-responsive embed-responsive-16by9 video-player mt-2">
            <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoId}?rel=0`} allowFullScreen></iframe>
        </div>
        <div className="jumbotron jumbotron-fluid pl-3 mt-2">
            <h4 className="display-8">{title}</h4>
            <p className="lead">{description}</p>
        </div>
    </div>
    )
  }
}
