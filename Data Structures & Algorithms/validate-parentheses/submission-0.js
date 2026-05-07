class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        let open = new Set(['(','{','[']);
        let closed = new Set([')','}',']']);
        for (let char of s){
            if(open.has(char)){
                arr.push(char);
            }
            else{
                if(char == '}' && arr[arr.length - 1] != '{'
                 || char == ']' && arr[arr.length - 1] != '['
                 || char == ')' && arr[arr.length - 1] != '('){
                    return false;
                 }
                 else{
                    arr.pop();
                 }
            }
        }
        return arr.length == 0;
    }
}
