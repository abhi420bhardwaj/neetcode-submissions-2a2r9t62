class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let maxFreq = 0 , ans = 0;
        let freq = new Map();
        for (let r = 0;r<s.length;r++){
            const char = s[r];
            freq.set(char,(freq.get(char) || 0)+1);
            maxFreq = Math.max(maxFreq,freq.get(char));
            const window_length = r - l +1;
            if((window_length - maxFreq) > k ){
                freq.set(s[l],freq.get(s[l]) - 1);
                l++;
            }
            ans = Math.max(ans,r-l+1);
        }
        return ans;
    }
}
