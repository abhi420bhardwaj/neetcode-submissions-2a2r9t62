class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let records = [];
        for (let operation of operations){
            if(operation === '+'){
                records.push(parseInt(records[records.length - 1]) + parseInt(records[records.length - 2]));
            }
            else if(operation === 'D'){
                records.push(parseInt(records[records.length - 1]) * 2);
            }
            else if(operation == 'C'){
                records.pop();
            }
            else{
                records.push(parseInt(operation));
            }
        }
        let ans = 0;
        for(let record of records){
            ans = ans + record;
        }
        return ans;
    }
}
