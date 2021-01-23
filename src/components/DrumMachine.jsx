import React from 'react';
import { DrumPad } from "./DrumPad";

export class DrumMachine extends React.Component {

    constructor(props){
        super(props); 
    }

    render(){
        return (<div id="drum-machine">
            
            
            {document.body.addEventListener('keydown', (event) => {
                var key = event.key;
                switch(key){
                    case 'q':
                    case 'Q':
                        document.getElementById('heater-1').getElementsByClassName("clip")[0].play();
                        document.getElementById('display').innerHTML = 'heater-1';
                        break;
                    case 'w':
                    case 'W':
                        document.getElementById('heater-2').getElementsByClassName("clip")[0].play();
                        document.getElementById('display').innerHTML = 'heater-2';
                        break;
                    case 'e':
                    case 'E':
                        document.getElementById('heater-3').getElementsByClassName("clip")[0].play();
                        document.getElementById('display').innerHTML = 'heater-3';
                        break;
                    case 'a':
                    case 'A':
                        document.getElementById('heater-4').getElementsByClassName("clip")[0].play();
                        document.getElementById('display').innerHTML = 'heater-4';
                        break;
                    case 's':
                    case 'S':
                        document.getElementById('clap').getElementsByClassName("clip")[0].play();
                        document.getElementById('display').innerHTML = 'clap';
                        break;
                    case 'd':
                    case 'D':
                        document.getElementById('open-hh').getElementsByClassName("clip")[0].play();
                        document.getElementById('display').innerHTML = 'open-hh';
                        break;
                    case 'z':
                    case 'Z':
                        document.getElementById('kick-n-hat').getElementsByClassName("clip")[0].play();
                        document.getElementById('display').innerHTML = 'kick-n-hat';
                        break;
                    case 'x':
                    case 'X':
                        document.getElementById('kick').getElementsByClassName("clip")[0].play();
                        document.getElementById('display').innerHTML = 'kick';
                        break;
                    case 'c':
                    case 'C':
                        document.getElementById('closed-hh').getElementsByClassName("clip")[0].play();
                        document.getElementById('display').innerHTML = 'closed-hh';
                        break;
                    
                    default:
                        break;
                }
            })}
           
            
            {/* All these audio clip sources are taken from the freeCodeCamp example to complete the exercise
                no sound clip is mine */}

            <h3 id="display">&nbsp;</h3>

            <table id="table">
                <tr>
                    <td><DrumPad sound="heater-1" tag="Q" source='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'/></td>
                    <td><DrumPad sound="heater-2" tag="W" source='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'/></td>
                    <td><DrumPad sound="heater-3" tag="E" source='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'/></td>
                </tr>
                <tr>
                    <td><DrumPad sound="heater-4" tag="A" source='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'/></td>
                    <td><DrumPad sound="clap" tag="S" source='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'/></td>
                    <td><DrumPad sound="open-hh" tag="D" source='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'/></td>
                </tr>
                <tr>
                    <td><DrumPad sound="kick-n-hat" tag="Z" source='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'/></td>
                    <td><DrumPad sound="kick" tag="X" source='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'/></td>
                    <td><DrumPad sound="closed-hh" tag="C" source='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'/></td>
                </tr>

                
            </table>

        </div>);
    }

}