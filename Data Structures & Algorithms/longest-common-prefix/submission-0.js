class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let i = 0;
        let len = Infinity;
        let ans = new Array();
        for (let j = 0;j<strs.length;j++){
            if(strs[j].length < len){
                len = strs[j].length;
                i = j;
            }
        }
        let small = strs[i];
        for(let k = 0;k<len;k++){
            let temp = 0;
            for(let j = 0;j<strs.length;j++){
                if(small[k] == strs[j][k]){
                    temp++;
                }
            }
            if(temp == strs.length){
                ans.push(small[k]);
            }
            else{
                break;
            }
        }
        return ans.join('');
    }
}
