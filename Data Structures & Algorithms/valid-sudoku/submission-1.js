class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();
        for (let row = 0 ; row < 9; row++){
            for (let col = 0 ; col < 9 ; col ++){
                if(board[row][col] === '.') continue;
                const key = `${Math.floor(row/3)},${Math.floor(col/3)}`;
               if((rows.get(row) && rows.get(row).has(board[row][col])) ||
                   (cols.get(col) && cols.get(col).has(board[row][col])) ||
                   (squares.get(key) && squares.get(key).has(board[row][col]))){
                    return false;
               }
               if(!rows.has(row)) rows.set(row,new Set());
               if(!cols.has(col)) cols.set(col,new Set());
               if(!squares.has(key)) squares.set(key, new Set());

               rows.get(row).add(board[row][col]);
               cols.get(col).add(board[row][col]);
               squares.get(key).add(board[row][col]);
            }
        }
        return true;
    }
}
