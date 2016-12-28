import React from 'react';
import Note from 'Note';

class Board extends React.Component{
    render() {
        return(
            <div className="board">
                <Note text="Note 1"/>
                <Note text="Note 2"/>
                <Note text="Note 3"/>
                <Note text="Note 4"/>
                <Note text="Note 5"/>
            </div>
        );
    }
}

export default Board;