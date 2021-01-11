import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import Netflixintro from '../asserts/netflix.mp4';
import './opening.css';

export default class opening extends Component {
  render() {
    return (
      <div style={{overflow: 'hidden'}}>
        <ReactPlayer
          url={Netflixintro}
          height="100vh"
          width="100%"
          playing
          muted
        />
      </div>
    );
  }
}
