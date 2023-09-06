function findMissingNumber(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    
    let sorted = nums.sort((a, b) => a - b);
    
    for (let i = min; i <= max; i++) {
        if (sorted[i - min] !== i) {
            return i;
        }
    }
}

const nums = [3, 0, 1];

const missingNumber = findMissingNumber(nums);
console.log(missingNumber)
