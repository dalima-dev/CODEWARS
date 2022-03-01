function Connect4() {
  this.board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  this.turn = 1;
  this.gameOver = false;
}

Connect4.prototype = {
  play: function (col) {
    if (this.gameOver) return "Game has finished!";
    if (this.isColumnFull(col)) {
      return "Column full!";
    } else {
      for (let i = 5; i >= 0; i--)
        if (this.board[i][col] == 0) {
          this.board[i][col] = this.turn;
          break;
        }
    }
    if (
      this.checkHor(this.turn) ||
      this.checkVert(this.turn) ||
      this.checkDiag1(this.turn) ||
      this.checkDiag2(this.turn)
    ) {
      this.gameOver = true;
      return `Player ${this.turn} wins!`;
    } else {
      if (this.turn == 1) this.turn = 2;
      else this.turn = 1;
      return `Player ${this.turn == 2 ? 1 : 2} has a turn`;
    }
  },

  isColumnFull: function (col) {
    if (this.board[0][col] != 0) return true;
    else return false;
  },
  checkHor: function (item) {
    let count = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (this.board[i][j] == item) {
          count++;
          if (count == 4) return true;
        } else count = 0;
      }
      count = 0;
    }
    return false;
  },
  checkVert: function (item) {
    let count = 0;
    for (let j = 0; j < 7; j++) {
      for (let i = 0; i < 6; i++) {
        if (this.board[i][j] == item) {
          count++;
          if (count == 4) return true;
        } else count = 0;
      }
      count = 0;
    }
    return false;
  },
  checkDiag1: function (item) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (
          this.board[i][j] == item &&
          this.board[i + 1][j + 1] == item &&
          this.board[i + 2][j + 2] == item &&
          this.board[i + 3][j + 3] == item
        )
          return true;
      }
    }
    return false;
  },
  checkDiag2: function (item) {
    for (let i = 5; i > 2; i--) {
      for (let j = 0; j < 4; j++) {
        if (
          this.board[i][j] == item &&
          this.board[i - 1][j + 1] == item &&
          this.board[i - 2][j + 2] == item &&
          this.board[i - 3][j + 3] == item
        )
          return true;
      }
    }
    return false;
  },
};
