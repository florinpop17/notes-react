import React from 'react';

class Note extends React.Component{
    constructor(props) {
        super(props);
    }
    
    getPositionStyle() {
        let noteSize = 200; // Change if changed in CSS
        
        let screenH = window.innerHeight;
        let screenW = window.innerWidth;
        let halfNoteSize = noteSize/2;
        let positionX = Math.floor(Math.random() * (screenW - halfNoteSize));
        let positionY = Math.floor(Math.random() * (screenH - halfNoteSize));
        
        let style = {
            left: positionX,
            top: positionY
        };
        
        return style;
    }
    
    render(){
        
        let style = this.getPositionStyle();
        return(
            <div className="note" style={style}>{this.props.text}</div>
        );
    }
}

export default Note;