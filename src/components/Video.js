import React, { Component } from 'react'

export default class Video extends Component {

  state = { link: '' }

  selectVideo = (video) => {
    this.props.onVideoSelect(video);
  }

  render() {
    const video = this.props.video;
    const currentVideo = this.props.currentVideo;
    if(currentVideo !== '' && currentVideo.id.videoId === video.id.videoId) {
      return (
        <div  className={`list-group-item list-group-item-action video-select active`} key={video.id.videoId} onClick={() => { this.selectVideo(video.id.videoId)} } >
         <li className="media" >
                <img src={video.snippet.thumbnails.medium.url} width="150px" className="mr-3" alt="..." />
                <div className="media-body">
                <h5 className="mt-0 mb-1">{video.snippet.title}</h5>
                {video.snippet.description}
                </div>
            </li>
        </div>
      )
    } else {
      return (
           <div  className={`list-group-item list-group-item-action video-select `} key={video.id.videoId} onClick={() => { this.selectVideo(video.id.videoId)} } >
            <li className="media" >
                   <img src={video.snippet.thumbnails.medium.url} width="150px" className="mr-3" alt="..." />
                   <div className="media-body">
                   <h5 className="mt-0 mb-1">{video.snippet.title}</h5>
                   {video.snippet.description}
                   </div>
               </li>
           </div>
      )
    }

  }
}
