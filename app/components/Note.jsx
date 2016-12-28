import React from 'react';

class Note extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        let screenH = window.innerHeight;
        let screenW = window.innerWidth;
        let noteSize = 200;
        let halfNoteSize = noteSize/2;
        let positionX = Math.floor(Math.random() * (screenW - halfNoteSize));
        let positionY = Math.floor(Math.random() * (screenH - halfNoteSize));
        
        console.log(this.props.text, positionX, positionY, screenW, screenH);
        
        let style = {
            left: positionX,
            top: positionY
        }
        return(
            <div className="note" style={style}>{this.props.text}</div>
        );
    }
}

export default Note;