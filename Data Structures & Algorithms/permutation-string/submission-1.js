class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
     if(s1.length > s2.length) return false;
     let f1= new Array(26).fill(0);
     let f2 = new Array(26).fill(0);
     for (let i = 0 ; i<s1.length;i++){
         f1[s1.charCodeAt(i) - 97]++;
         f2[s2.charCodeAt(i) - 97]++;
     }
     if(f1.join('') == f2.join('')) return true;
     let l = 0;
     for(let r = s1.length ; r<s2.length;r++){
        f2[s2.charCodeAt(r) - 97]++;
        f2[s2.charCodeAt(l) - 97]--;
        l++;
        if(f1.join('') == f2.join('')) return true;
     }
     return false;
    }
}
