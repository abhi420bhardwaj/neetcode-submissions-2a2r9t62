class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let [i,j] = [0,1];
        while(j<prices.length){
            let diff = prices[j] - prices[i];
            if (diff > 0){
                profit = Math.max(profit,diff);
            }
            else{
                i = j;
            }
            j++;
        }
        return profit;
    }
}
