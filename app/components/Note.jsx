import React from 'react';

class Note extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        let { noteText, left, top } = this.props.note;
        
        let style = {...left, ...top}
        return(
            <div className="note" style={style}>{this.props.noteText}</div>
        );
    }
}

export default Note;