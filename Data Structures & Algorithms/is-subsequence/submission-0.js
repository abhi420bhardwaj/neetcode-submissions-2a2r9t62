class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let l = 0;
        for (let r=0; r < t.length;r++){
            if(s[l] == t[r]){
                l++;
            }
        }
        if (l >= s.length) return true;
        return false;
    }
}
