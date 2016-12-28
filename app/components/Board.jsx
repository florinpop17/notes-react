import React from 'react';
import Note from 'Note';

class Board extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            notes: []
        }
    }
    
    addNote() {
        let { notes } = this.state;
        
        notes.push(`Note ${notes.length}`);
        
        this.setState({
            notes: notes
        })
    }
    
    render() {
        let { notes } = this.state;
        
        let displayNotes = notes.map((note, i) => {
            return (
                <Note key={i} noteText={note} />
            );
        });
        
        return(
            <div className="board">
                { displayNotes }
                <button onClick={this.addNote.bind(this)}>Add note</button>
            </div>
        );
    }
}

export default Board;