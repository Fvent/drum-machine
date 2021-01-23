import React from 'react';

export class DrumPad extends React.Component {

    constructor(props){
        super(props);
        
        
        this.playAudio = this.playAudio.bind(this);
        
    }

    playAudio(){
        var audioElement = document.getElementById(this.props.sound).getElementsByClassName("clip")[0];
        audioElement.play();
        document.getElementById('display').innerHTML = this.props.sound;
    }

    render(){
        return (
            // <div id={this.props.sound} className="drum-pad">
            //     <audio id={this.props.tag} src={this.props.source} className="clip"></audio>
            //     <button className="drum-btn" onClick={this.playAudio}>{this.props.tag}</button>
            // </div>

            <button id={this.props.sound} className="drum-pad" onClick={this.playAudio}>
                {this.props.tag}
                <audio id={this.props.tag} src={this.props.source} className="clip">
                </audio>
            </button>
        );
    }

}