class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let r = 0 ; r < 9 ; r++){
            let seen = new Set();
            for (let c = 0 ; c < 9 ; c++){
                const val = board[r][c];
                if (val === '.'){
                    continue;
                }
                if(seen.has(val)) return false;
                seen.add(val);
            }
        }
        for (let col = 0; col < 9; col++){
            let seen = new Set();
            for (let i = 0 ; i < 9 ; i++){
                const val = board[i][col];
                if (val === '.'){
                    continue;
                }
                if(seen.has(val)) return false;
                seen.add(val);
            }
        }
        for (let i = 0;i<9;i++){
            let seen = new Set();
            for (let k = 0 ;k < 3 ; k++){
                for (let m = 0;m<3; m++){
                    let row = Math.floor(i / 3) * 3 + k;
                    let col = (i % 3) * 3 + m;
                    const val = board[row][col];
                    if (val === '.'){
                        continue;
                    }
                    if(seen.has(val)) return false;
                    seen.add(val);
                }   
            }
        }
        return true;
    }
}
