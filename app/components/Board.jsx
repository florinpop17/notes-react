import React from 'react';
import Note from 'Note';

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
            top: pos.top 
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
        
        if(notes.length > 0) {
            displayNotes = notes.map((note, i) => {
                console.log(note);
                return (
                    <Note key={i} note={note} onEditNote={this.handleEditNote} onDeleteNote={this.handleDeleteNote}/>
                );
            });
        }
        
        return(
            <div className="board">
                { displayNotes }
                <button onClick={this.addNote}>Add note</button>
            </div>
        );
    }
}

export default Board;