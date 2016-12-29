import React from 'react';
import Note from 'Note';
import uuid from 'uuid';

class Board extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            notes: []
        }
        
        this.addNote = this.addNote.bind(this);
        this.handleEditNote = this.handleEditNote.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
    }
    
    addNote() {
        let { notes } = this.state;
        let pos = this.getRandomPosition();
        
        notes.push({
            text: 'New note',
            left: pos.left,
            top: pos.top,
            noteId: uuid.v4()
        });
        
        this.setState({
            notes: notes
        })
    }
    
    getRandomPosition() {
        let noteSize = 200; //Change this when you change it in CSS
        
        let screenH = window.innerHeight;
        let screenW = window.innerWidth;
        let halfNoteSize = noteSize/2;
        let positionX = Math.floor(Math.random() * (screenW - halfNoteSize));
        let positionY = Math.floor(Math.random() * (screenH - halfNoteSize));
        
        let pos = {
            left: positionX,
            top: positionY
        }
        
        
        return pos;
    }
    
    handleEditNote(noteId) {
        console.log(noteId);
    }
    
    handleDeleteNote(noteId) {
        console.log(noteId);
    }
    
    render() {
        let { notes } = this.state;
        let displayNotes = "";
        
        displayNotes = notes.map(note => {
            return (
                <Note key={note.id} note={note} onEditNote={this.handleEditNote} onDeleteNote={this.handleDeleteNote}/>
            );
        });
        
        
        return(
            <div className="board">
                { displayNotes }
                <button onClick={this.addNote}>Add note</button>
            </div>
        );
    }
}

export default Board;