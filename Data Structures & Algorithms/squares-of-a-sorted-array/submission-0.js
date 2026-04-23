class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let l = 0,r = nums.length - 1;
        let ans = new Array(nums.length).fill(0);
        let count = r;
        while(l <= r){
            if ( nums[l] ** 2 > nums[r] ** 2){
                ans[count] = nums[l] ** 2;
                l++;
            }
            else{
                ans[count] = nums[r] ** 2;
                r--;
            }
            count-- ;
        }
        return ans;
    }
}
