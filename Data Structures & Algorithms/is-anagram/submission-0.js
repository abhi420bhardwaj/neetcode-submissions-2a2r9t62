class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false;
        }
        let map = new Map();
        for (const c of s){
            map.set(c,(map.get(c) || 0)+1);
        }
        for (const c of t){
            map.set(c,map.get(c)-1);
        }
        for (const num of map.values()){
            if (num != 0){
                return false;
            }
        }
        return true;
    }
}
