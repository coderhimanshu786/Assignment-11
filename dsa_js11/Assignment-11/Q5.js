//Complexity
//Time Complexity- O(n)
//Space Complexity - O(n)

const intersection = function(nums1, nums2) {
    const num1Set = new Set(nums1);
    const num2Set = new Set(nums2);
    //Empty array
    const result = [];
    
    for (var value of num1Set) {
      if (num2Set.has(value)) {
        result.push(value);
      }
    }
    
    return result;
  };

  console.log(intersection([1,2,2,1], [2,2]));
  console.log(intersection([4,9,5], [9,4,9,8,4]));