import React from 'react';

class Note extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        let { text, left, top } = this.props.note;
        
        console.log(this.props)
        
        return(
            <div className="note" style={{left:left, top:top}}>{text}</div>
        );
    }
}

export default Note;