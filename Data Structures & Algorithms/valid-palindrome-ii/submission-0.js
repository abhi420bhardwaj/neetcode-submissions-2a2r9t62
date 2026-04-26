class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0,r = s.length-1;
        let count = 0;
        while(l<r){
            if(s[l] !== s[r]){
                return this.isPalindrome(s.slice(l+1,r+1)) || this.isPalindrome(s.slice(l,r)) ;
            }
            l++;
            r--;
        }
        return true;
    }

    isPalindrome(s){
        let l = 0,r = s.length-1;
        while(l<r){
            if(s[l] !== s[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
