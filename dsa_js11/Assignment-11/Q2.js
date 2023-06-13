//Complexity
//Time Complexity- O(logn)
//Space Complexity - O(n)

const findPeakElement = function(nums) {
    let start=0;
    let end=nums.length-1;
    while(start<end){
        let mid = Math.floor((start+end)/2);

        if(nums[mid]<nums[mid+1]){
            start=mid+1;
        
        }else {
            end=mid; 
        }
    }
    return start;
};

console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));