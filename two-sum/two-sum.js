//nums = [2,7,11,15] target = 9
//nums = [3,2,4] target = 6
//nums = [3,3] target = 6

// O(n^2)

const twoSum = function(nums, target) {
    for(let i =0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i, j];
            }
        }
    }
    return [];
};