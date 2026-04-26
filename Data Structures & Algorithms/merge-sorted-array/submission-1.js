class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let last = nums1.length - 1;
        let l = m - 1;
        let r = n - 1;
        while(last >= 0 && r>=0){
            if(l >= 0 && nums1[l] > nums2[r]){
                nums1[last] = nums1[l];
                l--;
            }
            else{
                nums1[last] = nums2[r];
                r--;
            }
            last--;
        }

    }
}
