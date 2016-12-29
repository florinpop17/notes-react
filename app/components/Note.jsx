import React from 'react';

class Note extends React.Component{
    constructor(props) {
        super(props);
        
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    
    editNote(noteId) {
        console.log('edit')
        this.props.onEditNote(noteId);
    }
    
    deleteNote(noteId) {
        console.log('delete')
        this.props.onDeleteNote(noteId);
    }
    
    render(){
        let { text, left, top } = this.props.note;
        let noteId = this.props.key;
        
        console.log(this.props)
        
        return(
            <div className="note" style={{left:left, top:top}}>
                {text}
                <div className="buttons">
                    <button onClick={this.editNote(key)}>Edit</button>
                    <button onClick={this.deleteNote(key)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Note;