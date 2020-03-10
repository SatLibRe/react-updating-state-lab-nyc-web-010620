// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

    handleBitRateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
            
        })
    }

    handleResoClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: "720p"
                }
            }
        })
    }

    render(){
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitRateClick}> </button>
                <button className="resolution" onClick={this.handleResoClick}> </button>
            </div>
        )
    }
}