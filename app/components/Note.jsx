import React from 'react';

class Note extends React.Component{
    constructor(props) {
        super(props);
        
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    
    editNote() {
        let { noteId } = this.state.note;
        console.log('edit')
        this.props.onEditNote(noteId);
    }
    
    deleteNote() {
        let { noteId } = this.state.note;
        console.log('delete')
        this.props.onDeleteNote(noteId);
    }
    
    render(){
        let { text, left, top } = this.props.note;
        
        return(
            <div className="note" style={{left:left, top:top}}>
                {text}
                <div className="buttons">
                    <button onClick={this.editNote}>Edit</button>
                    <button onClick={this.deleteNote}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Note;