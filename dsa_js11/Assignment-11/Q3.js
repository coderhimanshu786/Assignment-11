//Complexity
//Time Complexity- O(n)
//Space Complexity - O(n)

function missingNumber(nums) {
   let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res += ((i + 1) - nums[i]);
    }
    return res;

};
console.log(missingNumber([3,0,1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));