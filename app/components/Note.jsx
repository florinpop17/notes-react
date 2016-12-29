import React from 'react';

class Note extends React.Component{
    constructor(props) {
        super(props);
        
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.onNoteMouseMove = this.onNoteMouseMove.bind(this);
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
    
    onNoteMouseMove(e) {
        let posLeft = e.clientX;
        let posTop = e.clientY;
        
        this.props.changePos(posLeft, posTop);
    }
    
    render(){
        let { text, left, top, editMode, noteId } = this.props.note;
        
        let innerNoteHTML = "";
        
        if(editMode){
            innerNoteHTML = (
                <div className="note-content">
                    <textarea ref="inputText" defaultValue={text}/>
                    <div className="buttons">
                        <button onClick={this.saveNote}><i className="fa fa-save"></i></button>
                    </div>                
                </div>
            );
        } else {
            innerNoteHTML = (
                <div className="note-content">
                    {text}
                    <div className="buttons">
                        <button onClick={this.editNote}><i className="fa fa-edit"></i></button>
                        <button onClick={this.deleteNote}><i className="fa fa-trash-o"></i></button>
                    </div>
                </div>
            );
        }
        
        return(
            <div id={noteId} className="note" style={{left:left, top:top}} onMouseMove={this.onNoteMouseMove}>
                {innerNoteHTML}
            </div>
        );
    }
}

export default Note;