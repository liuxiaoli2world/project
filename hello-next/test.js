/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let len = nums && Array.isArray(nums) ? nums.length : 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
        return [i, j];
      }
    }
  }
  console.log('object');
  return [];
};

twoSum([1, 2, 7, 5], 7);


/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  console.log(s.split(' '));
  return s.split(' ').length;
};

countSegments('fdsaf fdsaf fdsafd');


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for(var i=1,len=nums.length;i<len;i++) {
      if(nums[i]===nums[i-1]) {
          nums.splice(i,1);
      }
  }
  console.log(nums);
  return nums.length;
};
removeDuplicates([1,2,4,5,5,6]);