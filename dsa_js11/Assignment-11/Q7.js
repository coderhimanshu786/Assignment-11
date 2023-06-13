//Complexity
//Time Complexity: O(logN)
//Auxiliary Space: O(n)

const searchRange = (nums, target) => {
    const search = d => {
      let mid, low = 0, high = nums.length - 1, out = -1;
      while(low <= high) {
        mid = (low + high) >> 1;
        if(nums[mid] < target + d) low = mid + 1;
        else high = mid - 1;
        if(nums[mid] == target) out = mid;
      }
      return out;
    }
  
    return [search(0), search(1)];
  };
  //call to function
  console.log(searchRange([5,7,7,8,8,10], 8));
  console.log(searchRange([5,7,7,8,8,10], 6));
  console.log(searchRange([], 0));