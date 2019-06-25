import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super();
    this.state = {
      board: [
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ]
    };
  }

  toggle = (x, y) => {
    console.log(x, y);
    const toggle = this.state.board[x][y];
    let cell = this.state.board.slice();
    cell[x][y] = !toggle;
    this.setState({
      board: cell
    });
  };

  render() {
    return (
      <div className="board">
        <div className="board-row">
          <Cell
            toggle={this.state.board[0][0]}
            onClick={e => this.toggle(0, 0)}
          />
          <Cell
            toggle={this.state.board[1][0]}
            onClick={e => this.toggle(1, 0)}
          />
          <Cell
            toggle={this.state.board[2][0]}
            onClick={e => this.toggle(2, 0)}
          />
        </div>
        <div className="board-row">
          <Cell
            toggle={this.state.board[0][1]}
            onClick={e => this.toggle(0, 1)}
          />
          <Cell
            toggle={this.state.board[1][1]}
            onClick={e => this.toggle(1, 1)}
          />
          <Cell
            toggle={this.state.board[2][2]}
            onClick={e => this.toggle(2, 2)}
          />
        </div>
        <div className="board-row">
          <Cell
            toggle={this.state.board[0][2]}
            onClick={e => this.toggle(0, 2)}
          />
          <Cell
            toggle={this.state.board[1][3]}
            onClick={e => this.toggle(1, 3)}
          />
          <Cell
            toggle={this.state.board[2][3]}
            onClick={e => this.toggle(2, 3)}
          />
        </div>
      </div>
    );
  }
}

export default Board;
