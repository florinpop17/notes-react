import React from 'react';
import Note from 'Note';

class Board extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            notes: {}
        }
    }
    
    addNote() {
        let { notes } = this.state;
        let pos = this.getRandomPosition();
        
        notes.push({
            text: '',
            left: pos.left,
            right: pos.right 
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
        if(notes.length > 0) {
            let { notes } = this.state;

            let displayNotes = notes.map((note, i) => {
                return (
                    <Note key={i} noteText={note} />
                );
            });
        } else {
            displayNotes = 
        }
        return(
            <div className="board">
                { displayNotes }
                <button onClick={this.addNote.bind(this)}>Add note</button>
            </div>
        );
    }
}

export default Board;