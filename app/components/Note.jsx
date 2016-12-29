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
        let { noteId } = this.props.note;
        let newText = this.refs.inputText.value;
        this.props.onSaveNote(newText, noteId);
    }
    
    render(){
        let { text, left, top, editMode } = this.props.note;
        
        let innerNoteHTML = "";
        
        if(editMode){
            innerNoteHTML = (
                <div>
                    <textarea ref="inputText" defaultValue={text}/>
                    <button onClick={this.saveNote}>Save</button>
                </div>
            );
        } else {
            innerNoteHTML = (
                <div>
                    {text}
                    <div className="buttons">
                        <button onClick={this.editNote}>Edit</button>
                        <button onClick={this.deleteNote}>Delete</button>
                    </div>
                </div>
            );
        }
        
        return(
            <div className="note" style={{left:left, top:top}}>
                {innerNoteHTML}
            </div>
        );
    }
}

export default Note;