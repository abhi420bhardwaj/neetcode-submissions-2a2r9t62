class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let [i,j,ans] = [0,heights.length - 1,0];
        while (i<j){
            let water = (j-i)*Math.min(heights[i],heights[j]);
            ans = Math.max(water,ans);
            if(heights[i] < heights[j]){
                i++;
            }
            else{
                j--;
            }
        }
        return ans;
    }
}
