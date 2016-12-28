import React from 'react';
import Note from 'Note';

class Board extends React.Component{
    render() {
        return(
            <div>
                <h1>Notes</h1>
                <Note/>
            </div>
        );
    }
}

export default Board;