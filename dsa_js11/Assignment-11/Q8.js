//Complexity
//Time Complexity: O(logN)
//Auxiliary Space: O(n)

const intersect = function (nums1, nums2) {
  // sort an arrays
  nums1.sort((a, b) => a - b), nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    result = [];
//iterate over an array
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }
//return result which store empty to store a sort array
  return result;
};
//calling a function
console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));