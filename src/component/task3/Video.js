import React from "react";

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.video = React.createRef();
        this.volume = React.createRef();
        this.playBtn = React.createRef();
        this.pauseBtn = React.createRef();
        this.fullBtn = React.createRef();
        this.state = {
            volume: 100,
            value: 0,
            duration: null
        }
    }

    upd = () =>{
            this.setState({value: this.video.current.currentTime});
    };

    fullScreen = (e) =>{
        e.preventDefault();
        this.video.current.requestFullscreen()
    };

    play = (e) => {
        e.preventDefault();
        this.setState({duration: this.video.current.duration});
        this.playBtn.current.disabled = true;
        this.pauseBtn.current.disabled = false;
        this.video.current.play();
        setInterval(this.upd, 1000);
    };

    pause = (e) => {
        e.preventDefault();
        this.playBtn.current.disabled = false;
        this.pauseBtn.current.disabled = true;
        this.video.current.pause();
        clearInterval(this.upd)
    };

    changeValue = (e) => {
        e.preventDefault();
        this.setState({value: e.target.value});
        this.video.current.currentTime = e.target.value
    };

    changeVolume = (e) => {
        e.preventDefault();
        this.setState({volume: e.target.value});
        this.video.current.volume = e.target.value/100
    };

    componentDidMount() {

    }

    render() {
        return <div>
            <video
                className='video'
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                type="video/mp4"
                ref={this.video}
            />
            <div className="controls">
                <button className="player_button" onClick={this.play} ref={this.playBtn}>play</button>
                <button className="player_button" onClick={this.pause} ref={this.pauseBtn}>pause</button>
                <input type="range" min='0' max={this.state.duration} value={this.state.value} onChange={this.changeValue}/>
                <input  className='volume' type="range" min='0' max='100' value={this.state.volume} onChange={this.changeVolume}/>
                <button className="player_button" onClick={this.fullScreen} ref={this.fullBtn}>FullScreen</button>
            </div>
        </div>
    }
};