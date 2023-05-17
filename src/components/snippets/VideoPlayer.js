import React from 'react'
import ReactPlayer from 'react-player'
function VideoPlayer(props){
    return(
        <ReactPlayer url={props.Url} playing controls muted loop/>
    )
}

export default VideoPlayer