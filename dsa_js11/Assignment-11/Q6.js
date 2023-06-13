//Time Complexity: O(N)
//Auxiliary Space: O(1)

function findMin(arr) {
  let min_ele = arr[0];
  // Traversing over array to find minimum element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min_ele) {
      min_ele = arr[i];
    }
  }
  return min_ele;
}

// Function call
console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([11,13,15,17]));
