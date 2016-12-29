import React from 'react';

class Note extends React.Component{
    constructor(props) {
        super(props);
        
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
    }
    
    editNote() {
        let { noteId } = this.props.note;
        
        this.props.onEditNote(noteId);
    }
    
    deleteNote() {
        let { noteId } = this.props.note;
        
        this.props.onDeleteNote(noteId);
    }
    
    saveNote() {
        
    }
    
    render(){
        let { text, left, top, editMode } = this.props.note;
        
        if(editMode){
            return(
                <div className="note" style={{left:left, top:top}}>
                    <textarea ref="inputText" value={text}></textarea>
                    <button onClick={this.saveNote}>Save</button>
                </div>
            );   
        } else {

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
}

export default Note;