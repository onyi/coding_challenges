const nextPermutation = (nums) => {
    
    if(!nums || nums.length === 0) return nums;
    
    let idx = -1;
    for(let i = nums.length - 2; i >= 0; i--){
        if(nums[i] < nums[i + 1]) {
            idx = i;
            break;
        }
    }
    
    if(idx >= 0){
        
        for(let i = nums.length - 1; i > idx; i--){
            if(nums[i] > nums[idx]){
                [nums[i], nums[idx]] = [nums[idx], nums[i]];
                break;
            } 
        }
        
    }
    
    
    let start = idx + 1;
    let end = nums.length - 1;
    
    while(start < end){
        
        [nums[start], nums[end]] = [nums[end], nums[start]];
        
        start++;
        end--;
    }
    
    return nums;

}

console.log(nextPermutation([1,2,3]));
