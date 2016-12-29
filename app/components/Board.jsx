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
            noteId: uuid.v4(),
            editMode: false
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
        let { notes } = this.state;
        
        for(let i=0; i<notes.length; i++){
            if(notes[i].noteId === noteId){
                console.log('found')
                notes.splice(i,1);
                break;
            }
        }
        
    }
    
    handleDeleteNote(noteId) {
        let { notes } = this.state;        
        
        var noteIdxToRemove = notes.map((note) => note.noteId).indexOf(noteId);
        notes.splice(noteIdxToRemove, 1);
        
        console.log('deleted note');
        
        this.setState({
            notes: notes
        })
    }
    
    render() {
        let { notes } = this.state;
        
        let displayNotes = notes.map(note => {
            return (
                <Note key={note.noteId} note={note} onEditNote={this.handleEditNote} onDeleteNote={this.handleDeleteNote}/>
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