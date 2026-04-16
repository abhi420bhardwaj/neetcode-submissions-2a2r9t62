class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length).fill(0);
        let suffix = new Array(nums.length).fill(0);
        let result = new Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            let prefixProduct = 1;
            let j = 0;
            while (j < i) {
                prefixProduct *= nums[j];
                j++;
            }
            prefix[i] = prefixProduct;
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            let suffixProduct = 1;
            let j = nums.length - 1;
            while (j > i) {
                suffixProduct *= nums[j];
                j--;
            }
            suffix[i] = suffixProduct;
        }
        for(let i = 0 ; i < nums.length ;i++){
            result[i] = prefix[i]*suffix[i];
        }
        return result;
    }
}
