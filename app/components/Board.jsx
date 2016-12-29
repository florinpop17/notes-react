import React from 'react';
import Note from 'Note';

class Board extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            notes: []
        }
        
        this.addNote = this.addNote.bind(this);
    }
    
    addNote() {
        let { notes } = this.state;
        let pos = this.getRandomPosition();
        let noteNr = notes.length + 1; //Get the number of notes and add 1 to get the number of the new note.
        
        notes.push({
            text: 'Note #'+noteNr,
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
    
    render() {
        let { notes } = this.state;
        let displayNotes = "";
        
        if(notes.length > 0) {
            displayNotes = notes.map((note, i) => {
                console.log(note);
                return (
                    <Note key={i} note={note} />
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