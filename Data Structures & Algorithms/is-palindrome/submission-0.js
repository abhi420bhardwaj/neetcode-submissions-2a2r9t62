class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let i = 0;
       let j = s.length - 1;
       while(i<j){
        while(i < j && !this.isAlphanumeric(s[i])){
                i++;
        }
            while(i < j && !this.isAlphanumeric(s[j])){
                j--;
        }
        if(s[i].toLowerCase() != s[j].toLowerCase()){
            return false;
        }
        i++;
        j--;
       }
       return true;
    }

    isAlphanumeric(c){
        return /^[a-zA-Z0-9]$/.test(c);
    }
}
