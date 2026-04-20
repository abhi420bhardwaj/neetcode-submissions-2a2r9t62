class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let [l,r] = [0,0]
        let ans = 0;
        let counter = new Map();
        while(r < s.length){
            if(counter.has(s[r])){
                // remove the duplicate from the substring to make it valid.
                while(s[l] != s[r]){
                    counter.delete(s[l]);
                    l++;
                }
                l++;
            }
            counter.set(s[r],(counter.get(s[r]) || 0) + 1 );
            ans = Math.max(ans,r-l+1);
            r++;
        }
        return ans;
    }
}
